import React from 'react';
import FollowUsSocial from './FollowUsSocial';
import MetricsComponent from './MetricsComponent';
import '../../CSS/LandingPage.module.css'
import OurStory from './OurStory';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <OurStory/>
      <MetricsComponent />
      <FollowUsSocial />
      {/*Landing Page Components Here!*/}
    </div>
  );
}
