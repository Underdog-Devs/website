import React from 'react';
import FollowUsSocial from './FollowUsSocial';
import MetricsComponent from './MetricsComponent';
import styles from '../../CSS/LandingPage.module.css'
import OurStory from './OurStory';

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <OurStory/>
      <MetricsComponent />
      <FollowUsSocial />
      {/*Landing Page Components Here!*/}
    </div>
  );
}
