import React from 'react';
import FollowUsSocial from '../Components/FollowUsSocial';
import MetricsComponent from '../Components/MetricsComponent';
import styles from '../CSS/LandingPage.module.css'
import OurStory from '../Components/OurStory';
import WhatIsAMentee from '../Components/WhatIsAMentee';
import WhatIsAMentor from '../Components/WhatIsAMentor';

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <OurStory/>
      {/* <MetricsComponent /> */}
      <WhatIsAMentor />
      <WhatIsAMentee />
      <FollowUsSocial />
    </div>
  );
}
