import React from 'react';
import styles from '../CSS/OurStory.module.css';
import coworkers from '../Assets/co_workers.png';
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillFacebook,
  AiFillGithub,
} from 'react-icons/ai';

export default function OurStory() {
  return (
    <div className={styles.ourStory} id="our-story">
      {/* hero above */}
      <div className={styles.ourStoryAbove}>
        <h3 className={styles.ourStoryHeader}>Our Story</h3>
        <p>
          We are a group of software developers supporting the formerly
          incarcerated in their transition into the software industry.
        </p>
        <div className={styles.linkscontainer}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UC8rwCavxrhcfZTYPnR_VdSg"
          >
            <AiFillYoutube size="35px" color="black" />
          </a>
          <a
            href="https://twitter.com/UnderdogDevs"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle size="35px" color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/underdog-devs-6b9482205/"
          >
            <AiFillLinkedin size="35px" color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Underdog-Devs-104482305007944"
          >
            <AiFillFacebook size="35px" color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/underdog_devs/"
          >
            <AiFillInstagram size="35px" color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Underdog-Devs"
          >
            <AiFillGithub size="35px" color="black" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto: underdogdevsteam@gmail.com"
          >
            <AiFillMail size="35px" color="black" />
          </a>
        </div>
      </div>

      {/* hero image */}
      <div className={styles.ourStoryHero}>
        <img
          className={styles.ourStoryHeroImage}
          alt="example"
          src={coworkers}
        />
      </div>
    </div>
  );
}
