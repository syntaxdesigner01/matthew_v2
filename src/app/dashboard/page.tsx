import Image from 'next/image'
import React from 'react'
import { routes } from '../../../routes/routes'
import Link from 'next/link'

export default function DashBoard() {
 
  return (
    <div className='w-full pt-8  px-10'>

      <div className='text-center flex flex-col justify-center gap-4 font-bold text-lg'>
        <h1><span className='text-primary'>Taking</span> Your <span className='text-primary'>Productivity</span> To <span className='text-primary'>Maximum</span></h1>
        <p>optimizing both time and effort. <br />
          Focus more on creativity...let&apos;s handle productivity</p>
      </div>


      <div className='flex items-center justify-between'>
        <div>
          <Image src={'/team_work2.png'} alt='' width={250} height={250} />
        </div>

        <div>
          <Link href={routes.project} className='bg-black text-primary px-20 py-4 rounded-tr-2xl rounded-bl-2xl '>Start Project</Link>
        </div>
        <div>
          <Image src={'/team.png'} alt='' width={250} height={250} />
        </div>
      </div>

      <div className='flex justify-center items-center'>
      <Image src={'/team_work.png'} alt='' width={250} height={250} />
      </div>

    </div>
  )
}
