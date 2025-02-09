import { useTheme } from "../hooks/useTheme";

export default function Header() {
  
  /*if(isdark){
    document.body.classList.add("dark")
  }
  else{
    document.body.classList.remove("dark")
  }*/
 
 const [isdark,setisdark]=useTheme();
  return (
    <header className={`header-container ${isdark?'dark':''}`}>
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
