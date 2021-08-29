import React from 'react';
import styles from '../CSS/Stats.module.css';
import { Col, Row } from 'antd';

function Stats() {
  return (
    <div id="statsOverlay" className={styles.stats}>
      <div className={styles.statsContainer}>
        <Row>
          <Col className={styles.statItem}>
            <h2>Recidivism</h2>
            <p>
              Almost half of people released from prison reoffend within three
              years.
            </p>
          </Col>
          <Col className={styles.statItem}>
            <h2>Unemployment and Poverty</h2>
            <p>
              Two major contributing factors to recidivism are poverty and
              unemployment.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.statItem}>
            <h2>Commitment to the Underdog</h2>
            <p>
              We are committed to providing mentorship and community to ensure
              readiness and confidence to sieze opportunities for employment in
              the software industry.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Stats;
