import React from 'react';
import FollowUsSocial from './FollowUsSocial';
import MetricsComponent from './MetricsComponent';
import '../../CSS/LandingPage.css'
import OurStory from './OurStory';
import WhatIsAMentee from './WhatIsAMentee';
import WhatIsAMentor from './WhatIsAMentor';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <OurStory/>
      <MetricsComponent />
      <WhatIsAMentor/>
      <WhatIsAMentee />
      <FollowUsSocial />
      
      {/*Landing Page Components Here!*/}
    </div>
  );
}
