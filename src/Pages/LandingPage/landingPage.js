import React from 'react';
import FollowUsSocial from './FollowUsSocial'
import GetInvolved from './GetInvolved';
import styles from '../../CSS/LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className={styles.landingPage}>
            <FollowUsSocial/>
            <GetInvolved/>
            {/* Landing Page Components Here! */}
        </div>
    )
}