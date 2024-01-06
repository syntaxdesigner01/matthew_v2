'use client'
import AllProjects from '@/components/DashboardComponents/AllProjects';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import CreateProject from './createproject/page';


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

         <CreateProject/>

      }
    </>
  )
}

