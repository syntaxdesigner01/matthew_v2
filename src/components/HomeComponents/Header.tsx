import Image from "next/image"



export default function Header() {
  return (
    <div className="mt-[5em] bg-bgDark  flex justify-between px-20 pt-20 pb-10 gap-10 items-center">

        <div>
            <div className="absolute top-0 left-[20em]">

                <Image src={'/bg-gradient.svg'} alt="bg-gradient"  width={300} height={200}/>
            </div>

            <div className="">
                <h1 className="text-4xl text-primary w-[90%] leading-relaxed tracking-wide">Taking Your Productivity To Maximum</h1>
                <p className="text-white text-xl py-4 w-[70%] leading-relaxed tracking-wide">Focus more on creativity...let&apos;s handle productivity</p>
            </div>

            <div className="w-[80%] mt-10">
                <button className="bg-primary py-2 rounded-md capitalize text-white w-full">Get started</button>
            </div>
        </div>

        <div>
            <div>
                <Image src={"/track-productivity.png"} alt="track-productivity  " width={600} height={300} />
            </div>
            <p className="text-white text-center py-4">Track <span className="text-primary">Productivity</span> </p>
        </div>
        
    </div>
  )
}
