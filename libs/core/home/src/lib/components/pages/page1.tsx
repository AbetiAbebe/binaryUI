import React from 'react';
import styles from '../../core-home.module.scss';
import { Col, Image, Row } from 'antd';
import databaseSchema from '../../assets/img/database-schema.svg';
import binarySec from '../../assets/img/binarySec.jpg';
import { DownloadOutlined } from '@ant-design/icons';
import HomeBg from '../../assets/img/homePageBg.jpg';

import { Typography,Button, Space } from 'antd';

const { Paragraph, Text, Link } = Typography;

const Page1: React.FC = () => (
  <>
    <Row
      style={{
        backgroundImage: `url(${HomeBg})`,
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <Col className={styles['home-head-left-section']}>
        <h1 className={styles['home-header-headline']}>
          Learn, Design and Build the future. We believe you can do it and we
          guide you every step of the way
        </h1>
        <Typography>
          <Paragraph className={styles['home-header-content']}>
            Most people are very busy with their jobs, family and friends, and
            other important activities. People want to study Information
            Technology to land a good paying job, to create their own business
            or to play their own roles in the world we are living in. Most
            universities and colleges can’t provide the flexibility to study at
            your own pace or you must take a lot of courses before you reach
            your own goal. We are here to provide the required course to
            complete your job.
          </Paragraph>
          <Paragraph className={styles['home-header-content']}>
            After massive project practice and summaries, Ant Design, a design
            language for background applications, is refined by Ant UED Team,
            which aims to
            <Text
              strong
              className={styles['home-header-content']}
              style={{ marginLeft: '2px' }}
            >
              uniform the user interface specs for internal background projects,
              lower the unnecessary cost of design differences and
              implementation and liberate the resources of design and front-end
              development.
            </Text>
          </Paragraph>
          <Space wrap>
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size={'large'}
            >
              Regsiter
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
              Learn More
            </Button>
          </Space>
        </Typography>
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
     
    >
      <div className={styles['image-content']}>
      {/* <Col span={12}> */}
        <Image src={databaseSchema} preview={true} width="65%" />
      {/* </Col> */}
</div>
<div className={styles['text-content']}>

      {/* <Col span={12}> */}
        <Typography>
          <h1 className={styles['text-content-title']}>
            Database is backend of every application. SQL is the tool to
            retrieve data
          </h1>
          <Paragraph>
            Database is about designing, storing and retreving data. We shall
            give you basic data, how to design and store it.
          </Paragraph>
          <Space wrap></Space>
        </Typography>
      {/* </Col> */}
      </div>
    </div>
  </>
);

export default Page1;
