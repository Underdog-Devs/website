import styles from '../CSS/Story.module.css';
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillFacebook,
  AiFillGithub,
} from 'react-icons/ai';

const Story = () => {
  return (
    <div className={styles.storyContainer} id="our-story">
      <h1 className={styles.storyH1}>
        We are a community of software engineers supporting aspiring developers
        who come from disadvantaged backgrounds or who are formerly
        incarcerated.
      </h1>

      <div className={styles.linkscontainer}>
        <a
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UC8rwCavxrhcfZTYPnR_VdSg"
        >
          <AiFillYoutube size="35px" color="#fff" />
        </a>
        <a
          className={styles.socialLink}
          href="https://twitter.com/UnderdogDevs"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterCircle size="35px" color="#fff" />
        </a>
        <a
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/underdog-devs-6b9482205/"
        >
          <AiFillLinkedin size="35px" color="#fff" />
        </a>
        <a
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/Underdog-Devs-104482305007944"
        >
          <AiFillFacebook size="35px" color="#fff" />
        </a>
        <a
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/underdog_devs/"
        >
          <AiFillInstagram size="35px" color="#fff" />
        </a>
        <a
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Underdog-Devs"
        >
          <AiFillGithub size="35px" color="#fff" />
        </a>
        <a
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
          href="mailto: underdogdevsteam@gmail.com"
        >
          <AiFillMail size="35px" color="#fff" />
        </a>
      </div>
      <p className={styles.storyp}>Founded September 2020</p>
      <p className={styles.storyp1}>We currently depend 100% on volunteers</p>
    </div>
  );
};
export default Story;
