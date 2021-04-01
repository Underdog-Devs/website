import React from 'react'
import meet from '../Assets/meeting.svg';
import styles from '../CSS/WhatIsAMentor.module.css'


export default function WhatIsAMentor() {
  return (
    <div className={styles.mentor} id='mentor'>
        {/* hero above */}
        <div className={styles.mentorAbove}>
          <h3 className={styles.mentorHeader}>What Is A Mentor?</h3>
          <p>Experienced Professionals, like-minded people, and others with similar interests and goals.</p>
        </div>

        {/* hero image */}
        <div className={styles.mentorHero}>
          <img className={styles.mentorHeroImage} alt="example" src={meet} />
        </div>
    </div>
  )
}