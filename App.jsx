
import Header from "./components/Header";
import './App.css'
import { Outlet } from "react-router";
import { useEffect, useState } from "react";

export default function App() {
  
  
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
