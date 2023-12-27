import Image from "next/image";

export default function SideMenu() {
    return (
        <div className="shadow-xl z-50 border-r-4 border-primary w-[8%] h-[100vh] flex flex-row justify-center  pt-16">
            <div>
                <div>
                    <Image src={'/user.svg'} alt="avater" height={50} width={50} />
                </div>

                <div className="mt-10 flex flex-col gap-10">
                    <div>
                        <Image src={'/icons/vector5.svg'} alt="avater" height={30} width={30} />
                    </div>

                    <div>
                        <Image src={'/icons/vector.svg'} alt="avater" height={30} width={30} />
                    </div>


                    <div>
                        <Image src={'/icons/vector1.svg'} alt="avater" height={30} width={30} />
                    </div>


                    <div>
                        <Image src={'/icons/vector2.svg'} alt="avater" height={30} width={30} />
                    </div>


                    <div>
                        <Image src={'/icons/vector3.svg'} alt="avater" height={30} width={30} />
                    </div>

                    <div>
                        <Image src={'/icons/vector6.svg'} alt="avater" height={30} width={30} />
                    </div>

                </div>
            </div>
        </div>
    )
}
