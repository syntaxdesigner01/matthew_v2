'use client'

import { switchProjectScreen } from "@/store/Slice/AppdbSlice";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function NoProject(retset:any) {
    

   const dispatch = useDispatch()

   function switchDisplay(){
    dispatch(switchProjectScreen(true))
   }

    return (
        <>
        
                        <p className='text-center font-bold'>Sorry you have no Project at the moment. Please <br /> kindly create a New Project </p>

                        <div className='flex justify-center '>
                            <img src="/tasklist.png" alt="" height={150} width={150} />
                        </div>

                        <div className='flex justify-center items-center'>
                            <button onClick={switchDisplay} className='bg-black text-c w-full text-primary py-2 rounded-md capitalize'>
                                create New Project
                            </button>

                        </div>
         
        </>
    )
}


{/*  */ }