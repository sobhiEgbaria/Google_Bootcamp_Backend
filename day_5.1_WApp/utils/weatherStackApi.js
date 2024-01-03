import axios from "axios";

export const apiData = async (address) => {
  const params = {
    access_key: "41234a8d744af5b0504bbfbd4d029cec",
    query: address,
  };

  try {
    const response = await axios.get("http://api.weatherstack.com/current", {
      params,
    });
    return `${response.data.current.weather_descriptions} its currently ${response.data.current.temperature}C, but it is feel like ${response.data.current.feelslike}C`;
  } catch (error) {
    return `Error: ${error.info}`;
  }
};
