
import Header from "./components/Header";
import './App.css'
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { theme } from "./contexts/themeContext";

export default function App() {
  const [isdark, setisdark]=useState(JSON.parse(localStorage.getItem('isdarkMode')));
  
  return (
    <>
    <theme.Provider value={[isdark,setisdark]}>
    <Header/>
    <Outlet/>
    </theme.Provider>
    </>
  )
}
