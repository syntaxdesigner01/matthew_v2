"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const route = useRouter();

  return (
    <nav className="flex fixed w-full top-0 z-50 items-center gap-32  bg-bgDark px-20 text-white py-4 shadow-xl">
      <div>
        <Image src={"/logo.svg"} alt="" width={200} height={100} />
      </div>

      <div className="flex gap-20 justify-center pt-4 border-b-4 border-primary px-10 pb-2 rounded-sm">
        <ul className="flex gap-10 items-center ">
          <li>Home</li>
          <li>Docs</li>
          <li>Blog</li>
        </ul>

        <div className="flex items-center gap-10 ">
          <p>Login</p>
          <button className="bg-primary px-8 py-2 rounded-xl ">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}