'use client'

import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"

export default function SignupForm() {

    const [showPass, setShowPass] = useState(false)
    const [comfirmPass, setComfirmPass] = useState(false)

    

    return (
        <form  className=" flex flex-col gap-10">
            <fieldset className="border-2 border-[#0000004D] rounded-md py-1">
                <legend className="">Your Email</legend>
                <input type='email' placeholder='' required className="w-full outline-none  h-full px-4" />
            </fieldset>

            <fieldset className="border-2 border-[#0000004D] rounded-md py-1">
                <legend className="">Phone Number</legend>
                <input type='tel' placeholder='' required className="w-full outline-none  h-full px-4" />
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



            <fieldset className="border-2 border-[#0000004D] rounded-md py-1">
                <legend>Comfirm Password</legend>
                <div className="flex px-2 ">
                    <input type={comfirmPass ? 'text' : 'password'} placeholder='' required className="w-full h-full outline-none  px-4" />

                    {
                        comfirmPass ?
                            <FiEyeOff size={20} onClick={() => setComfirmPass(!comfirmPass)} /> :
                            <FiEye size={20} onClick={() => setComfirmPass(!comfirmPass)} />
                    }
                </div>
            </fieldset>

            <div>
                <input type="checkbox" name="" id="" />
                <span className="text-sm px-2 font-bold">I accept the terms of the Service & Privacy Policy.</span>
            </div>

            <div className="">
                <button type='submit' className="w-full h-12 bg-black text-white rounded-lg hover:bg-">Sign Up</button>
            </div>
        </form>

    )
}
