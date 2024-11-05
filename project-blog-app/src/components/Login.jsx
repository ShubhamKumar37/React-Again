import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth';
import { login as authLogin } from '../store/authSlice';
import blogger from '../../public/blogger.png'
import Input from './Input';
import Button from './Button';



const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");

    const login = async (data) =>
    {
        setError("");
        try
        {
            const session = await authService.loginAccount(data);
            console.log("This is logged in user data = ", session);
            if(session)
            {
                const userData = await authService.getCurrentUser();
                console.log("This is logged in user data = ", userData);
                if(userData) dispatch(authLogin({userData}));

                navigate("/");
            }
        }
        catch(Error)
        {
            setError(Error.message);
        }
    }

    return (
        <div className='flex items-center justify-center  '>
            <div className='mx-auto w-full max-w-lg bg-gray-100 dark:bg-gray-800 rounded-xl p-10 border border-black/10 dark:border-gray-700'>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <img src={blogger} width="100%" className="" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight dark:text-white">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60 dark:text-gray-300">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-orange-500 dark:text-orange-400 transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center dark:text-red-400">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                            className="dark:bg-gray-700 dark:text-white"
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                            className="dark:bg-gray-700 dark:text-white"
                        />
                        <Button
                            type="submit"
                            className="w-full dark:bg-orange-500 dark:hover:bg-orange-600 text-black font-bold"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
