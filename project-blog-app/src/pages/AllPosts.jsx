import React, { useEffect, useState } from 'react'
import service from '../appwrite/config';
import Container from '../components/Container/Container';
import PostCard from '../components/Container/PostCard';

const AllPosts = () => {

  const [post, setPost] = useState([]);

  useEffect(() =>
  {
    service.getPosts([]).then((posts) => 
    {
      if(posts)
      {
        setPost(posts.documents);
        console.log("Posts = ", posts.documents);
      }
    });
  }, []);

  if(post.length === 0)
  {
    return (
      <div className='w-full py-8 flex justify-center items-center'>
      <Container>
        <div className='flex flex-wrap text-center   rounded-lg p-4'>
          <span className='text-lg font-medium text-gray-100 dark:text-gray-300'>
            There is no post please try again later or start your first post
          </span>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {post.map((item) =>(
            <div className='p-2 w-1/4' key={item?.$id}>
              <PostCard {...item} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts