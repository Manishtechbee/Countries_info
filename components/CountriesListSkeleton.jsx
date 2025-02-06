import React from 'react'
import './CountriesListSkeleton.css'

export default function CountriesListSkeleton() {
   
  return (
    <div className="countries-container">
        {Array.from({length:16}).map((ele,idx)=>{
        return <div key={idx} className="country-card skeleton"></div>
    })}
    </div>
  )
}
