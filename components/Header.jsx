import { useState } from "react";

export default function Header({mode,setmode}) {
  const [isdark, setisdark]=useState(JSON.parse(localStorage.getItem('isdarkMode')));
  if(isdark){
    document.body.classList.add("dark")
  }
  else{
    document.body.classList.remove("dark")
  }
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme-changer" onClick={()=>{
          setisdark(!isdark)
          localStorage.setItem("isdarkMode",!isdark)
        }}><i className={`theme-changer fa-solid fa-${!isdark?'moon':'sun'}`}></i>&nbsp;&nbsp;{!isdark?"Dark Mode":"Light Mode"}</p>
      </div>
    </header>
  )
}
