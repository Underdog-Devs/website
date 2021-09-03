import React from 'react';
import styles from '../CSS/LandingPage.module.css';
import Story from '../Components/Story';
import Stats from '../Components/Stats';
import ProjectUnderdog from '../Components/ProjectUnderdog';
import WhatIsAMentee from '../Components/WhatIsAMentee';
import WhatIsAMentor from '../Components/WhatIsAMentor';
// import SpringIntoSwift from '../Components/SpringIntoSwift';
import GetInvolved from '../Components/GetInvolved';

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Story />
      <Stats />
      <ProjectUnderdog />
      <WhatIsAMentor />
      <WhatIsAMentee />
      <GetInvolved />
    </div>
  );
}
