import './style.css'
import React, { useEffect, useState } from "react";

function App() {

  
  const [value, setValue] = useState(16);
  const [discounted, setDiscounted] = useState(true);
  return (
    
    <div className="App">

        <div className='wrapper'>
          <div className='hero'>
            <h1>Simple, traffic-based pricing </h1>
            <p>Sign-up for our 30-day trial. <span>No credit card required.</span></p>
          </div>
          <div className="main-content">
            <div className="content-top">
              <p>100K PAGEVIEWS</p> 
              <h2>${discounted?value*.75 : value}
                <span>/month</span>
              </h2> 
              <div className="slider">
                <input min="1"max="32" 
                onChange={
                  (e)=>setValue(value=>e.target.value)
                  } type="range">
                </input>

                <div className="progressslider" 
                style={
                  {"width": (value/32)*100 + "%"}
                  }>
                </div>
              </div>
              <div className='switch-container'>
                Monthly Billing 
                <label className="switch">
                  <input onChange={()=>{setDiscounted(discounted => !discounted); console.log(discounted)}} type="checkbox"></input>
                  <span className="switch-toggle"></span>
                </label>
                Yearly Billing <span className='discount'>25% <span className='desc'>discount</span> </span>
              </div>
            </div>   
          
            <div className='content-bottom'>
              <ul>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>

              <button>Start my trial</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
