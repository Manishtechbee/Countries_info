import React from 'react'
import './CountriesListSkeleton.css'

export default function CountriesListSkeleton() {
   
  return (
    <div className="countries-container">
        {Array.from({length:16}).map((ele,idx)=>{
        return <div key={idx} className="country-card shimmer-card">
          <div className="flag-container"></div>
      <div className="card-text">
        <h3 className="card-title"></h3>
        <p></p>
        <p></p>
        <p></p>
      </div>
        </div>
    })}
    </div>
    )
}
