import { useState } from "react";
import CountriesContainer from "./CountriesContainer";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Search from "./Search";
import '../App.css'

export default function Home() {
  const [Query , setQuery]= useState('');
  const [filter,setFilter]=useState('');
  return (
    <>
    <main>
    <div className="search-filter-container">
    <Search setQuery={setQuery}/>
    <Dropdown setFilter={setFilter}/>
    </div>
    <CountriesContainer query={Query} filter={filter}/>
    </main>
    
    </>
  )
}
