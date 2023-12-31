'use client'

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"
import { routes } from "../../../routes/routes";


export default function SideMenu() {
    const router = useRouter()
    const pathname = usePathname();

    const [showDrawer, setShowDrawer] = useState(false)
    return (
        <div className={`shadow-xl z-50 border-r-4 border-primary ${showDrawer ? 'w-[20%]' : 'w-[10%]'} h-[100vh] flex flex-row justify-center  pt-16`}>

            <div className={`flex flex-col ${showDrawer ? 'items-start px-2' : 'items-center px-8 justify-center'} w-full `}>


                {/* drawer button */}
                <div className="border-b-4 border-black pb-4 w-full flex items-center justify-between">
                    <Image src={'/user.svg'} alt="avater" height={50} width={50} />

                    {/* side menu drawer */}
                    <button className="border-2 py-4 px-1 border-primary  relative right-[-10px] rounded-l-2xl" onClick={() => setShowDrawer(!showDrawer)} >{showDrawer ? <MdArrowBackIosNew /> : <MdArrowForwardIos />}</button>

                </div>
                {/* side menu drawer */}

                <div className={`mt-10 flex flex-col gap-10 w-full ${showDrawer ? 'items-start' : 'items-center'}`}>

                    <button onClick={()=> router.push(routes.dashboard)} className={`flex  w-full  py-2 hover:bg-primary ${pathname === routes.dashboard ? 'bg-primary text-white' : ''}  ${showDrawer ? 'hover:text-white gap-4 px-4 rounded-md' : 'rounded-tl-2xl rounded-br-2xl p-2'}`}>
                        <Image src={'/icons/vector.svg'} alt="avater" height={25} width={25} />
                        <span className={`${showDrawer ? '' : 'hidden'}`}> Dashboard</span>
                    </button>


                     <button onClick={()=> router.push(routes.project)} className={`flex  w-full  py-2 hover:bg-primary ${pathname === routes.project ? 'bg-primary text-white' : ''}  ${showDrawer ? 'hover:text-white gap-4 px-4 rounded-md' : 'rounded-tl-2xl rounded-br-2xl p-2'}`}>
                        <Image src={'/icons/vector5.svg'} alt="avater" height={25} width={25} />
                        <span className={`${showDrawer ? '' : 'hidden'}`}> Project </span>
                    </button>


                    <button onClick={()=> router.push(routes.chat)} className={`flex  w-full  py-2 hover:bg-primary ${pathname === routes.chat ? 'bg-primary text-white' : ''}  ${showDrawer ? 'hover:text-white gap-4 px-4 rounded-md' : 'rounded-tl-2xl rounded-br-2xl p-2'}`}>
                        <Image src={'/icons/vector1.svg'} alt="avater" height={25} width={25} />
                        <span className={`${showDrawer ? '' : 'hidden'}`}> Chats</span>
                    </button>


                     <button onClick={()=> router.push(routes.notification)} className={`flex  w-full  py-2 hover:bg-primary ${pathname === routes.notification ? 'bg-primary text-white' : ''}  ${showDrawer ? 'hover:text-white gap-4 px-4 rounded-md' : 'rounded-tl-2xl rounded-br-2xl p-2'}`}>
                        <Image src={'/icons/vector2.svg'} alt="avater" height={25} width={25} />
                        <span className={`${showDrawer ? '' : 'hidden'}`}> Notification</span>
                    </button>

{/* 
                     <button onClick={()=> router.push(routes.dashboard)} className={`flex  w-full  py-2 hover:bg-primary ${pathname === routes.dashboard ? 'bg-primary text-white' : ''}  ${showDrawer ? 'hover:text-white gap-4 px-4 rounded-md' : 'rounded-tl-2xl rounded-br-2xl p-2'}`}>
                        <Image src={'/icons/vector3.svg'} alt="avater" height={25} width={25} />
                        <span className={`${showDrawer ? '' : 'hidden'}`}> Security</span>
                    </button> */}

                     <button  className={`flex  w-full  py-2 hover:bg-primary  ${showDrawer ? 'hover:text-white gap-4 px-4 rounded-md' : 'rounded-tl-2xl rounded-br-2xl p-2'}`}>
                        <Image src={'/icons/vector6.svg'} alt="avater" height={30} width={30} />
                        <span className={`${showDrawer ? '' : 'hidden'}`}> Logout</span>
                    </button>

                </div>
            </div>
        </div>
    )
}
