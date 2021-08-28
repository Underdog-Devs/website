import React from 'react';
import styles from '../CSS/Stats.module.css';

function Stats() {
  return (
    <div className={styles.statsContainer}>
      <section className={styles.leftCol}>
        <h2>Recidivism</h2>
        <p>
          Almost half of people released from prison reoffend within three
          years.
        </p>
      </section>
      <section className={styles.rightCol}>
        <h2>Unemployment and Poverty</h2>
        <p>
          Two major contributing factors to recidivism are poverty and
          unemployment.
        </p>
      </section>
      <div className={styles.ourMission}>
        <h2>Commitment to the Underdog</h2>
        <p>
          We are committed to providing mentorship and community to ensure
          readiness and confidence to sieze opportunities for employment in the
          software industry.
        </p>
      </div>
    </div>
  );
}
export default Stats;
