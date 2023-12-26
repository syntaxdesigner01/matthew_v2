import Image from "next/image"

import logo from '../../../public/logo.svg'

function Footer() {
  return (
    <footer className="  flex flex-row items-center justify-center gap-4 w-full bg-black px-4  text-[10px] md:text-xl py-10 md:px-20">

        <div className="w-[100px] md:w-[200px]">
            <Image src={logo} alt="logo" />
        </div>

       <div className="pt-6 md:pt-10"> <p className="text-white"><span className="text-primary">Copyright</span> c 2023. All rights reserved</p></div>
    </footer>
  )
}

export default Footer