
import LoginForm from "@/components/LoginForm"
import { routes } from "../../../../routes/routes"
import Image from "next/image"
import Link from "next/link"



function Login() {

    return (
        <div className="flex flex-col gap-2 w-screen h-full mt-20 items-center justify-center">
            {/* <Navbar/> */}

            <div className="text-center gap-4 flex flex-col">
                <h1 className="font-bold text-3xl">Login <span className="text-primary">Mat</span>thew</h1>

                <p>Don&apos;t have an account? <Link href={routes.signup} className="text-primary">Sign Up</Link></p>
            </div>

            <div className="w-full md:w-[60%] mt-10">

                <div className="flex flex-col justify-center items-center w-full gap-6 md:gap-10  md:flex-row">


                    <div className="text-xl md:text-[12px] ml-7 md:ml-0 flex items-center gap-10 md:gap-2">
                        <Image src={'/facebook.png'} alt="" width={30} height={30} />

                        <p>Sign up with facebook</p>
                    </div>

                    <div className="text-xl md:text-[12px] flex items-center gap-10 md:gap-2">
                        <Image src={'/google.png'} alt="" width={30} height={30} />

                        <p>Sign up with google</p>
                    </div>

                </div>

                <div className="flex items-center justify-center md:gap-4 py-4 w-full mt-[2em]">
                    <p className="border-b-2 w-[25%] border-primary"></p>
                    <p>Or sign up with Email</p>
                    <p className="border-b-2 w-[25%] border-primary"></p>
                </div>



                <div className="flex justify-center">
                    <div className="border-2 bg-white border-slate-200 shadow-xl p-4 md:p-10 rounded-tr-3xl rounded-bl-3xl rounded-md w-full lg:w-[80%] ">

                       <LoginForm/>

                        <div className="flex justify-between mt-4 font-semibold text-sm ">
                            <Link href={routes.signup}>Remember Password? <span className="text-primary">Login</span></Link>
                            <Link href={routes.forgotpassword}>Forget Password?</Link>
                        </div>

                        <div className="mt-10 md:mt-6">
                            <button type='submit' className="w-full h-12 bg-black text-white rounded-lg hover:bg-">Login</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login