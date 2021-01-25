import React from 'react'
import '../../CSS/OurStory.css'
import coworkers from '../../Assets/co_workers.png'

export default function OurStory() {
  return (
    <div className="our-story">
        {/* hero above */}
        <div className="our-story-above">
          <h3 className="our-story-header">Our Story</h3>
          <p>We are a group of software developers supporting the formerly incarcerated in their transition into the software industry.</p>
        </div>

        {/* hero image */}
        <div className="our-story-hero">
          <img className="our-story-hero-image" alt="example" src={coworkers} />
        </div>
    </div>
  )
}
