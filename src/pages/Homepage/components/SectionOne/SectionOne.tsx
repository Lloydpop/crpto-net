import woman from "../../../../assets/img/nice.jpg";
import man from "../../../../assets/img/man.jpg";
import light from "../../../../assets/img/light.jpg";
import arrow from "../../../../assets/img/arrow.png";
import robot from "../../../../assets/img/robot.png";
import robot2 from "../../../../assets/img/robot2.png";
import robot3 from "../../../../assets/img/robot3.png";
import { Heading } from "../../../../component";
interface SectionOneProps {}

const SectionOne = ({}: SectionOneProps) => {
  return (
    <div className="my-24">
      {/* section one */}
      <section>
        <div className="flex justify-center">
          <Heading>Did You Know Cryptocurrency Offers?</Heading>
        </div>

        <div className="mt-20 flex lg:flex-row flex-col justify-center gap-24 relative">
          <p className="absolute lg:left-0 lg:top-12 right-0 -top-12">
            <img src={robot2} className="w-[80px]" />
          </p>
          <div className="lg:w-[400px] flex gap-8">
            {/* stroke */}
            <p
              className="bg-gradient-to-r from-[#7ce8d8] via-[#8570e9] to-[#7ce8d8] h-[77%] w-[6px]"
              style={{
                filter: "blur(0.5px)",
              }}
            ></p>
            <div>
              <h2 className="text-[1.3rem] font-titi">Accessible Comfort</h2>
              <p className="text-[#d6d3d3] font-light mt-2">
                Unlike traditional banking hours, cryptocurrency markets operate
                24/7. This accessibility allows users to manage their assets and
                engage in transactions at any time, providing a level of comfort
                and convenience not typically found in traditional financial
                systems.
              </p>
              <span className=" mt-5 flex items-center gap-3   ">
                Learn more <img src={arrow} className="w-6" />
              </span>
            </div>
          </div>
          <img
            src={woman}
            className="lg:w-[300px] w-[90%] mx-auto lg:mx-0 rounded-2xl lg:ml-20"
          />
        </div>
        <div className="mt-20 flex lg:flex-row flex-col  justify-center gap-24 relative">
          <p className="absolute lg:left-0 lg:top-12 right-0 -top-16">
            <img src={robot3} className="w-[80px]" />
          </p>
          <div className="lg:w-[400px] flex gap-8">
            {/* stroke */}
            <p
              className="bg-gradient-to-r from-[#7ce8d8] via-[#8570e9] to-[#7ce8d8] h-[60%] w-[4px]"
              style={{
                filter: "blur(0.5px)",
              }}
            ></p>
            <div>
              <h2 className="text-[1.3rem] font-titi">
                Innovation and Bright Idea
              </h2>
              <p className="text-[#d6d3d3] font-light mt-2">
                Just like a light bulb represents a bright idea or innovation,
                cryptocurrency represents a groundbreaking concept in the world
                of finance and technology.
              </p>
              <span className=" mt-5 flex items-center gap-3   ">
                Learn more <img src={arrow} className="w-6" />
              </span>
            </div>
          </div>
          <img
            src={light}
            className="lg:w-[300px] w-[90%] mx-auto lg:mx-0 rounded-2xl lg:ml-20"
          />
        </div>
        <div className="mt-20 flex lg:flex-row flex-col justify-center gap-24 relative">
          <p className="absolute lg:left-0 lg:top-12 right-0 -top-12">
            <img src={robot} className="w-[80px]" />
          </p>
          <div className="lg:w-[400px] flex gap-8">
            {/* stroke */}
            <p
              className="bg-gradient-to-r from-[#7ce8d8] via-[#8570e9] to-[#7ce8d8] h-[55%] w-[4px]"
              style={{
                filter: "blur(0.5px)",
              }}
            ></p>
            <div>
              <h2 className="text-[1.3rem] font-titi">Global Business</h2>
              <p className="text-[#d6d3d3] font-light mt-2">
                Cryptocurrencies provide users with constant accessibility,
                catering to a global audience across different time zones.
              </p>
              <span className=" mt-5 flex items-center gap-3   ">
                Learn more <img src={arrow} className="w-6" />
              </span>
            </div>
          </div>
          <img
            src={man}
            className="lg:w-[300px] w-[90%] mx-auto lg:mx-0 rounded-2xl lg:ml-20"
          />
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
