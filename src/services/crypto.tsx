import axios from "axios";

const createCoinGeckoRequest = (endpoint: string, params?: object) => {
  const baseurl = "https://coinranking1.p.rapidapi.com";

  return {
    method: "GET",
    url: `${baseurl}/${endpoint}`,
    params: {
      ...params,
    },
    headers: {
      "X-RapidAPI-Key": "76fb47818dmsh29552c68fab0aafp173e78jsn8913eaf80637",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
};

export const fetchCoinGeckoData = async (endpoint: string, params?: object) => {
  try {
    const options = createCoinGeckoRequest(endpoint, params);
    const response = await axios.request(options);
    return response?.data?.data;
  } catch (error) {
    console.error(error);
  }
};
