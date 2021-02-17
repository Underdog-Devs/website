import React from 'react';
import styles from '../../CSS/MetricsComponent.module.css';
import { Col, Row } from 'antd';
import { CoffeeOutlined, SlackOutlined, UserOutlined } from '@ant-design/icons';

const metricDummyData = [
  {
    title: 'Mentors',
    icon: (
      <UserOutlined
        style={{
          borderRadius: '50%',
          padding: '7px',
          color: '#1565D8',
          backgroundColor: '#EECFBE',
        }}
      />
    ),
    metric: 32,
  },
  {
    title: 'Mentees',
    icon: (
      <UserOutlined
        style={{
          borderRadius: '50%',
          padding: '7px',
          color: '#1565D8',
          backgroundColor: '#EECFBE',
        }}
      />
    ),
    metric: 32,
  },
  {
    title: 'Slack Channels',
    icon: (
      <SlackOutlined
        style={{
          borderRadius: '50%',
          padding: '7px',
          color: '#1565D8',
          backgroundColor: '#EECFBE',
        }}
      />
    ),
    metric: 32,
  },
  {
    title: 'Monthly Meetups',
    icon: (
      <CoffeeOutlined
        style={{
          borderRadius: '50%',
          padding: '7px',
          color: '#1565D8',
          backgroundColor: '#EECFBE',
        }}
      />
    ),
    metric: 32,
  },
];

const MetricsComponent = () => {
  return (
    <Row className={styles.metricsMainContainer} gutter={24} align={'middle'}>
      {metricDummyData.map((data, idx) => {
        return (
          <Col
            key={idx}
            className={styles.metricItemContainer}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            <Row className={styles.metricIconContainer} justify={'center'}>
              <span className={styles.metricIcon}>{data.icon}</span>
            </Row>
            <Row className={styles.metric} justify={'center'}>
              {data.metric}
            </Row>
            <Row className={styles.metricTitle} justify={'center'}>
              {data.title}
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};

export default MetricsComponent;
