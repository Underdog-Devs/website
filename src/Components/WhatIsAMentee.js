import React from 'react'
import pair from '../Assets/pair_programming.svg';
import styles from '../CSS/WhatIsAMentee.module.css'


export default function WhatIsAMentee() {
  return (
    <div className={styles.mentee} id='mentee'>
        {/* hero above */}
        <div className={styles.menteeAbove}>
          <h3 className={styles.menteeHeader}>What Is A Mentee?</h3>
          <p>Our mentees are aspiring software engineers from either disadvantaged backgrounds or are formerly incarcerated. They are ambitious and determined people learning the ins-and-outs of the software industry in order to land full time offers.</p>
        </div>

        {/* hero image */}
        <div className={styles.menteeHero}>
          <img className={styles.menteeHeroImage} alt="example" src={pair} />
        </div>
    </div>
  )
}
