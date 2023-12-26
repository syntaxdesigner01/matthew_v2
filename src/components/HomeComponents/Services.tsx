import Image from "next/image";

export default function Services() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="border-b-4 border-primary px-10  font-bold tracking-wider text-2xl pb-4">
          <span className="text-primary">Why</span> Use Matthew
        </h1>
      </div>

      <div className="lg:pt-20 ">
        {/* feature 1 */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center mt-20 lg:mt-0">
          <div className="w-full lg:w-[50%]">
            <h1 className="font-bold text-xl">
              {" "}
              <span className="text-primary">Easy</span> To Use
            </h1>
            <p className="py-4 text-sm font-light leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              rerum? Amet repellendus error nemo aliquid magnam, assumenda sed
              quam eveniet minus aspernatur corporis nisi eaque dolorum soluta
              quidem voluptatibus doloribus!
            </p>
          </div>

          <div>
            <Image src={"/easy.png"} alt="" width={400} height={300} />
          </div>
        </div>




         {/* feature 2 */}
         <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center mt-20 lg:mt-0
">

         <div>
            <Image src={"/productivity.png"} alt="" width={400} height={300} />
          </div>

          <div className="w-full lg:w-[50%]">
            <h1 className="font-bold text-xl">
              {" "}
              <span className="text-primary">Productivity</span> Focused
            </h1>
            <p className="py-4 text-sm font-light leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              rerum? Amet repellendus error nemo aliquid magnam, assumenda sed
              quam eveniet minus aspernatur corporis nisi eaque dolorum soluta
              quidem voluptatibus doloribus!
            </p>
          </div>
        </div>


  {/* feature 3 */}
  <div className="flex flex-col lg:flex-row justify-evenly items-center mt-20 lg:mt-0">
          <div className="w-full lg:w-[50%]">
            <h1 className="font-bold text-xl">
              {" "}
              <span className="text-primary">Generate</span> Report
            </h1>
            <p className="py-4 text-sm font-light leading-relaxed ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              rerum? Amet repellendus error nemo aliquid magnam, assumenda sed
              quam eveniet minus aspernatur corporis nisi eaque dolorum soluta
              quidem voluptatibus doloribus!
            </p>
          </div>

          <div>
            <Image src={"/report.png"} alt="" width={350} height={300} />
          </div>
        </div>
       
      </div>
    </div>
  );
}
