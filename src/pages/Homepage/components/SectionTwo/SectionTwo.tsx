import arrow from "../../../../assets/img/arrow.png";
import YouTube from "react-youtube";
import { Heading } from "../../../../component";
import { Airplane } from "iconsax-react";
import { useQuery } from "react-query";
import { CoinsProps } from "../../../Coins/Coins";
import placeholder from "../../../../assets/img/coin.png";
import { fetchCoinGeckoData } from "../../../../services/crypto";
interface SectionTwoProps {}

const SectionTwo = ({}: SectionTwoProps) => {
  const params = {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: 12,
    offset: "0",
  };
  const { data, error, isLoading } = useQuery<CoinsProps, Error>(
    ["coinData"],
    () => fetchCoinGeckoData("coins", params),
    {
      staleTime: 0,
    }
  );
  console.log(data);

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
            {isLoading
              ? "loading....."
              : data?.coins.map((coin, i) => (
                  <a
                    target="_blank"
                    rel="noreferer"
                    href={coin?.coinrankingUrl}
                    key={i}
                    className="flex items-center gap-4 slider-item"
                  >
                    <img src={coin?.iconUrl || placeholder} className="w-10" />
                    <p className="font-titi text-md leading-7 uppercase">
                      {coin.name}
                    </p>
                  </a>
                ))}
          </div>
        </div>
        <a
          href="https://coinmarketcap.com/all/views/all/"
          target="_blank"
          rel="noreferer"
          className=" mt-8 flex justify-center items-center gap-3 lg:text-[1.2rem]"
        >
          See more <img src={arrow} className="lg:w-8 w-6" />
        </a>
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
