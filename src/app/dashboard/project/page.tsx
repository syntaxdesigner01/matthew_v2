'use client'
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux'

export default function Project() {
  const projects = useSelector((state: RootState) => state.projects)
  const dispatch = useDispatch()

  console.log(projects);

   function saveData(formData:FormData){
   
    console.log(formData.get('projectName'));
    console.log(formData.get('projectDescription'));
    
  }

  return (
    <>
      <div className='flex w-full h-full justify-center items-center'>
        <div className={`z-50 w-[40%] border shadow-xl p-10 ${projects.length !== 0 ? 'rounded-tr-[12%] rounded-bl-[12%] rounded-2xl' : 'rounded-tr-[17%] rounded-bl-[17%] rounded-lg'} flex flex-col gap-10`}>

          {
            projects.length === 0 ?

              <>
                <p className='text-center font-bold'>Sorry you have no Project at the moment. Please <br /> kindly create a New Project </p>

                <div className='flex justify-center '>
                  <img src="/tasklist.png" alt="" height={150} width={150} />
                </div>

                <div className='flex justify-center items-center'>
                  <button className='bg-black w-full text-primary py-2 rounded-md capitalize'>
                    create New Project
                  </button>

                </div>
              </>

              :

              <form action={saveData}>
                <h1>Create New Project </h1>
                <div>
                  <input type="text" name='projectName' placeholder='Project Name' className='border-2 w-full px-4 py-4 rounded-md' required />
                </div>
                <div>
                  <textarea name="projectDescription" id="" placeholder='Description' cols={10} rows={10} className='border-2 w-full mt-4 rounded-md p-4' required />
                </div>

                <button type='submit' className='w-full text-primary bg-black py-2 rounded-md mt-10' >Create New Project</button>
              </form>


          }
        </div>
        <div>
          <img src="/projectAvater.png" alt="" height={200} width={200} />
        </div>


      </div>
    </>
  )
}

