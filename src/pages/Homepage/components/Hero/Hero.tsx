import bit from "../../../../assets/img/bit2.gif";
interface HeroProps {}

export const Hero = ({}: HeroProps) => {
  return (
    <div className="flex lg:flex-row flex-col justify-between">
      <div className="lg:w-[50%] w-full flex gap-x-6">
        <div className="mt-4 flex items-center flex-col">
          <p className="w-[20px] h-[20px] rounded-full gradient "></p>
          <p className="w-[1px] h-full bg-[#ffffff54]"></p>
          <p className="w-[20px] h-[20px] rounded-full gradient "></p>
        </div>
        <div>
          <h1 className="lg:text-[3.2rem] text-[2rem] font-semibold font-titi">
            Your Gateway
            <br />
            to Tracking the Crypto{" "}
            <span className="bg-gradient-to-r from-blue-500 via-[#7ce8d8] to-[#7ce8d8] text-transparent bg-clip-text">
              Markets.{" "}
            </span>
          </h1>
          <p className="text-[15px] text-gray-200 lg:w-[500px] my-4">
            Experience the sophistication of tracking cryptocurrency exchange
            rates effortlessly. Our platform seamlessly blends cutting-edge
            technology with refined simplicity, empowering you with confidence
            in understanding and monitoring crypto values. Join our community
            for a journey into precise cryptocurrency tracking.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <a
              href="https://www.udemy.com/topic/cryptocurrency/free/"
              target="_blank"
              rel="noreferer"
              className="bg-transparent text-white !border-gray-300 hover:bg-gray-50 hover:text-black py-3 font-[500] flex justify-center rounded-3xl border   px-7 text-[15px] items-center
              shadow-sm "
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-[400px] lg:mt-0 mt-12">
        <img src={bit} className="w-full" />
      </div>
    </div>
  );
};
