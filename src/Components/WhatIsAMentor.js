import React from 'react'
import meet from '../Assets/meeting.svg';
import styles from '../CSS/WhatIsAMentor.module.css'


export default function WhatIsAMentor() {
  return (
    <div className={styles.mentor} id='mentor'>
        {/* hero above */}
        <div className={styles.mentorAbove}>
          <h3 className={styles.mentorHeader}>What Is A Mentor?</h3>
          <p>Our mentors are industry experts. They are experienced Software Engineers from all over the industry who are committed to guiding the Underdog Devs. They have bi-weekly meetings with their mentees where they offer support in the form of encouragement, interview prep, resume analysis, and coding practice. The mentors develop relationships with the potential for referrals as their mentee develops and becomes job ready. </p>
        </div>

        {/* hero image */}
        <div className={styles.mentorHero}>
          <img className={styles.mentorHeroImage} alt="example" src={meet} />
        </div>
    </div>
  )
}