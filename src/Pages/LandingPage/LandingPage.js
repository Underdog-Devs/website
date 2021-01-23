import React from 'react';
import FollowUsSocial from './FollowUsSocial';
import MetricsComponent from './MetricsComponent';
import '../../CSS/LandingPage.css'
import { Button } from 'antd';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <MetricsComponent />
      <FollowUsSocial />
      {/*Landing Page Components Here!*/}
    </div>
  );
}
