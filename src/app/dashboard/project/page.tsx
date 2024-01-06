'use client'
import AllProjects from '@/components/DashboardComponents/AllProjects';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';
import { routes } from '../../../../routes/routes';


export default function Project() {
  const projects = useSelector((state: RootState) => state.projects)
  const [isProject, setIsProject] = useState<boolean>(false)

const route = useRouter()
  useEffect(() => {
    if (projects.length !== 0) setIsProject(true)
    else route.push(routes.createProject)
  }, [])


  return (
    <>
      {
        isProject && <AllProjects />

      }
    </>
  )
}

