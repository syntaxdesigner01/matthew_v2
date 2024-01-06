'use client'

import { switchCreateProjectScreen } from "@/store/Slice/AppdbSlice";
import { useDispatch } from "react-redux";

/**
 * 
 * @description : This component is shown if there is project on the state
 */

export default function NoProject() {


    const dispatch = useDispatch()

    // This toggles between the no project to create project screen
    function switchDisplay() {
        dispatch(switchCreateProjectScreen(true))
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
