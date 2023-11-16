import axios from "axios";

const cryptoNewsHeaders = {
  "x-rapidapi-key": "76fb47818dmsh29552c68fab0aafp173e78jsn8913eaf80637",
  "x-rapidapi-host": "coingecko.p.rapidapi.com",
};

const createCryptoExchangeRequest = () => {
  const baseurl = "https://coingecko.p.rapidapi.com/exchanges";

  return {
    method: "GET",
    url: baseurl,
    headers: cryptoNewsHeaders,
  };
};

const fetchCryptoExchange = async () => {
  try {
    const options = createCryptoExchangeRequest();
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchCryptoExchange;
