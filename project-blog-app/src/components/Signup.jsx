import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';
import Input from './Input';
import Button from './Button';
import blogger from '../../public/blogger.png'

const Signup = () => {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const diapatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) diapatch(login({ userData }));
                navigate('/');
            }
        }
        catch (Error) {
            setError(Error.message);
        }
    }

    return (
        <div className="flex items-center justify-center bg-[#1A202C] ">
            <div className="mx-auto w-full max-w-lg bg-gray-100 dark:bg-gray-800 rounded-xl p-10 border border-black/10 dark:border-gray-700">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <img src={blogger} width="100%" className="" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-orange-400 dark:text-[#F7F5F2]">
                    Sign up to create account
                </h2>
                <p className="mt-2 text-center text-base text-black/60 dark:text-[#D1D5DB]">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-[#FF9900] dark:text-[#F7F5F2] transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-[#FF9900] dark:text-[#F7F5F2] mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}
                    className="space-y-5 bg-white dark:bg-gray-800  p-4 ">
                    <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        className="dark:bg-[#1A202C] dark:text-[#F7F5F2]"
                    />
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
                        className="dark:bg-[#1A202C] dark:text-[#F7F5F2]"
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                        className="dark:bg-[#1A202C] dark:text-[#F7F5F2]"
                    />
                    <Button type="submit" className="w-full dark:bg-orange-500 dark:hover:bg-orange-600 text-black font-bold">
                        Create Account
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default Signup

