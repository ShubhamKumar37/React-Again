import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import Container from '../Container/Container';
import LogoutBtn from './LogoutBtn';

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
    <header className='py-3 shadow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div>
                    <Link to='/'>
                        {/* <Logo /> */}
                        <img src='https://res.cloudinary.com/dtxu5ha3c/image/upload/v1721330403/Certification/32ecca85-3495-49aa-afa2-cc1b07003fd9.pn' alt='Logo' width={100} height={50}></img>
                    </Link>
                </div>

                <ul className=' flex ml-auto'>
                    {
                        navItem.map((item, index) => item.active ? 
                        <li key={index}>
                            <button
                                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
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