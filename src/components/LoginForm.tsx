'use client'
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useState } from "react"


export default function LoginForm() {

    
    const [showPass, setShowPass] = useState(false)
  return (
    <form className=" flex flex-col gap-10">
    <fieldset className="border-2 border-[#0000004D] rounded-md py-1">
        <legend className="">Your Email</legend>
        <input type='email' placeholder='' required className="w-full outline-none  h-full px-4" />
    </fieldset>


    <fieldset className="border-2 border-[#0000004D] rounded-md py-1">
        <legend>Password</legend>
        <div className="flex px-2 ">
            <input type={showPass ? 'text' : 'password'} placeholder='' required className="w-full h-full outline-none  px-4" />

            {
                showPass ?
                    <FiEyeOff size={20} onClick={() => setShowPass(!showPass)} /> :
                    <FiEye size={20} onClick={() => setShowPass(!showPass)} />
            }
        </div>
    </fieldset>
</form>
  )
}
