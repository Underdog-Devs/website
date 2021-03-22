import React from 'react'
import pair from '../Assets/pair_programming.svg';
import styles from '../CSS/WhatIsAMentee.module.css'


export default function WhatIsAMentee() {
  return (
    <div className={styles.mentee}>
        {/* hero above */}
        <div className={styles.menteeAbove}>
          <h3 className={styles.menteeHeader}>What Is A Mentee?</h3>
          <p>Each mentee is picked especially for you, based on availability, experience, education, practice topics, and target companies.</p>
        </div>

        {/* hero image */}
        <div className={styles.menteeHero}>
          <img className={styles.menteeHeroImage} alt="example" src={pair} />
        </div>
    </div>
  )
}
