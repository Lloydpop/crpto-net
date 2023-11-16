import coinbase from "../../../../assets/img/coinbase2.png";
import binance from "../../../../assets/img/binance.svg";
import gemini from "../../../../assets/img/gemini.webp";
import ripple from "../../../../assets/img/ripple.png";
import eth from "../../../../assets/img/eth.png";
import arrow from "../../../../assets/img/arrow.png";
import lite from "../../../../assets/img/litecon.png";
interface SectionTwoProps {}

const SectionTwo = ({}: SectionTwoProps) => {
  return (
    <div>
      <section className="my-24">
        <h1 className=" font-titi text-[1.8rem] font-[500] text-center">
          Top Crypto Companies
        </h1>
        <div className="mt-2 flex items-center justify-center">
          <p className="w-[10px] h-[10px] rounded-full gradient "></p>
          <p className="w-[300px] h-[1px] bg-[#ffffff54]"></p>
          <p className="w-[10px] h-[10px] rounded-full gradient "></p>
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
    </div>
  );
};

export default SectionTwo;
