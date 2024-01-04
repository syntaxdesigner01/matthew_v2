'use client'
import { useSelector } from 'react-redux'

export default function Project() {
  const projects = useSelector((state: any) => state.projects)

  console.log(projects);

  return (
    <>
      {
        projects.length === 0 ?
          <div className='flex w-full h-full justify-center items-center'>
            <div className='z-50 border shadow-xl p-10 rounded-tr-[10%] w- rounded-bl-[10%] rounded-md flex flex-col gap-10'>
              <p className='text-center font-bold'>Sorry you have no Project at the moment. Please <br /> kindly create a New Project </p>

              <div className='flex justify-center '>
                <img src="/tasklist.png" alt="" height={150} width={150} />
              </div>

              <div className='flex justify-center items-center'>
              <button className='bg-black w-full text-primary py-2 rounded-md capitalize'>
                create New Project
              </button>
            </div>
            </div>

            <div>
              <img src="/projectAvater.png" alt="" height={200} width={200} />
            </div>


          </div>
          : 'page'
      }
    </>
  )
}
