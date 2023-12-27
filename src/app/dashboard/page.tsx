import Image from 'next/image'
import React from 'react'

export default function DashBoard() {
  return (
    <div className='w-full pt-12'>

      <div className='text-center flex flex-col justify-center gap-6 font-bold'>
        <h1>Taking Your Productivity To Maximum</h1>
        <p>optimizing both time and effort. <br />
          Focus more on creativity...let's handle productivity</p>
      </div>


      <div className='flex items-center justify-between'>
        <div>
          <Image src={'/team_work2.png'} alt='' width={200} height={200} />
        </div>

        <div>
          <button className='bg-black text-primary px-20 py-4 rounded-tr-2xl rounded-bl-2xl '>Start Project</button>
        </div>
        <div>
          <Image src={'/team.png'} alt='' width={200} height={200} />
        </div>
      </div>

      <div className='flex justify-center items-center'>
      <Image src={'/team_work.png'} alt='' width={200} height={200} />
      </div>

    </div>
  )
}
