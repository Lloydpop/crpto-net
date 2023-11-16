import bit from "../../../../assets/img/bit2.gif";
import { Button } from "../../../../component/Button/Button";
interface HeroProps {}

export const Hero = ({}: HeroProps) => {
  return (
    <div className="flex lg:flex-row flex-col justify-between">
      <div className="lg:w-[50%] w-full flex gap-x-6">
        <div className="mt-4 flex items-center flex-col">
          <p className="w-[20px] h-[20px] rounded-full gradient "></p>
          <p className="w-[1px] h-[70%] bg-[#ffffff54]"></p>
          <p className="w-[20px] h-[20px] rounded-full gradient "></p>
        </div>
        <div>
          <h1 className="lg:text-[3.2rem] text-[2rem] font-semibold font-titi">
            Your Gateway
            <br /> to Seamless Crypto{" "}
            <span className="bg-gradient-to-r from-blue-500 via-[#7ce8d8] to-[#7ce8d8] text-transparent bg-clip-text">
              Innovation.{" "}
            </span>
          </h1>
          <p className="text-[15px] text-gray-200 lg:w-[500px] my-4">
            Experience financial sophistication. Navigate the world of
            cryptocurrency with ease, blending cutting-edge technology and
            refined simplicity. Join our community for confident financial
            empowerment.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <Button>Get Started</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
      </div>

      <div className="lg:w-[400px] lg:mt-0 mt-12">
        <img src={bit} className="w-full" />
      </div>
    </div>
  );
};
