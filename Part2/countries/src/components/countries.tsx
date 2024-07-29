import { Country, Weather } from "../services/types"
import { useEffect, useState } from "react";
import Httpr from "../services/api";
import styled from "styled-components";

const CountryCard = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 1px solid white;
  height: 300px;
  gap: 20px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    place-self: center;
    align-items: center;
    height: auto;
  }`
;

const CountryInfo = styled.div`
  height: 80%;
  overflow: scroll;`
;

interface CountriesProps {
  countries: Country[];
  message: string;
  search: string;
  onClick: (id: string) => void;
}

const Countries = ({ countries, search, message, onClick }: CountriesProps) => {
  const [weather, setWeather] = useState<Weather[]>([]);

  useEffect(() => {
    if (countries.length === 1) {
      const cityname = countries.map(value => value.name.common);

      Httpr.getWeather(cityname)
        .then(res => setWeather([res.data]))
        .catch(err => console.log('Could not fetch weather data', err))

    } else setWeather([]);
  }, [countries, search]);

  const weatherCss = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  }

  return (
    <>
      {search.length < 1 || countries.length === 1 ?
        (
          <div style={{ display: "flex", flexDirection: "column", gap: "64px", gridAutoFlow: "" }}>
            {countries.map(country => (
              <CountryCard key={country.cca3}>
                <img src={country.flags.png} alt={country.name.official} />

                <CountryInfo>
                  <h1>{country.name.common}</h1>
                  <p>Capital: {country.capital}</p>
                </CountryInfo>

                <CountryInfo>
                  <h2>Area</h2>
                  <p>{country.area} km2 </p>
                </CountryInfo>

                <CountryInfo>
                  <h3>Languages</h3>
                  <ul>
                    {Object.entries(country.languages || {}).map(([code, value]) => (
                      <li key={code}>{value}</li>
                    ))}
                  </ul>
                </CountryInfo>


                {weather.map(value => {
                  return (
                    <div key={country.cca3} style={weatherCss}>
                      <h2>Weather in {country.capital}</h2>
                      <p>temperature: {Math.floor(value.main.temp - 273.15).toFixed(2)} Celcius</p>

                      <img
                        alt="weather icon"
                        src={String(value.weather.map(value => {
                          return `https://openweathermap.org/img/wn/${value.icon}@2x.png`;
                        }))}
                      />
                      <p> wind: {value.wind.speed} m/s </p>
                    </div>
                  )
                })}
              </CountryCard >
            ))}
          </div >
        )
        :
        (
          <>
            {message ? (<p>{message}</p>) :
              (
                <div>
                  {countries.map(country => (
                    <div id={country.name.common} key={country.cca3} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
                      <p>{country.name.common}</p>
                      <button type="button" onClick={() => onClick(country.name.common)}>show</button>
                    </div>
                  ))}
                </div>
              )
            }
          </>
        )
      }
    </ >
  )
}

export default Countries
