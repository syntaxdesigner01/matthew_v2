import Image from "next/image"

export default function Loader() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
        <Image src={'/loader.gif'} alt="loader" width={300} height={100} />
    </div>
  )
}
