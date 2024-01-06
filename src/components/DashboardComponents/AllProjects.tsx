'use client'

import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

export default function AllProjects() {
  const projects = useSelector((state: RootState) => state.projects)


  return (
    <div>{
      projects.map(project => {
        return(
          <>
          <p>{project?.projectName}</p>
          <p>{project?.projectDescription}</p>
          </>
        )
      })
    }</div>
  )
}
