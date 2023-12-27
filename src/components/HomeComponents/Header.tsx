import { routes } from "@/routes/routes";
import Image from "next/image"
import { useRouter } from "next/navigation";


export default function Header() {

    const route = useRouter()

  return (
    <div className="mt-[1em] z-50 md:mt-[5em] bg-bgDark flex flex-col  justify-center  px-4  md:px-20 pt-20 pb-10 gap-10 md:justify-between md:items-center md:flex-row">

        <div>
            <div className="absolute top-0 left-[20em]">

                <Image src={'/bg-gradient.svg'} alt="bg-gradient"  width={300} height={200}/>
            </div>

            <div className=" flex flex-col w-full justify-center items-center md:block">
                <h1 className="text-2xl text-left md:text-4xl text-primary w-[90%] leading-relaxed tracking-wide">Taking Your Productivity To Maximum</h1>

                <p className="text-white md:text-xl py-4 md:w-[70%] leading-relaxed text-left px-4 md:px-0 tracking-wide">Focus more on creativity...let&apos;s handle productivity</p>
            </div>

            <div className="w-[80%] mt-10 hidden md:block">
                <button className="bg-primary py-2 rounded-md capitalize text-white w-full">Get started</button>
            </div>
        </div>

        <div>
            <div>
                <Image src={"/track-productivity.png"} alt="track-productivity  " width={600} height={300} />
            </div>
            <p className="text-white text-center py-4">Track <span className="text-primary">Productivity</span> </p>
        </div>
        
        <div className="w-full mt-4 md:hidden">
                <button onClick={()=>route.push(routes.login)} className="bg-primary py-2 rounded-md capitalize text-white w-full">Get started</button>
            </div>
    </div>
  )
}
