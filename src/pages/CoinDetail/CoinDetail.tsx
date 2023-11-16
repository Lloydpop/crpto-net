import { fetchCoinGeckoData } from "../../services/crypto";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import arrow from "../../assets/img/arrow.png";
import { EmptyState, Heading, Loader } from "../../component";
import { Select } from "../../component";
import { useForm } from "react-hook-form";
import millify from "millify";
import {
  BuyCrypto,
  DollarSquare,
  Rank,
  TimerStart,
  Volume,
  MoneyChange,
  Send,
  Refresh,
  Link,
} from "iconsax-react";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/20/solid";
import HTMLReactParser from "html-react-parser";
import LineChart from "./LineChart";
interface AnalyticsProps {}

interface Market {
  coin: {
    description: string;
    iconUrl: string;
    name: string;
    symbol: string;
    price: number;
    rank: string;
    volume: number;
    marketCap: number;
    numberOfExchanges: string;
    numberOfMarkets: string;
    "24hVolume": number;
    supply: { confirmed: boolean; total: string; circulating: string };
    allTimeHigh: { price: number };
    links: {
      url: string;
      name: string;
      type: string;
    }[];
  };
}
interface HistoryData {
  change: string;
  history: Array<{ timestamp: number; price: number }>;
}
const CoinDetail = ({}: AnalyticsProps) => {
  const { id } = useParams();
  const { control, watch } = useForm();
  const options = [
    {
      label: "24h",
      value: "24h",
    },
    {
      label: "7d",
      value: "7d",
    },
    {
      label: "30d",
      value: "30d",
    },
    {
      label: "3m",
      value: "3m",
    },
    {
      label: "5y",
      value: "5y",
    },
  ];
  const timeStamp = watch("timeStamp")?.value || "24h";

  const params = {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: timeStamp,
  };

  const { data, error, isLoading, isFetching } = useQuery<Market, Error>(
    "coinDetail",
    () => fetchCoinGeckoData(`coin/${id}`, params)
  );
  const { data: historyData, refetch } = useQuery<HistoryData, Error>(
    "coinHistory",
    () => fetchCoinGeckoData(`coin/${id}/history`, params)
  );
  useEffect(() => {
    refetch();
  }, [timeStamp]);
  if (isLoading || isFetching) {
    return <Loader title="Loading Coin Detail...." />;
  }
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${data?.coin.price && millify(data?.coin.price)}`,
      icon: <DollarSquare className="w-6 h-6" />,
    },
    {
      title: "Rank",
      value: data?.coin.rank,
      icon: <Rank className="w-6 h-6" />,
    },
    {
      title: "24h Volume",
      value: `$ ${
        data?.coin?.["24hVolume"] && millify(data?.coin?.["24hVolume"])
      }`,
      icon: <Volume className="w-6 h-6" />,
    },
    {
      title: "Market Cap",
      value: `$ ${data?.coin.marketCap && millify(data?.coin.marketCap)}`,
      icon: <BuyCrypto className="w-6 h-6" />,
    },
    {
      title: "All-time-high(daily avg)",
      value: `$ ${
        data?.coin?.allTimeHigh.price && millify(data?.coin?.allTimeHigh.price)
      }`,
      icon: <TimerStart className="w-6 h-6" />,
    },
  ];
  const genericStats = [
    {
      title: "Number Of Markets",
      value: data?.coin.numberOfMarkets,
      icon: <DollarSquare className="w-6 h-6" />,
    },
    {
      title: "Number Of Exchanges",
      value: data?.coin.numberOfExchanges,
      icon: <MoneyChange className="w-6 h-6" />,
    },
    {
      title: "Approved Supply",
      value:
        data?.coin?.supply.confirmed === true ? (
          <CheckBadgeIcon className="w-6 h-6 text-green-600" />
        ) : (
          <XMarkIcon className="w-6 h-6 text-red-600" />
        ),
      icon: <Volume className="w-6 h-6" />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        data?.coin?.supply.total === null
          ? 0
          : millify(Number(data?.coin?.supply.total))
      }`,
      icon: <Send className="w-6 h-6" />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        data?.coin?.supply.circulating &&
        millify(Number(data?.coin?.supply.circulating))
      }`,
      icon: <Refresh className="w-6 h-6" />,
    },
  ];
  if (!data?.coin || error?.message) {
    return (
      <EmptyState
        title="Oops an error occured"
        description="please check your internet connection...."
      />
    );
  }

  return (
    <div className="mt-6">
      <section>
        <div className="lg:grid flex flex-col grid-cols-12 gap-x-24 mt-4">
          <div className="lg:col-span-8 col-span-12">
            <Heading>
              {data?.coin?.name} ( {data.coin.symbol} ) Price
            </Heading>
            <div className=" text-gray-300 mt-4">
              <p>
                {data?.coin?.name} Live price in US dollars, view value
                statistics, market cap and supply.
              </p>
              <div className="lg:w-[400px] w-full mt-5">
                <Select
                  control={control}
                  name="timeStamp"
                  placeholder="Select Time Period"
                  options={options}
                  defaultValue={"24h"}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 my-12">
            <LineChart
              coinName={data?.coin.name}
              coinHistory={historyData || { change: "", history: [] }}
              currentPrice={data?.coin.price}
            />
          </div>
          <div className="mt-7 col-span-6">
            <h1 className="font-titi text-[20px]">
              {data?.coin?.name} Value Statistics
            </h1>
            <p className="mt-3 text-light text-sm text-gray-300">
              An overview showing the stats of {data?.coin.name}
            </p>
            {stats.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center mt-9  pb-6 border-b-[1px] border-b-[#ffffff33]"
              >
                <p className="flex items-center gap-2 text-gray-300">
                  {item?.icon}
                  {item?.title}
                </p>
                <p> {item?.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 col-span-6">
            <h1 className="font-titi text-[20px]">Other Statistics</h1>
            <p className="mt-3 text-light text-sm text-gray-300">
              An overview showing the stats of all cryptocurrencies
            </p>
            {genericStats.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center mt-9  pb-6 border-b-[1px] border-b-[#ffffff33]"
              >
                <p className="flex items-center gap-2 text-gray-300">
                  {item?.icon}
                  {item?.title}
                </p>
                <p> {item?.value}</p>
              </div>
            ))}
          </div>
          <div className="col-span-6 mt-6">
            <p className="font-titi font-semibold text-[18px] mb-4">
              What is {data?.coin.name}?
            </p>
            <p className=" text-gray-300">
              {HTMLReactParser(data?.coin.description)}
            </p>
            {data.coin.links && (
              <p className="mt-8 flex items-center gap-2">
                Visit links below to know more about {data?.coin.name}
                <img src={arrow} className="w-8" />
              </p>
            )}
            {data.coin.links.map((link, i) => (
              <li key={i} className="flex justify-between mt-8">
                <p className="capitalize text-gray-300">{link.type}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  {link.name}
                  <Link className="w-4 h-4" />
                </a>
              </li>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoinDetail;
