import Image from "next/image"

import logo from '../../../public/logo.svg'

function Footer() {
  return (
    <footer className=" relative bottom-0 h-20 flex flex-row items-center justify-center gap-4 w-full bg-black py-10 px-20">

        <div className="w-[200px]">
            <Image src={logo} alt="logo" />
        </div>

       <div className="pt-10"> <p className="text-white"><span className="text-primary">Copyright</span> c 2023. All rights reserved</p></div>
    </footer>
  )
}

export default Footer