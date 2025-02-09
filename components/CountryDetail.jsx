import React, { useContext, useEffect, useState } from 'react'
import "./country.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import CountryDetailSkeleton from './CountryDetailSkeleton';
import { useTheme } from '../hooks/useTheme';

export default function CountryDetail() {
  const params=useParams();
  const {state}=useLocation();
  const countryname=params.CountryDetail;
  const [notFound,setnotFound]= useState(false);
  const [loading, setLoading] = useState(true);
  const [countryData,setcountryData]=useState({
    img: '',
    alt: '',
    name: '',
    nativeName: '',
    population: '',
    region: '',
    subRegion: '',
    capital: '',
    languages: '',
    currencies: '',
    tld: '',
    borders: []
  })
  const updateCountryData=(data)=>{
    console.log(data)
    setcountryData(
      {
        img:data.flags.svg ,
        alt:data.flags.alt ,
        name: data.name.common || data.name,
        nativeName: Object.values(data.name.nativeName || {})[0].common,
        population: data.population.toLocaleString('en-IN') ,
        region: data.region ,
        subRegion: data.subregion ,
        capital: data.capital.join(',') ,
        languages: Object.values(data.languages || {}).join(','),
        currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(', '),
        tld:Object.values(data.tld).join(','),
        borders:[]
      }
    )
    if(!data.borders){
      data.borders=[]
    }
    Promise.all(
      data.borders.map((border)=>{
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry])=>(borderCountry.name.common)
      )
    })
    ).then((borders)=>{setTimeout(()=>setcountryData((prevState)=>({...prevState, borders})))
  })
  setLoading(false);
  }
  useEffect(()=>{
    state?updateCountryData(state.data):
    fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
    .then(res=>res.json())
    .then(([data])=>{
      updateCountryData(data)
    }).catch((error)=>{setnotFound(true)}
    ).finally(() => {
      setLoading(false);
    });
   
  },[countryname])

  if(notFound){
    return <div className='notfound'> Country Not Found!!!...........</div>
  }
  
  const [isdark,setisdark]=useTheme()
  return (
    <>
      <main className={`${isdark?'dark':''}`}>
      {loading?<CountryDetailSkeleton/>:<div className="country-details-container">
        <span className="back-button" onClick={()=>{history.back()}}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.img} alt={countryData.alt} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
              <p><b>Population: {countryData.population}</b><span className="population"></span></p>
              <p><b>Region: {countryData.region}</b><span className="region"></span></p>
              <p><b>Sub Region: {countryData.subRegion}</b><span className="sub-region"></span></p>
              <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span>
              </p>
              <p><b>Currencies: {countryData.currencies}</b><span className="currencies"></span></p>
              <p><b>Languages: {countryData.languages}</b><span className="languages"></span></p>
            </div>
            <div className="border-countries"><b>Border Countries: </b>&nbsp;   {countryData.borders ? countryData.borders.map((border, index) => (
                  <Link key={index} to={`/${border}`}>{border}</Link>
                )) : 'None'}</div>
          </div>
        </div>
      </div>}
    </main></>
  )
  

  
}
