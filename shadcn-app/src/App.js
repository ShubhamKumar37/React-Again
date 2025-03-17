import React from 'react'
import { signInWithGooglePopup } from './utils/firebase.utils'

const App = () => {

  // signInWithGooglePopup();
  const signInGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log("This is the response of google signin = ", response);
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <button className='bg-red-500 p-2 text-white rounded-lg' onClick={signInGoogle}>Sign in with Google</button>
    </div>
  )
}

export default App