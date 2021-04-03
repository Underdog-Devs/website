import React from 'react';
import schedule from '../Assets/springschedule.jpg';
import styles from '../CSS/SpringIntoSwift.module.css';

const SpringIntoSwift = () => {
  const eventLink =
    'https://www.eventbrite.com/e/spring-into-swift-tickets-147704641559';
  const eventSchedule =
    'https://docs.google.com/spreadsheets/d/1x2dRie8rXqn46fBW6eMOwsLKpgzbtgFFlEFK2XbBT90/edit#gid=1182407274';

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>Join Us for Spring Into Swift</h2>
          <p className={styles.tagline}>A full month of iOS talks!</p>
        </div>

        <div className={styles.content}>
          <br />
          <p className={styles.description}>
            Delivered by amazing people in our community including:
          </p>
          <ul>
            <li>Paul Hudson</li>
            <li>Sean Allen</li>
            <li>Kim Arnett</li>
            <li>and many more!</li>
          </ul>
          <br />
          <div className={styles.linkContainer}>
            <a className={styles.links} href={eventSchedule}>
              View Full Schedule
            </a>
            <a className={styles.links} href={eventLink}>
              Register Here
            </a>
          </div>
        </div>

        <img
          className={styles.image}
          src={schedule}
          alt="Schedule Spreadsheet"
        />
      </main>
    </div>
  );
};

export default SpringIntoSwift;
