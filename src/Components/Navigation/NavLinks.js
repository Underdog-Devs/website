import React from 'react';
import { Button } from 'antd';
import styles from './navBar.module.css';

export const NavLinks = ({ isMobile, setOpen }) => {
  const scrollTo = el => {
    let target = document.getElementById(el);
    target.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
      inline: 'center',
    });
  };
  return (
    <ul className="w3-animate-right">
      <li>
        <a
          href="#our-story"
          className={styles.navLink}
          onClick={() => scrollTo('our-story')}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#mentee"
          className={styles.navLink}
          onClick={() => scrollTo('mentee')}
        >
          Mentees
        </a>
      </li>
      <li>
        <a
          href="#mentor"
          className={styles.navLink}
          onClick={() => scrollTo('mentor')}
        >
          Mentors
        </a>
      </li>
      <li>
        <a
          href="https://www.paypal.com/donate?hosted_button_id=2R2AP79YGLEXJ"
          className={styles.navLink}
          target="_blank"
          rel="noreferrer"
        >
          Donate
        </a>
      </li>
      <li>
        <Button
          className={styles.getInvolvedButton}
          onClick={() => scrollTo('get-involved')}
          type={'primary'}
          ghost
        >
          Get Involved
        </Button>
      </li>
    </ul>
  );
};
