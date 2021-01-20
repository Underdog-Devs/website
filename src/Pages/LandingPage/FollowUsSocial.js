import React from 'react'
import followUs from '../../CSS/followUs.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
export default function FollowUsSocial() {
  return (
    <div className="tweetContainer">
      <TwitterTweetEmbed
        tweetId={'1340821358184460289'}
      />

      <TwitterTweetEmbed
        tweetId={'1340821358184460289'}
      />

      <TwitterTweetEmbed
        tweetId={'1340821358184460289'}
      />
    </div>
  )
}
