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
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="hosted_button_id" value="2R2AP79YGLEXJ" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
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
