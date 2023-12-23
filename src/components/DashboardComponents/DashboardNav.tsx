import Image from "next/image";


export default function DashboardNav() {
  return (

        <nav className="bg-black flex justify-between px-20 py-4 ">
            <Image src={'/logo.png'} alt="user" width={200} height={200} />

            <Image src={'/user.svg'} alt="user" width={50} height={50} />
        </nav>
 
  )
}
