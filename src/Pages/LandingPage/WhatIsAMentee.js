import React from 'react'
import pair from '../../Assets/pair_programming.svg';
import '../../CSS/WhatIsAMentee.css'


export default function WhatIsAMentee() {
  return (
    <div className="mentee">
        {/* hero above */}
        <div className="mentee-above">
          <h3 className="mentee-header">What Is A Mentee?</h3>
          <p>Each mentee is picked especially for you, based on availability, experience, education, practice topics, and target companies.</p>
        </div>

        {/* hero image */}
        <div className="mentee-hero">
          <img className="mentee-hero-image" alt="example" src={pair} />
        </div>
    </div>
  )
}
