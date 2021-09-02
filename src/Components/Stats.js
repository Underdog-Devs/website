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
              Incarceration rates in the U.S. began increasing dramatically in
              the 1990s. The U.S. has the highest prison population of any
              country, comprising 25% of the world’s prisoners.{' '}
            </p>
            <p>
              (
              <a
                href="https://www.prisonpolicy.org/research/recidivism_and_reentry/"
                rel="noreferrer"
                target="_blank"
              >
                https://www.prisonpolicy.org/research/recidivism_and_reentry/
              </a>
              )
            </p>
            <p>
              Out of a sample of 401,288 prisoners state prisoners released in
              2005:
            </p>
            <p>
              <ul>
                <li>68% of released prisoners were arrested within 3 years.</li>
                <li>79% of released prisoners were arrested within 6 years.</li>
                <li>83% of released prisoners were arrested within 9 years.</li>
              </ul>
            </p>
            <p>
              Using this study as a basepoint, one could state that the national
              recidivism rate is 83%.
            </p>
            <p>
              (
              <a
                href="https://prisoninsight.com/recidivism-the-ultimate-guide/#tab-con-9"
                rel="noreferrer"
                target="_blank"
              >
                https://prisoninsight.com/recidivism-the-ultimate-guide/#tab-con-9
              </a>
              )
            </p>
            <p>
              According to data from the U.S. Bureau of Justice Statistics
              (BJS), 67.8% of released state prisoners were arrested for a new
              crime within three years, and 76.7% were arrested within five
              years (Durose, Cooper, & Snyder, 2014).{' '}
            </p>
            <p>
              Reducing recidivism not only protects society at large, but also
              improves the life quality of individual ex-prisoners.
            </p>
          </Col>
          <Col className={styles.statItem}>
            <h2>Unemployment and Poverty</h2>
            <p>
              Employment has long been recognized as having a negative
              correlation with crime (Uggen, 1999; Uggen et al., 2005).
            </p>
            <p>
              (
              <a
                href="https://www.ebpsociety.org/blog/education/297-employment-recidivism"
                rel="noreferrer"
                target="_blank"
              >
                https://www.ebpsociety.org/blog/education/297-employment-recidivism
              </a>
              )
            </p>
            <p>
              Researchers also have found that employment is associated with
              reduced recidivism(Skardhamar & Telle, 2012). The strongest
              predictor for recidivism: poverty + unemployment.
            </p>
            <p>
              (
              <a
                href="https://www.ojp.gov/ncjrs/virtual-library/abstracts/poverty-state-capital-and-recidivism-among-women-offenders"
                rel="noreferrer"
                target="_blank"
              >
                https://www.ojp.gov/ncjrs/virtual-library/abstracts/poverty-state-capital-and-recidivism-among-women-offenders
              </a>
              )
            </p>
          </Col>
        </Row>
        <Row>
          <Col className={styles.statItem}>
            <h2 className={styles.projecth2}>Project Underdog</h2>
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
        </Row>
      </div>
    </div>
  );
}
export default Stats;
