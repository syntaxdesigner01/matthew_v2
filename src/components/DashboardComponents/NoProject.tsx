'use client'
import Link from "next/link";
import { routes } from "../../../routes/routes";
import { useState } from "react";
import CreateProject from "@/app/dashboard/project/createproject/page";


export default function NoProject() {

    const [switchApp, setSwitchApp] = useState<Boolean>(false)
    return (
        <>
            {
                !switchApp ?
                    <>
                        <p className='text-center font-bold'>Sorry you have no Project at the moment. Please <br /> kindly create a New Project </p>

                        <div className='flex justify-center '>
                            <img src="/tasklist.png" alt="" height={150} width={150} />
                        </div>

                        <div className='flex justify-center items-center'>
                            <button onClick={()=> setSwitchApp(true)} className='bg-black text-c w-full text-primary py-2 rounded-md capitalize'>
                                create New Project
                            </button>

                        </div>
                    </>:

                    <CreateProject/>
    }
        </>
    )
}


{/*  */ }