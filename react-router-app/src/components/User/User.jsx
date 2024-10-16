import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userId} = useParams(); // This userId should be name as same when defined in route

  return (
    <div className='bg-orange-500 text-black text-2xl text-center py-3'>
        User {userId}
    </div>
  )
}

export default User