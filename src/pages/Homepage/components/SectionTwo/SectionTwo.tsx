import coinbase from "../../../../assets/img/coinbase2.png";
import binance from "../../../../assets/img/binance.svg";
import gemini from "../../../../assets/img/gemini.webp";
import ripple from "../../../../assets/img/ripple.png";
import eth from "../../../../assets/img/eth.png";
import arrow from "../../../../assets/img/arrow.png";
import lite from "../../../../assets/img/litecon.png";
import YouTube from "react-youtube";
import { Heading } from "../../../../component";
import { Airplane } from "iconsax-react";
interface SectionTwoProps {}

const SectionTwo = ({}: SectionTwoProps) => {
  const opts = {
    height: "315",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const videoId = "rYQgy8QDEBI";
  return (
    <div>
      <section className="my-24">
        <div className="flex justify-center flex-col items-center">
          <Heading> Top Crypto Companies</Heading>
          <p className="lg:w-[500px] text-center mt-5 font-lighter text-gray-300">
            Here is a list of some top cryptocurrencies.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex  items-center  mt-12 py-8 infinite-slider-container mx-auto">
            <div className="flex items-center gap-4 slider-item">
              <img src={coinbase} className="w-10" />
              <p className="font-titi text-md leading-7">COINBASE</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={lite} className="w-10" />
              <p className="font-titi text-md leading-7">LITECOIN</p>
            </div>
            <div className="flex items-center gap-3 slider-item">
              <img src={binance} className="w-[80px]" />
              <p className="font-titi text-md leading-7">BINANCE</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={gemini} className="w-10" />
              <p className="font-titi text-md leading-7">GEMINI</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={ripple} className="w-10" />
              <p className="font-titi text-md leading-7 slider-item">RIPPLE</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={eth} className="w-10" />
              <p className="font-titi text-md leading-7">ETHEREUM</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={coinbase} className="w-10" />
              <p className="font-titi text-md leading-7">COINBASE</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={lite} className="w-10" />
              <p className="font-titi text-md leading-7">LITECOIN</p>
            </div>
            <div className="flex items-center gap-3 slider-item">
              <img src={binance} className="w-[80px]" />
              <p className="font-titi text-md leading-7">BINANCE</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={gemini} className="w-10" />
              <p className="font-titi text-md leading-7">GEMINI</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={ripple} className="w-10" />
              <p className="font-titi text-md leading-7 slider-item">RIPPLE</p>
            </div>
            <div className="flex items-center gap-4 slider-item">
              <img src={eth} className="w-10" />
              <p className="font-titi text-md leading-7">ETHEREUM</p>
            </div>
          </div>
        </div>
        <span className=" mt-8 flex justify-center items-center gap-3 text-[1.2rem]">
          See more <img src={arrow} className="w-8" />
        </span>
      </section>
      <section className="flex justify-center flex-col items-center">
        <Heading>
          <p className="flex items-center gap-2">
            {" "}
            Take A Quick Tour <Airplane className="w-8" />
          </p>
        </Heading>
        <p className="lg:w-[500px] text-center mt-5 font-lighter text-gray-300">
          Watch video to get a little insight about crypto-trading.
        </p>
        <div className="p-3 bg-gradient-to-r from-[#7ce8d8] via-[#8570e9] to-[#7ce8d8] mt-16">
          <YouTube
            className=" lg:w-[700px]"
            videoId={videoId}
            opts={opts}
            onReady={(event) => {
              // access to player in all event handlers via event.target
              event.target.pauseVideo();
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
