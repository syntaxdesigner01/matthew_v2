'use client'
import { createProject } from "@/store/Slice/AppdbSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";


export default function CreateProject() {

    const dispatch = useDispatch()

    const name = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLTextAreaElement>(null)

    function saveData(e: any) {
        e.preventDefault();

        dispatch(createProject({ description: description.current?.value, name: name.current?.value }))

        console.log(name.current?.value);

    }

    return (
        <form onSubmit={saveData}>
            <h1 className="text-center pb-6 font-bold text-xl">Create <span className="text-primary">New Project</span> </h1>
            <div>
                <input type="text" ref={name} name='name' placeholder='Project Name' className='border-2 w-full px-4 py-4 rounded-md' required />
            </div>
            <div>
                <textarea ref={description} name="description" id="" placeholder='Description' cols={10} rows={10} className='border-2 w-full mt-4 rounded-md p-4' required />
            </div>

            <button type='submit' className='w-full text-primary bg-black py-2 rounded-md mt-10' >Create New Project</button>
        </form>

    )
}
