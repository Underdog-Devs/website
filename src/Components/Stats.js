import React, { useState } from 'react';
import styles from '../CSS/Stats.module.css';
import { Col, Row } from 'antd';
import globalStyles from '../CSS/globalStyles.module.css';
import HiddenStats from './HiddenStats';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
function Stats() {
  const [isHidden, setisHidden] = useState(false);

  return (
    <div id="statsOverlay" className={styles.stats}>
      <div className={`${styles.statsContainer} ${globalStyles.normalP}`}>
        <Row>
          <Col className={styles.statItem}>
            <h2 className={globalStyles.headerTextmed}>Recidivism</h2>
            {isHidden ? <HiddenStats /> : null}
            <p>
              According to data from the U.S. Bureau of Justice Statistics
              (BJS), 67.8% of released state prisoners were arrested for a new
              crime within three years, and 76.7% were arrested within five
              years (Durose, Cooper, & Snyder, 2014).
            </p>
            <p>
              Reducing recidivism not only protects society at large, but also
              improves the life quality of individual ex-prisoners.
            </p>
            <div className={styles.statsButtonContainer}>
              <span
                className={styles.showOrHideStats}
                onClick={() => setisHidden(!isHidden)}
              >
                {isHidden ? (
                  <p>
                    Less <MdExpandLess />
                  </p>
                ) : (
                  <p>
                    More <MdExpandMore />
                  </p>
                )}
              </span>
            </div>
          </Col>
          <Col className={styles.statItem}>
            <h2 className={globalStyles.headerTextmed}>
              Unemployment and Poverty
            </h2>
            <p>
              Employment has long been recognized as having a negative
              correlation with crime (Uggen, 1999; Uggen et al., 2005).
            </p>
            <p>
              <a
                href="https://www.ebpsociety.org/blog/education/297-employment-recidivism"
                rel="noreferrer"
                target="_blank"
              >
                employment recidivism on ebpsociety.org
              </a>
            </p>
            <p>
              Researchers also have found that employment is associated with
              reduced recidivism(Skardhamar & Telle, 2012). The strongest
              predictor for recidivism: poverty + unemployment.
            </p>
            <p>
              <a
                href="https://www.ojp.gov/ncjrs/virtual-library/abstracts/poverty-state-capital-and-recidivism-among-women-offenders"
                rel="noreferrer"
                target="_blank"
              >
                poverty state capital and recidivism among women offenders on
                ojp.gov
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Stats;
