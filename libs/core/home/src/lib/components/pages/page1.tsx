import React from 'react';
import styles from '../../core-home.module.scss';
import { Col, Image, Row } from 'antd';
import databaseSchema from '../../assets/img/database-schema.svg';
import binarySec from '../../assets/img/binarySec.jpg';
import { UserAddOutlined, ArrowDownOutlined } from '@ant-design/icons';
import HomeBg from '../../assets/img/homePageBg.jpg';
import HomeMidBg from '../../assets/img/mid-home-background.png';

import { Typography, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Paragraph, Text, Link } = Typography;

export function Page1() {
  const navigate = useNavigate();

  return (
    <>
      <Row
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
          height: '100vh',
          marginTop: '30px',
        }}
      >
        <Col className={styles['home-head-left-section']}>
          <h1 className={styles['home-header-headline']}>
            Learn, Design and Build the future!
          </h1>
          <h3>
            We believe you can do it and we guide you every step of the way
          </h3>
          <div className={styles['home-btn-container']}>
            <button
              className={styles['register-btn']}
              onClick={() => navigate('/register')}
            >
              <UserAddOutlined /> Regsiter
            </button>
            <button
              onClick={() => {
                window.scroll({
                  top: 700,
                  behavior: 'smooth',
                });
              }}
              className={styles['learn-more-btn']}
            >
              Learn More <ArrowDownOutlined />
            </button>
          </div>
        </Col>

        <Col span={12}>
          {/* <Image src={databaseSchema} preview={false} height={400} width="80%"/> */}
          {/* <Image
          src={binarySec}
          width="60%"
          preview={false}
          style={{ marginLeft: '126px', marginTop: '100px' }}
        /> */}
        </Col>
      </Row>

      {/* // SECOND ROW */}

      <div
        className={styles['home-mid-left-section']}
        style={{
          backgroundImage: `url(${HomeMidBg})`,
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
          height: '70vh',
        }}
      >
        <div className={styles['image-content']}>
          {/* <Col span={12}> */}
          <Typography>
            <Paragraph className={styles['home-header-content']}>
              <strong style={{ fontSize: '26px', fontWeight: '900' }}>M</strong>
              ost people are very busy with their jobs, family and friends, and
              other important activities. People want to study Information
              Technology to land a good paying job, to create their own business
              or to play their own roles in the world we are living in. Most
              universities and colleges can’t provide the flexibility to study
              at your own pace or you must take a lot of courses before you
              reach your own goal. We are here to provide the required course to
              complete your job.
            </Paragraph>
          </Typography>
          {/* </Col> */}
        </div>
      </div>
    </>
  );
}

export default Page1;
