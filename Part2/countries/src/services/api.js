import axios from "axios";

const WeatherApiKey = process.env.REACT_APP_WEATHER_KEY;
const countries = "https://studies.cs.helsinki.fi/restcountries/api/all";
const country = "https://studies.cs.helsinki.fi/restcountries/api/name/";

const getCountries = () => axios.get(countries);
const getCountry = id => axios.get(`${country}/${id}`);

const getWeather = cityname => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${WeatherApiKey}` );

const Httpr = {
  getCountries: getCountries,
  getCountry: getCountry,
  getWeather: getWeather
};

export default Httpr;
