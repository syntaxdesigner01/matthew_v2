

export default function NoProject() {
  return (
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
  )
}
