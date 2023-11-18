import { useQuery } from "react-query";
import fetchCryptoExchange from "../../services/news";
import millify from "millify";
import { Link } from "iconsax-react";
import { EmptyState, Heading, Loader } from "../../component";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Pagination from "../../component/Pagination/Pagination";
import { useSerialNumber } from "../../hooks/useSerialNumber";

interface ExchangeProps {
  data?: {
    name: string;
    image: string;
    trade_volume_24h_btc: number;
    trust_score: number;
    url: string;
    description: string;
  }[];
}

const Exchange = ({}: ExchangeProps) => {
  const [activeCollapsible, setActiveCollapsible] = useState<number | null>(
    null
  );

  const itemsPerPage = 10;
  const [allItems, setAllItems] = useState<ExchangeProps | any>([]);
  const [currentPageItems, setCurrentPageItems] = useState<
    ExchangeProps["data"] | undefined
  >([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isFetching } = useQuery<ExchangeProps | any>(
    ["coinExchange", currentPage],
    () => fetchCryptoExchange(),
    {
      staleTime: 0,
    }
  );

  useEffect(() => {
    if (data) {
      setAllItems(data);
    }
  }, [data]);

  useEffect(() => {
    if (allItems) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const itemsForCurrentPage = allItems?.slice(startIndex, endIndex);
      setCurrentPageItems(itemsForCurrentPage);
    }
  }, [allItems, currentPage, itemsPerPage]);

  const handlePageChange = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };
  const serialNumber = useSerialNumber(currentPage, itemsPerPage);

  if (isLoading || isFetching) {
    return <Loader title="Loading Crypto Exchange...." />;
  }

  if (!data || error || data?.length === 0) {
    return (
      <EmptyState
        title="Oops an error occurred"
        description="Please check your internet connection...."
      />
    );
  }

  return (
    <div className="lg:mt-6">
      <Heading>Track your crypto exchange rate</Heading>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-12 mt-12 w-[1000px] lg:w-full">
          <div className="col-span-3 text-[17px]">
            <h1 className="font-titi">Exchanges</h1>
          </div>
          <div className="col-span-3 text-[18px]">
            <h1 className="font-titi">24h Trade Volume</h1>
          </div>
          <div className="col-span-3 text-[18px]">
            <h1 className="font-titi">Trust Score</h1>
          </div>
          <div className="col-span-3 text-[18px]">
            <h1 className="font-titi">Website</h1>
          </div>
          <div className="col-span-12">
            {currentPageItems?.map((exchange, i) => (
              <div
                key={i}
                className="col-span-12 grid grid-cols-12 mt-16 border-b border-b-[#ffffff1a] py-4 text-gray-200 cursor-pointer relative"
                onClick={() =>
                  setActiveCollapsible(activeCollapsible === i ? null : i)
                }
              >
                <ChevronDownIcon
                  className={`w-4 absolute right-0 top-2 transition-transform ${
                    activeCollapsible === i ? "rotate-180" : ""
                  }`}
                />
                <div className="flex items-center gap-3 col-span-3">
                  <p>{i + serialNumber}.</p>

                  <img src={exchange?.image} className="w-5" />

                  <p>{exchange?.name}</p>
                </div>
                <div className="col-span-3">
                  <p>{millify(exchange?.trade_volume_24h_btc)}</p>
                </div>
                <div className=" col-span-3">
                  <p>{exchange?.trust_score}</p>
                </div>
                <div className="flex items-center gap-1 col-span-3">
                  <a
                    href={exchange?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="lowercase hover:text-blue-600"
                  >
                    {exchange?.name}
                  </a>
                  <Link className="w-4" />
                </div>
                <div
                  className={`flex items-center gap-1 col-span-12 mt-6 text-[14px] font-extralight text-gray-300  overflow-hidden duration-[0.5s] ${
                    activeCollapsible === i ? "h-auto py-5" : "h-0"
                  }`}
                >
                  {exchange?.description ? (
                    <p>{exchange?.description}</p>
                  ) : (
                    <p>
                      No description, click on the website link to learn more
                      about {exchange?.name}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-8">
        <Pagination
          totalItems={allItems?.length || 0}
          itemsPerPage={itemsPerPage}
          handlePageClick={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Exchange;
