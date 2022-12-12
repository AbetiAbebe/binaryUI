import React from 'react';
import { Col, Image, Row } from 'antd';
import databaseSchema  from '../../assets/img/database-schema.svg';
import binarySec  from '../../assets/img/binarySec.jpg';
import { DownloadOutlined } from '@ant-design/icons';

import { Typography } from 'antd';
import { Button, Space } from 'antd';


const { Title, Paragraph, Text, Link } = Typography;

const Page1: React.FC = () => (
  <>
  <Row style={{ paddingLeft: '30px', paddingRight: '90px' }}>
    <Col span={12}>
      <Typography>
        <Title>Learn, Design and Build the future.We believe you can do it and we guide you every step of the way</Title>
        <Paragraph>
          Most people are very busy with their jobs, family and friends, and other important activities. People want to study
          Information Technology to land a good paying job, to create their own business or to play their own roles in the world
          we are living in. Most universities and colleges can’t provide the flexibility to study at your own pace or you must take
          a lot of courses before you reach your own goal. We are here to provide the required course to complete your job.
        </Paragraph>
        <Paragraph>
          After massive project practice and summaries, Ant Design, a design language for background
          applications, is refined by Ant UED Team, which aims to{' '}
          <Text strong>
            uniform the user interface specs for internal background projects, lower the unnecessary
            cost of design differences and implementation and liberate the resources of design and
            front-end development
          </Text>
        </Paragraph>
        <Space wrap>

          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={'large'}>
            Regsiter
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
            Learn More
          </Button>
        </Space>
    </Typography>
    </Col>

    <Col span={12} >
      <Image src={databaseSchema} preview={false} height={400} width="80%"/>
      <Image src={binarySec} width="60%" preview={false} style={{ marginLeft: '126px' }}/>
    </Col>
  </Row>

{/* // SECOND ROW */}

  <Row>


  <Col span={12} >
    <Image src={databaseSchema} preview={false} width="60%"/>
  </Col>

  <Col span={12}>
  <Typography>
    <Title>Database is backend of every application. SQL is the tool to retrieve data  </Title>
    <Paragraph>
      Database is about designing, storing and retreving data. We shall give you basic data, how to design and store it.
    </Paragraph>
    <Space wrap>
    </Space>
</Typography>
</Col>
  </Row>

  </>

);

export default Page1;
