import React from 'react';
import meet from '../Assets/meeting.svg';
import styles from '../CSS/WhatIsAMentor.module.css';
import globalStyles from '../CSS/globalStyles.module.css';

export default function WhatIsAMentor() {
  return (
    <div className={styles.mentor} id="mentor">
      {/* hero above */}
      <div className={`${styles.mentorAbove} ${globalStyles.normalP}`}>
        <h3 className={`${styles.mentorHeader} ${globalStyles.headerText}`}>
          What Is A Mentor?
        </h3>
        <p>
          Our mentors are industry experts. They are experienced software
          engineers from all over the industry who are committed to guiding the
          Underdog Devs. They have bi-weekly meetings with their mentees where
          they offer support in the form of encouragement, interview prep,
          resume analysis, and coding practice. The mentors develop
          relationships with the potential for referrals as their mentee
          develops and becomes job ready.{' '}
        </p>
        <p>
          Right now, our mentors consist of over 100 experienced software
          engineers from companies such as Adobe, YipitData, Twitter, Blizzard,
          JP Morgan Chase, NASA, Pilot, Eventbrite, Apple, Halide, Clubhouse,
          The Big Nerd Ranch, Zulily, Netflix, Universal Studios, Disney,
          Nordstrom, Credit Karma, and Starbucks.
        </p>
      </div>

      {/* hero image */}
      <div className={styles.mentorHero}>
        <img className={styles.mentorHeroImage} alt="example" src={meet} />
      </div>
    </div>
  );
}
