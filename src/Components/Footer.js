import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../CSS/Footer.module.css'
import { Button} from 'antd';
import 'antd/dist/antd.css';

export default function Footer() {
    const Twitter = () => (
            <Button type="" shape="circle">
            <a href="https://twitter.com/UnderdogDevs" >
                <FontAwesomeIcon icon={['fab', "twitter"]} />  
            </a>
            </Button>)

    const Youtube = () => (
        <Button type="" shape="circle">
            <a href="https://youtube.com/channel/UC8rwCavxrhcfZTYPnR_VdSg" >
                <FontAwesomeIcon icon={['fab', "youtube"]} />
            </a>
        </Button>)
    
    const Slack = () => (
        <Button type="" shape="circle">
            <a href="http://underdog-devs.slack.com/">
                <FontAwesomeIcon icon={['fab', "slack"]} />
            </a>
        </Button>)
    
    const GitHub = () => (
        <Button type="" shape="circle">
            <a href="https://github.com/Underdog-Devs">
                <FontAwesomeIcon icon={['fab', "github"]} />
            </a>
        </Button>)
    
    const Google = () => (
        <Button type="" shape="circle">
            <a href="mailto:rickw@underdogdevs.org">
                <FontAwesomeIcon icon={['fab', "google"]} />
            </a>
        </Button>)

    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer1}>
                <h5>Contact us on <strong>social media</strong></h5>
                    <ul className={styles.icons}>
                        <Twitter/>
                        <Youtube/>
                        <Slack/>
						<GitHub/>
						<Google/>
					</ul>
            </div>
            <div className={styles.footerContainer}>
                <div className={styles.footerContainer2}>
                    <h5>Mentors</h5>
                    <p>Become a mentor</p>
                    <p>See the mentees</p>
                </div>
                <div className={styles.footerContainer3}>
                    <h5>Mentees</h5>
                    <p>Become a mentee</p>
                    <p>See the mentors</p>
                </div>
                <div className={styles.footerContainer4}>
                    <h5>Organization</h5>
                    <p>About</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Get involved</p>
                </div>
            </div>
        </div>
    )
}