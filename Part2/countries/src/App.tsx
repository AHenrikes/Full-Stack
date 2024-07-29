import React, { useState, useEffect, useCallback } from "react";
import Countries from "./components/countries";
import Filter from "./components/filter";
import Httpr from "./services/api";
import { Country } from "./services/types";

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country[]>([]);
  const [message, setMessage] = useState('');
  const [filter, setFilter] = useState('');

  const searchValue = useCallback(() => {
    const result = countries.filter(result => result.name.common.toLowerCase().includes(filter.toLowerCase()))
    setCountry(result);

    if (result.length > 10 && filter.length > 0) setMessage('Too many matches, specify another filter');
    else setMessage('');
  }, [countries, filter]);

  const countryDetail = (id: string) => {
    Httpr.getCountry(id)
      .then(res => setCountry([res.data]))
      .catch(err => console.log('unable to fetch country data', err))
  }

  useEffect(() => {
    Httpr.getCountries()
      .then(res => setCountries(res.data))
      .catch(err => console.log('could not fetch countries data', err))
  }, []);

  useEffect(() => {
    searchValue();
  }, [searchValue])

  return (
    <main>
      <Filter
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
      />

      <Countries countries={country} search={filter} message={message} onClick={(id: string) => countryDetail(id)} />
    </main>
  )
}

export default App