import React from 'react';
import { Button, Col, Row } from 'antd';
import logo from '../Assets/UDD_logo.svg';
import '../CSS/NavBar.css';
import { MenuOutlined } from '@ant-design/icons';


const NavBar = () => {
  return (
    <Row className={'nav-container'}
         align={'middle'}
    >
      <Col className={'logo-container'} span={7} offset={3} align={'start'}>
        <img src={logo} alt={'logo'} className={'logo'}
        />
      </Col>
      <Col className={'links-container'} span={10}>
        <Row
          className={'links-row'}
          justify={'space-around'}
          align={'bottom'}
        >
          <Col className={'link-item'}>
            <p>Home</p>
          </Col>
          <Col className={'link-item'}>
            <p className={'link-text'}
            >Mentees</p>
          </Col>
          <Col className={'link-item'}>
            <p>Mentors</p>
          </Col>
        </Row>
      </Col>
      <Col className={'button-container'} span={4}>
        <Button className={'get-involved-button'} type={'primary'} ghost>Get
          Involved</Button>
      </Col>
      <Col className={'menu-container'} span={14} align={'end'}>
        <Button className={'menu-button'} icon={<MenuOutlined />}/>
      </Col>
    </Row>
  );
};

export default NavBar;
