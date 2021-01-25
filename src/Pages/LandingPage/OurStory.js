import React from 'react'
import '../../CSS/OurStory.css'
import coworkers from '../../Assets/co_workers.png'

export default function OurStory() {
  return (
    <div className="our-story">
        <h3 className="our-story-header">Our Story</h3>
        <p>We are a group of software developers supporting the formerly incarcerated in their transition into the software industry.</p>
        <img alt="example" src={coworkers} />
    </div>
  )
}
