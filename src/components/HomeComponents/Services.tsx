import Image from "next/image";

export default function Services() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="border-b-4 border-primary px-10  font-bold tracking-wider text-lg md:text-2xl pb-4">
          <span className="text-primary">Why</span> Use Matthew
        </h1>
      </div>

      <div className="md:pt-20 ">
        {/* feature 1 */}
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-20 md:mt-0">
          <div className="w-full md:w-[50%]">
            <h1 className="font-bold text-lg md:text-xl">
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
         <div className="flex flex-col-reverse md:flex-row justify-evenly items-center mt-20 md:mt-0
">

         <div>
            <Image src={"/productivity.png"} alt="" width={400} height={300} />
          </div>

          <div className="w-full md:w-[50%]">
            <h1 className="font-bold text-lg md:text-xl">
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
  <div className="flex flex-col md:flex-row justify-evenly items-center mt-20 md:mt-0">
          <div className="w-full md:w-[50%]">
            <h1 className="font-bold text-lg md:text-xl">
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
