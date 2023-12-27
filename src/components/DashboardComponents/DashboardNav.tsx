import Image from "next/image";


export default function DashboardNav() {
  return (

        <nav className="bg-black flex justify-between items-center px-4 py-4 ">
            <div className="border-b-2 border-primary pb-2 px-8">
            <Image src={'/logo.png'} alt="user" width={200} height={200} />
            </div>
           
           <div  className="flex text-center gap-2 border border-primary p-2 rounded-tr-3xl rounded-bl-3xl text-sm">
           <Image src={'/user.svg'} alt="user" width={50} height={50} />

           <div className="text-white">
            <p>Welcome</p>
            <p>Rofownkelvin</p>
           </div>
           </div>
        </nav>
 
  )
}
