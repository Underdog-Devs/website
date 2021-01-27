import React from 'react'
import styles from '../../CSS/followUs.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button} from 'antd';
import 'antd/dist/antd.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
export default function FollowUsSocial() {

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
    <div className={styles.followUs}>
      {/* header with links */}
      <div className={styles.header}>
        <h5>Follow Us On Social Media</h5>
          <ul className="icons">
            <Twitter/>
            <Youtube/>
            <Slack/>
            <GitHub/>
            <Google/>
          </ul>
      </div>

      {/* tweetContainer */}
      <div className="tweetContainer">
        <TwitterTweetEmbed
          tweetId={'1340821358184460289'}
        />

        <TwitterTweetEmbed
          tweetId={'1317666630378397697'}
        />

        <TwitterTweetEmbed
          tweetId={'1315510499954491392'}
        />
      </div>
    </div>
    
  )
}
