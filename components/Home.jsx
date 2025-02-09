import { useContext, useState } from "react";
import CountriesContainer from "./CountriesContainer";
import Dropdown from "./Dropdown";
import Search from "./Search";
import '../App.css'
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [Query , setQuery]= useState('');
  const [filter,setFilter]=useState('');
  const [isdark,setisdark]=useTheme()
  
  return (
    <>
    <main className={`${isdark?'dark':''}`}>
    <div className="search-filter-container">
    <Search setQuery={setQuery}/>
    <Dropdown setFilter={setFilter}/>
    </div>
    <CountriesContainer query={Query} filter={filter}/>
    </main>
    
    </>
  )
}
