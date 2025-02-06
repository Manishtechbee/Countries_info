{/*import countriesData from "../data.js";*/}
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import CountriesListSkeleton from "./CountriesListSkeleton.jsx";
import CountryDetail from "./CountryDetail.jsx";

export default function CountriesContainer({query,filter}) {
  const [countriesData, setData]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
    setData(data)
  })
  },[])
  return ( 
  <>
  
  {countriesData.length===0?<CountriesListSkeleton/> : <div className="countries-container">
    {countriesData.filter((country)=>{
    return country.name.common.toLowerCase().includes(query) && country.region.includes(filter)
  }).map((country) => {
    return (
      <>
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        population={country.population.toLocaleString("en-IN")}
        region={country.region}
        capital={country.capital?.[0]}
        img={country.flags.svg}
        data={country}
      />
      </>
    );
  })}
  </div>}</>)
  
  
}
