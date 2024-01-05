'use client'
import AllProjects from '@/components/DashboardComponents/AllProjects';
import NoProject from '@/components/DashboardComponents/NoProject';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


export default function Project() {
  const projects = useSelector((state: RootState) => state.projects)
  const [isProject, setIsProject] = useState<boolean>(false)


  useEffect(() => {
    if (projects.length === 0) setIsProject(false)
    else setIsProject(true)
  }, [])


  return (
    <>
      {
        isProject ?
          <AllProjects /> :

          <div className='flex w-full h-full justify-center items-center'>
            <div className={`z-50 w-[40%] border shadow-xl p-10 ${!isProject ? 'rounded-tr-[12%] rounded-bl-[12%] rounded-2xl' : 'rounded-tr-[17%] rounded-bl-[17%] rounded-lg'} flex flex-col gap-10`}>

              <NoProject />
            </div>
            <div>
              <img src="/projectAvater.png" alt="" height={250} width={200} />
            </div>
          </div>

      }
    </>
  )
}

