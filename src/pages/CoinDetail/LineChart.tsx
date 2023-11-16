import { Line } from "react-chartjs-2";
import "chart.js/auto";
import millify from "millify";

export interface LineChartProps {
  coinHistory: {
    change: string;
    history: Array<{ timestamp: number; price: number }>;
  };

  currentPrice: number;
  coinName: string;
}

const LineChart = ({ coinHistory, currentPrice, coinName }: LineChartProps) => {
  console.log(coinHistory);

  const coinPrice = coinHistory?.history?.map((entry) => entry?.price) || [];
  const coinTimestamp =
    coinHistory?.history?.map((entry) => {
      const timestamp = new Date(entry.timestamp * 1000);

      return timestamp.toLocaleDateString();
    }) || [];

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          color: "#ccc7c7",
        },
      },
      x: {
        ticks: {
          beginAtZero: true,
          color: "#ccc7c7",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ccc7c7", // Set the color of the legend labels
        },
      },
    },
  };
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between gap-3  text-white">
        <h3 className="text-[20px] font-titi">{coinName} Price Chart</h3>
        <div className="flex items-center gap-2">
          <p>{coinHistory?.change}</p>
          <p>
            Current {coinName} Price : $ {millify(currentPrice)}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <Line data={data} options={options} id="line" />
      </div>
    </div>
  );
};

export default LineChart;
