import React from 'react'
import meet from '../../Assets/meeting.svg';
import '../../CSS/WhatIsAMentor.css'


export default function WhatIsAMentor() {
  return (
    <div className="mentor">
        {/* hero above */}
        <div className="mentor-above">
          <h3 className="mentor-header">What Is A Mentor?</h3>
          <p>Experienced Professionals, like-minded people, and others with similar interests and goals.</p>
        </div>

        {/* hero image */}
        <div className="mentor-hero">
          <img className="mentor-hero-image" alt="example" src={meet} />
        </div>
    </div>
  )
}