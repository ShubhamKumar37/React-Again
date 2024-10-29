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
        console.log(posts.documents);
      }
    });
  }, []);

  if(post.length === 0)
  {
    return (
      <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          There is no post please come again or try login
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((item) =>(
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