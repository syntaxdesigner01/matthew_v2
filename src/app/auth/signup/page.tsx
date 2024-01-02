import SignupForm from "@/components/SignupForm"
import { routes } from "@/routes/routes"
import Image from "next/image"
import Link from "next/link"


function Signup() {

    return (
        <div className="flex flex-col gap-2 w-screen h-full mt-20  items-center justify-center">


            <div className="text-center gap-4 flex flex-col">
                <h1 className="font-bold text-xl lg:text-3xl">Sign Up <span className="text-primary">Mat</span>thew</h1>


                <p>Already have an account? <Link href={routes.login} className="text-primary">Sign In</Link></p>
            </div>


            <div className="w-full px-4 md:px-10  lg:w-[60%] mt-6 md:mt-10 mb-20">

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


                <div className="flex items-center justify-center md:gap-4 py-4 w-full mt-[1em]">
                    <p className="border-b-2 w-[25%] border-primary"></p>
                    <p>Or sign up with Email</p>
                    <p className="border-b-2 w-[25%] border-primary"></p>
                </div>



                <div className="flex justify-center">
                    <div className="border-2 bg-white border-slate-200 shadow-xl p-4 md:p-10 rounded-tr-3xl rounded-bl-3xl rounded-md w-full lg:w-[80%] ">

                      <SignupForm/>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signup