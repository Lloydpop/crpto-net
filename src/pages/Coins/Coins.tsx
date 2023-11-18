import { useQuery } from "react-query";
import { fetchCoinGeckoData } from "../../services/crypto";
import placeholder from "../../assets/img/coin.png";
import empty from "../../assets/img/empty2.png";
import { Link, useNavigate } from "react-router-dom";
import { EmptyState, Heading, Loader } from "../../component";
import millify from "millify";
import { formatNumberWithCommas } from "../../utils/ToLocale";
import { Input } from "../../component/Input/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import arrow from "../../assets/img/arrow.png";
import { useEffect, useState } from "react";
interface Coin {
  uuid: string;
  name: string;
  iconUrl: string;
  change: string;
  marketCap: string;
  price: number;
}
interface Props {
  loggedIn?: boolean;
  count?: string;
}
interface CoinsProps {
  coins: Coin[];
  stats: {
    totalCoins: number;
    totalExchanges: number;
    totalMarketCap: number;
    total24hVolume: number;
    totalMarkets: number;
  };
}

const Coins = ({ loggedIn = false, count = "100" }: Props) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const params = {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: count,
    offset: "0",
  };
  const { data, error, isLoading, isFetching } = useQuery<CoinsProps, Error>(
    ["coinData"],
    () => fetchCoinGeckoData("coins", params),
    {
      staleTime: 0,
    }
  );
  const [coinList, setCoin] = useState(data?.coins);
  useEffect(() => {
    setCoin(data?.coins);

    if (data?.coins) {
      const filteredData = data?.coins.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setCoin(filteredData);
    }
  }, [searchTerm, data]);
  if (isLoading || isFetching) {
    return <Loader title="Loading Coins...." />;
  }
  if (data?.coins?.length === 0 || !data?.coins || error?.message) {
    return (
      <EmptyState
        title="Oops an error occured"
        description="please check your internet connection...."
      />
    );
  }

  return (
    <main>
      {loggedIn === true ? (
        <div>
          <div className="mb-16 lg:grid grid-cols-12 flex flex-col gap-10 w-[700px]">
            <p className="font-titi lg:text-[20px] text-[18px]  text-gray-300 col-span-6">
              Total Cryptocurrency
              <span className="lg:text-[22px] text-[20px] block mt-3 font-satoshi text-white">
                {formatNumberWithCommas(data?.stats?.totalCoins)}
              </span>
            </p>
            <p className="font-titi lg:text-[20px] text-[18px] text-gray-300 col-span-6">
              Total Exchanges
              <span className="lg:text-[22px] text-[20px] block mt-3 font-satoshi text-white">
                {data?.stats?.totalExchanges}
              </span>
            </p>
            <p className="font-titi tlg:text-[20px] text-[18px]  text-gray-300 col-span-6">
              Total Market Cap
              <span className="lg:text-[22px] text-[20px] block mt-3 font-satoshi text-white">
                {millify(data?.stats?.totalMarketCap)}
              </span>
            </p>
            <p className="font-titi lg:text-[20px] text-[18px]  text-gray-300 col-span-6">
              Total 24h Volume
              <span className="lg:text-[22px] text-[20px] block mt-3 font-satoshi text-white">
                {millify(data?.stats?.total24hVolume)}
              </span>
            </p>
            <p className="font-titi lg:text-[20px] text-[18px]  text-gray-300 col-span-6">
              Total Market
              <span className="lg:text-[22px] text-[20px] block mt-3 font-satoshi text-white">
                {millify(data?.stats?.totalMarkets)}
              </span>
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center">
            <Heading>Top 10 ranking coins in the world</Heading>
            <Link
              to="/coins"
              className="mr-6 lg:mt-0 mt-5 flex items-center justify-end lg:justify-start gap-2"
            >
              See more
              <img src={arrow} className="w-7" />
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <Heading> List of major coins in the world</Heading>

          <div className="lg:w-[400px] mt-6 relative">
            <Input
              placeholder="search for cryptocurrency..."
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
            <MagnifyingGlassIcon className="w-6 h-6 absolute top-2 right-2 z-[100] text-black" />
          </div>
        </div>
      )}
      {coinList?.length === 0 ? (
        <EmptyState
          image={empty}
          title="No crypto data found"
          description="Try searching by name...."
        />
      ) : (
        <div className="lg:grid md:grid sm:flex flex flex-col grid-cols-12 gap-8 lg:justify-center mt-12">
          {coinList?.map((coin, i) => (
            <div
              key={i}
              className="lg:col-span-3 md:col-span-6  sm:col-span-12 col-span-12 bg-white text-black p-4 min-h-[190px] border-primary border-4  rounded-xl cursor-pointer lg:hover:scale-[1.1] duration-200"
              onClick={() => {
                navigate(`/coins/${coin?.uuid}`);
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-titi font-semibold text-[18px]">
                  <span className="mr-1">[{1 + i}]</span>
                  {coin?.name}
                </p>
                <img src={coin?.iconUrl || placeholder} className="w-[50px]" />
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <p>Price : {millify(coin.price)}</p>
                <p>Market cap : {coin?.marketCap}</p>
                <p>Daily change: {coin?.change}%</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Coins;
