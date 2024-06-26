import React from 'react'
import CountUp from 'react-countup';
import './Counterup.css'
const Counterup = () => {
  return (
    <div className="stats">
      <div className="stat">
        <span className="statCount">
          <CountUp start={1} end={100} duration={4} />
          <span className="statPlus">+</span>
        </span>
        <p className="statText">Products</p>
      </div>
      <div className="stat">
        <span className="statCount">
          <CountUp start={400} end={500} duration={4} />
          <span className="statPlus">+</span>
        </span>
        <p className="statText">Happy Customers</p>
      </div>
      <div className="stat">
        <span className="statCount">
          <CountUp start={1} end={100} duration={4} />
          <span className="statPlus">+</span>
        </span>
        <p className="statText">Installed Locations</p>
      </div>
    </div>
  )
}

export default Counterup