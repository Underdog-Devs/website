import React from 'react'
import styles from '../CSS/OurStory.module.css'
import coworkers from '../Assets/co_workers.png'

export default function OurStory() {
  return (
    <div className={styles.ourStory}>
        {/* hero above */}
        <div className={styles.ourStoryAbove}>
          <h3 className={styles.ourStoryHeader}>Our Story</h3>
          <p>We are a group of software developers supporting the formerly incarcerated in their transition into the software industry.</p>
        </div>

        {/* hero image */}
        <div className={styles.ourStoryHero}>
          <img className={styles.ourStoryHeroImage} alt="example" src={coworkers} />
        </div>
    </div>
  )
}
