import { routes } from "@/routes/routes"
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

            <div className="w-[60%] mt-10">

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
            </div>

            <div>
                <form >
                    <input type='email' placeholder='Email Address' required />


                </form>
            </div>
        </div>
    )
}

export default Login