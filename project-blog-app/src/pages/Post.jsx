import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import service from '../appwrite/config';
import Container from '../components/Container/Container';
import parse from "html-react-parser"
import Button from '../components/Button';

const Post = () => {

  const [post, setPost] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() =>
  {
    if(slug)
    {
      service.getPost(slug).then((post) =>
      {
        setPost(post);
        // navigate("/");
      })
    }
  }, [navigate, slug]);

  const deletePost = async () =>
  {
    await service.deletePost(post.$id).then((status) => 
    {
      if(status)
      {
        service.deleteFile(post.featuredImage);
        navigate('/');
      }
    });
  }
  return post ? (
    <div className='py-8'>
      <Container>
        <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
          <img src={service.filePreview(post.featuredImage)} alt={post.title} className='rounded-xl'></img>
          {
            isAuthor ? (
              <div className='absolute-right-6 top-6'>
                <Link to={`/edit-post/${post.$id}`} >
                  <Button className='mr-3' bgColor='bg-green-500'>Edit</Button>
                </Link>
                  <Button onClick={deletePost} className='mr-3' bgColor='bg-red-500'>Delete</Button>
              </div>
            ) : null
          }
        </div>

        <div className='w-full mb-6'>
          <h1 className='text-2xl font-bold'>{post.title}</h1>
          <div className='browser-css'>
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post