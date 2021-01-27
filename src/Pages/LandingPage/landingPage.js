import React from 'react';
import FollowUsSocial from './FollowUsSocial';
import MetricsComponent from './MetricsComponent';
import GetInvolved from './GetInvolved';
import styles from '../../CSS/LandingPage.module.css';

export default function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <MetricsComponent />
      <FollowUsSocial />
      <GetInvolved />
      {/*Landing Page Components Here!*/}
    </div>
  );
}
