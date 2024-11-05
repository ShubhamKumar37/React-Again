import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Container from '../Container/Container';
import LogoutBtn from './LogoutBtn';
import blogger from "../../../public/blogger.png"

const Header = () => {

    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItem = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus, // Based on login or logout status we will decided wheather to display this or not
        },
    ];

  return (
    <header className='py-3 shadow bg-[#FF9900] dark:bg-[#FFA07A] dark:text-[#F2F2F2]'>
        <Container>
            <nav className='flex'>
                <div>
                    <Link to='/'>
                        {/* <Logo /> */}
                        <img src={blogger} alt='Logo' width={50} height={50} className=''></img>
                    </Link>
                </div>

                <ul className=' flex ml-auto'>
                    {
                        navItem.map((item, index) => item.active ? 
                        <li key={index}>
                            <button
                                className='inline-block font-bold px-6 py-2 duration-200 hover:bg-[#FFD700] rounded-full dark:hover:bg-[#fce190] dark:text-[#825959]'
                            onClick={() => navigate(item.slug)}>{item.name}</button>
                        </li>: null)
                    }
                    {
                        authStatus && (<li>
                            <LogoutBtn />
                        </li>)
                    }
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header
