import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';

import {logout} from "../../store/authSlice"
const LogoutBtn = () => {

    const dispatch = useDispatch();


    function logoutHandler()
    {
        authService.logoutAccount().then(() => dispatch(logout())).catch((Error) => console.log("Error occur while logging out :: logoutHandler() :: ", Error));
    }

  return (
    <button
        type='button'
        onClick={logoutHandler}
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >Logout</button>
  )
}

export default LogoutBtn