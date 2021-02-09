import React from 'react';
import FollowUsSocial from './FollowUsSocial';
import MetricsComponent from './MetricsComponent';
import styles from '../../CSS/LandingPage.module.css'
import OurStory from './OurStory';
import WhatIsAMentee from './WhatIsAMentee';

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <OurStory/>
      <MetricsComponent />
      <WhatIsAMentee />
      <FollowUsSocial />
    </div>
  );
}
