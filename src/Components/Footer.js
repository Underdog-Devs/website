import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Footer() {
    const Twitter = () => (
          <li className="icon">
            <a href="https://twitter.com/UnderdogDevs" target="_blank" class="icon brands alt fa-twitter">
                <FontAwesomeIcon icon={['fab', "twitter"]} />  
            </a>
        </li>)

    const Youtube = () => (
        <li className="icon">
            <a href="https://youtube.com/channel/UC8rwCavxrhcfZTYPnR_VdSg" target="_blank" class="icon brands alt fa-youtube">
                <FontAwesomeIcon icon={['fab', "youtube"]} />
            </a>
        </li>)
    
    const LinkedIn = () => (
        <li className="icon">
            <a href="#" class="icon brands alt fa-linkedin-in">
                <FontAwesomeIcon icon={['fab', "linkedin"]} />
            </a>
        </li>)
    
    const Slack = () => (
        <li className="icon">
            <a href="http://underdog-devs.slack.com/" target="_blank" class="icon brands alt fa-slack">
                <FontAwesomeIcon icon={['fab', "slack"]} />
            </a>
        </li>)
    
    const GitHub = () => (
        <li className="icon">
            <a href="https://github.com/Underdog-Devs" target="_blank" class="icon brands alt fa-github">
                <FontAwesomeIcon icon={['fab', "github"]} />
            </a>
        </li>)
    
    const Google = () => (
        <li className="icon">
            <a href="mailto:rickw@underdogdevs.org" target="_blank" class="icon solid alt fa-envelope">
                <FontAwesomeIcon icon={['fab', "google"]} />
            </a>
        </li>)

    return (
        <div className="footer">
            <div className='footer-container'>
                <h5>Contact us on <strong>social media</strong></h5>
                    <ul className="icons">
                        <Twitter/>
                        <Youtube/>
						<LinkedIn/>
                        <Slack/>
						<GitHub/>
						<Google/>
					</ul>
            </div>
            <div className='footer-container'>
                <h5>Mentors</h5>
                <p>Become a mentor</p>
                <p>See the mentees</p>
            </div>
            <div className='footer-container'>
                <h5>Mentees</h5>
                <p>Become a mentee</p>
                <p>See the mentors</p>
            </div>
            <div className='footer-container'>
                <h5>Organization</h5>
                <p>About</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Get involved</p>
            </div>            
        </div>
    )
}