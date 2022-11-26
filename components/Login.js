import { signIn } from 'next-auth/react'
import React from 'react'
import { BsTwitter } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

const Login = () => {
    return (
        <div className='bg-[#1d9bf0] h-screen flex justify-center items-center'>
            <div className=''>
                <FcGoogle className='text-white text-[200px]' />
                <div className='text-center text-2xl text-blue-400 bg-[#fff] p-4 px-6 rounded-[6px] cursor-pointer' onClick={() => signIn("google")}>
                    Google 登录
                </div>
            </div>

        </div>
    )
}

export default Login