import React, { useCallback, useEffect } from 'react'
import Button from '../Button'
import Input from '../Input'
import RTE from '../RTE'
import Select from '../Select'
import service from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'


const PostForm = ({ post }) => {

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const { register, getValues, setValue, watch, control, handleSubmit } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.post || "",
      status: post?.status || true,
      content: post?.content || ""
    }
  });


  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") return value.trim().toLowerCase().replace(/[^a-zA-z\d\s]+/g, '-').replace(/\s/g, '-');
  }, []);

  const submit = async (data) => {
    if(post)
    {
      const file = data.image[0] ? await service.uploadFile(data.image[0]): null;

      if(file)
      {
        await service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updatePost(post.$id, {...data, featuredImage: file ? file.$id : undefined});

      if(dbPost)
      {
        navigate(`/post/${dbPost.$id}`);
      }
    }
    else
    {
     const file = await service.uploadFile(data.image[0]);

      if(file)
      {
        data.featuredImage = file.$id;
        data.status = data.status === "active" ? true : false;
        const dbPost = await service.createPost({...data, userId: userData.$id, })

        if(dbPost)
        {
          navigate(`/post/${dbPost.$id}`)
        }
      }

      
    }
  }

  useEffect(() => {
    watch((value, { name }) => {
      if (name === 'title') {
        setValue("slug", slugTransform(value.title), { shouldValidate: true })
      }
    })
  }, [setValue, slugTransform, watch])
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-2'>
        <Input
          label="Title"
          placeholder="Title"
          className="mb-4"
          {...register("title", {required: true})}
        />

        <Input
          label="Slug : "
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => 
            {
              setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
            }
          }
        />

        <RTE 
          label={"Content : "} 
          name={"content"}
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className='1/3 px-2'>
        <Input 
          label="Featured Image : "
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className="mb-4"
          {...register("image", {required: !post})}
        />
        {
          post && (
            <div>
              <img src={service.filePreview(post.featuredImage)} alt={post.title} className='rounded-lg'></img>
            </div>
          )
        }

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", {required: true})}
        />

        <Button 
          type='submit'
          bgColor={post ? "bg-green-500" : undefined}
          className='w-full'
        > {post ? "Update": "Submit"}</Button>
      </div>
    </form>
  )
}

export default PostForm