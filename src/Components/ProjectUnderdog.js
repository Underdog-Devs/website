import React from 'react';
import globalStyles from '../CSS/globalStyles.module.css';
import styles from '../CSS/ProjectUnderdog.module.css';
import { Col, Row } from 'antd';

export default function ProjectUnderdog() {
  return (
    <Row>
      <Col className={`${styles.projectUD} ${globalStyles.normalP}`}>
        <h2 className={globalStyles.headerText}>Project Underdog</h2>
        <p>
          We provide a stipend to a select group of our mentees who were earnest
          in their studies yet hindered by their 40 hour work week. Our stipend
          allows them to focus on developing their skills and leverage the
          economic mobility that coding affords. These selected mentees pair
          program every day of the week with an industry professional. In
          addition they’re given coding assessments to gauge progress and
          surrounded with supporting UD members.
        </p>
      </Col>
    </Row>
  );
}
