'use client'
import { routes } from "@/routes/routes"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"


function Signup() {

    const [showPass, setShowPass] = useState(false)
    const [comfirmPass, setComfirmPass] = useState(false)
    return (
        <div className="flex flex-col gap-2 w-screen h-full mt-20  items-center justify-center">
            {/* <Navbar/> */}

            <div className="text-center gap-4 flex flex-col">
                <h1 className="font-bold text-3xl">Sign Up <span className="text-primary">Mat</span>thew</h1>


                <p>Already have an account? <Link href={routes.login} className="text-primary">Sign In</Link></p>
            </div>

            <div className="w-[60%] mt-10 mb-20">

                <div className="flex justify-between w-full gap-2">
                    <div className="text-[12px] flex items-center gap-2">
                        <Image src={'/google.png'} alt="" width={30} height={30} />

                        <p>Sign up with google</p>
                    </div>

                    <div className="text-[12px] flex items-center gap-2">
                        <Image src={'/microsoft.png'} alt="" width={30} height={30} />

                        <p>Sign up with facebook</p>
                    </div>

                    <div className="text-[12px] flex items-center gap-2">
                        <Image src={'/facebook.png'} alt="" width={30} height={30} />

                        <p>Sign up with facebook</p>
                    </div>


                    <div className="text-[12px] flex items-center gap-2">
                        <Image src={'/apple.png'} alt="" width={30} height={30} />

                        <p>Sign up with facebook</p>
                    </div>
                </div>


                <div className="flex items-center justify-center gap-4 py-4 w-full">
                    <p className="border-b-2 w-[30%] border-primary"></p>
                    <p>Or sign up with Email</p>
                    <p className="border-b-2 w-[30%] border-primary"></p>
                </div>



                <div className="flex justify-center">
                    <div className="border-2 bg-white border-slate-200 shadow-xl p-10 rounded-tr-3xl rounded-bl-3xl rounded-md w-[80%] ">

                        <form className=" flex flex-col gap-10">
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
                        </form>

                     

                        <div className="mt-4">
                            <button type='submit' className="w-full h-12 bg-black text-white rounded-lg hover:bg-">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signup