import React from 'react';
import globalStyles from '../CSS/globalStyles.module.css';
import styles from '../CSS/ProjectUnderdog.module.css';
import { Row, Col } from 'antd';
import underdog_hero from '../Assets/underdog_hero.jpeg';

export default function ProjectUnderdog() {
  return (
    <Row>
      <div className={`${styles.projectUD} ${globalStyles.normalP}`}>
        <div className={styles.heroAbove}>
          <Col>
            <h2 className={globalStyles.headerText}>Project Underdog</h2>
            <p>
              We provide a stipend to a select group of our mentees who were
              earnest in their studies yet hindered by their 40 hour work week.
              Our stipend allows them to focus on developing their skills and
              leverage the economic mobility that coding affords. These selected
              mentees pair program every day of the week with an industry
              professional. In addition they’re given coding assessments to
              gauge progress and surrounded with supporting UD members.
            </p>
          </Col>
        </div>
        <div className={styles.heroBelow}>
          <img
            src={underdog_hero}
            alt="Cartoon Underdog flying to the rescue"
          />
        </div>
      </div>
    </Row>
  );
}
