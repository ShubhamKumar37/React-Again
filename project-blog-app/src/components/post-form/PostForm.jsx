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


  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;

      if (file) {
        await service.deleteFile(post.featuredImage);
      }

      const dbPost = await service.updatePost(post.$id, { ...data, featuredImage: file ? file.$id : undefined });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
    else {
      const file = await service.uploadFile(data.image[0]);

      if (file) {
        data.featuredImage = file.$id;
        data.status = data.status === "active" ? true : false;
        const dbPost = await service.createPost({ ...data, userId: userData.$id, })

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }


    }
  }


  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap gap-4'>
      <div className='w-full md:w-2/3 px-2 space-y-4'>
        <div className='min-w-[200px]'>

        <Input
          label="Title"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
          defaultValue={getValues("title")}
          />
          </div>

        <RTE
          label={"Content : "}
          name={"content"}
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className='w-full md:w-1/3 px-2 space-y-4'>
        <Input
          label="Featured Image : "
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className="mb-4"
          {...register("image", { required: !post })}
          defaultValue={getValues("image")}
        />
        {post && (
          <div className="mb-4">
            <img src={service.filePreview(post.featuredImage)} alt={post.title} className='rounded-lg' height={200} width={200} />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
          defaultValue={getValues("status")}
        />

        <Button
          type='submit'
          bgColor={post ? "bg-green-500" : undefined}
          className='w-full'
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm