'use client'
import CreateProject from '@/components/DashboardComponents/CreateProject';
import NoProject from '@/components/DashboardComponents/NoProject';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux'

export default function Project() {
  const projects = useSelector((state: RootState) => state.projects)
  const dispatch = useDispatch()

  console.log(projects);


  return (
    <>
      <div className='flex w-full h-full justify-center items-center'>
        <div className={`z-50 w-[40%] border shadow-xl p-10 ${projects.length !== 0 ? 'rounded-tr-[12%] rounded-bl-[12%] rounded-2xl' : 'rounded-tr-[17%] rounded-bl-[17%] rounded-lg'} flex flex-col gap-10`}>

          {
            projects.length === 0 ?

              <NoProject />

              :

              <CreateProject />

          }
        </div>
        <div>
          <img src="/projectAvater.png" alt="" height={200} width={200} />
        </div>


      </div>
    </>
  )
}

