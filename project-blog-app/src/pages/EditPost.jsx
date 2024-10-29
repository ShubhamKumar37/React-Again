import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config';
import Container from '../components/Container/Container';
import PostForm from '../components/post-form/PostForm';

const EditPost = () => {

  const [post, setPost] = useState(null);
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(() =>
  {
    if(slug)
    {
      service.getPost(slug).then((item) => 
      {
        if(item) setPost(item);
        else navigate("/"); 
      });
    }
  }, [navigate, slug]);

  return (
    <div>
      <Container>
        <PostForm post={post} />
        
      </Container>
    </div>
  )
}

export default EditPost