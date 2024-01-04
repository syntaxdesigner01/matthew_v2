'use client'
import { useSelector } from 'react-redux'

export default function Project() {
  const projects = useSelector((state: any) => state.projects)

  console.log(projects);

  return (
    <>
    {
      projects.length === 0 ? <p>no project</p> : 'page'
    }
    </>
  )
}
