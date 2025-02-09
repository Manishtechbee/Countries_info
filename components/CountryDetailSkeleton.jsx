import React from 'react'
import './CountryDetailSkeleton.css'

export default function CountryDetailSkeleton() {
  return (
    <div className="skeleton-country-details-container">
          <div className="skeleton-country-details">
            <div className="img-div"></div>
            <div className="skeleton-details-text-container">
              <div className="head"></div>
              <div className="skeleton-details-text">
              {Array.from({length:8}).map((ele,idx)=>{
        return <span className='para' key={idx}></span>
    })}         
              </div>
              <div className="skeleton-border-countries">
              {Array.from({length:5}).map((ele,idx)=>{
        return <a key={idx}></a>
    })}    
              </div>
            </div>
          </div>
        </div>
  )
}
