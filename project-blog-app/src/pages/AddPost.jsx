import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container/Container';
import PostForm from '../components/post-form/PostForm';

const AddPost = () => {
  return (
    <div>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPost