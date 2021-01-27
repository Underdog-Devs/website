import React from 'react';
import { Button, Col, Row } from 'antd';
import logo from '../Assets/UDD_logo.svg';
import styles from '../CSS/NavBar.module.css';
import { MenuOutlined } from '@ant-design/icons';


const NavBar = () => {
  return (
    <Row className={styles.navContainer}
         align={'middle'}
    >
      <Col className={styles.logoContainer} span={7} offset={3} align={'start'}>
        <img src={logo} alt={'logo'} className={styles.logo}
        />
      </Col>
      <Col className={styles.linksContainer} span={10}>
        <Row
          className={styles.linksRow}
          justify={'space-around'}
          align={'bottom'}
        >
          <Col className={styles.linkItem}>
            <p>Home</p>
          </Col>
          <Col className={styles.linkItem}>
            <p className={styles.linkText}
            >Mentees</p>
          </Col>
          <Col className={styles.linkItem}>
            <p>Mentors</p>
          </Col>
        </Row>
      </Col>
      <Col className={styles.buttonContainer} span={4}>
        <Button className={styles.getInvolvedButton} type={'primary'} ghost>Get
          Involved</Button>
      </Col>
      <Col className={styles.menuContainer} span={14} align={'end'}>
        <Button className={styles.menuButton} icon={<MenuOutlined />}/>
      </Col>
    </Row>
  );
};

export default NavBar;
