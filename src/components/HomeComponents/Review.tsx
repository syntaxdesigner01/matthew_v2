import Image from "next/image";
import avater from "../../../public/avatar.png";
function Review() {
    return (
        <div className="mt-20">
            <div className="flex justify-center items-center text-center">
                <h1 className="border-b-4 border-primary px-10  font-bold tracking-wider text-xl lg:text-2xl pb-4">
                    <span className="text-primary">Re</span>views
                    <p className="py-4 hidden">
                        Lorem ipsum, dolor sit amet <br />
                        consectetur
                    </p>
                </h1>
            </div>


            <div className="mt-20 flex gap-4 overflow-x-scroll lg:overflow-hidden">
                            {/* revew1 */}
                            <div className="border-2 rounded-lg p-4  border-primary shadow-2xl bg-white">
                    <div className="flex justify-between items-center gap-2">
                        <div className="w-[90px]">
                            <Image src={avater} alt="A review image" />
                        </div>
                        <div className="font-bold text-sm">
                            <h1 >John Doe</h1>
                            <p className="text-[12px]">Senior Software Developer at Google</p>
                        </div>
                    </div>


                    <div className="py-2 text-sm font-semibold">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eius odio? Quisquam illum sit sed possimus magnam? Quis harum rerum atque,
                        </p>
                    </div>
                </div>

                {/* review2 */}
                <div className="border-2 rounded-lg p-4  border-primary shadow-2xl bg-white">
                    <div className="flex justify-between items-center gap-2">
                        <div className="w-[90px]">
                            <Image src={avater} alt="A review image" />
                        </div>
                        <div className="font-bold text-sm">
                            <h1 >John Doe</h1>
                            <p className="text-[12px]">Senior Software Developer at Google</p>
                        </div>
                    </div>


                    <div className="py-2 text-sm font-semibold">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eius odio? Quisquam illum sit sed possimus magnam? Quis harum rerum atque,
                        </p>
                    </div>
                </div>


                {/* review3*/}
                <div className="border-2 rounded-lg p-4  border-primary shadow-2xl bg-white">
                    <div className="flex justify-between items-center gap-2">
                        <div className="w-[90px]">
                            <Image src={avater} alt="A review image" />
                        </div>
                        <div className="font-bold text-sm">
                            <h1 >John Doe</h1>
                            <p className="text-[12px]">Senior Software Developer at Google</p>
                        </div>
                    </div>


                    <div className="py-2 text-sm font-semibold">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eius odio? Quisquam illum sit sed possimus magnam? Quis harum rerum atque,
                        </p>
                    </div>
                </div>


                {/* review4 */}
                <div className="border-2 rounded-lg p-4  border-primary shadow-2xl bg-white">
                    <div className="flex justify-between items-center gap-2">
                        <div className="w-[90px]">
                            <Image src={avater} alt="A review image" />
                        </div>
                        <div className="font-bold text-sm">
                            <h1 >John Doe</h1>
                            <p className="text-[12px]">Senior Software Developer at Google</p>
                        </div>
                    </div>


                    <div className="py-2 text-sm font-semibold">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eius odio? Quisquam illum sit sed possimus magnam? Quis harum rerum atque,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
