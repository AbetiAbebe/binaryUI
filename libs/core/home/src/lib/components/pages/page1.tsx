import React from 'react';
import styles from '../../core-home.module.scss';
import { Col, Image, Row } from 'antd';
import databaseSchema from '../../assets/img/database-schema.svg';
import binarySec from '../../assets/img/binarySec.jpg';
import { UserAddOutlined, ArrowDownOutlined } from '@ant-design/icons';
import HomeBg from '../../assets/img/homePageBg.jpg';
import HomeMidBg from '../../assets/img/mid-home-background.png';
import HomeLeftBg from '../../assets/img/home-left-bg.png';
import homeMidBg from '../../assets/img/home-mid-section-bg.png';

import { Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import Ai from '../../assets/img/AI.png';
import CyberS from '../../assets/img/cyberSecurity.png';
import MsSql from '../../assets/img/MsSql.png';

const { Paragraph } = Typography;

export function Page1() {
  const navigate = useNavigate();

  return (
    <>
      <Row className={styles['home-head-container']}>
        <Col className={styles['home-head-left-section']}>
          <h1 className={styles['home-header-headline']}>
            Learn, Design and Build the future!
          </h1>
          <p>We believe you can do it and we guide you every step of the way</p>
          <div className={styles['home-btn-container']}>
            <button
              className={styles['register-btn']}
              onClick={() => navigate('/register')}
            >
              <UserAddOutlined /> Get started
            </button>
            <button
              onClick={() => {
                window.scroll({
                  top: 780,
                  behavior: 'smooth',
                });
              }}
              className={styles['learn-more-btn']}
            >
              Learn More <ArrowDownOutlined />
            </button>
          </div>
        </Col>

        <Col className={styles['home-head-right-section']}>
          <img src={HomeLeftBg} />
        </Col>
      </Row>

      {/* // SECOND ROW */}
      <div className={styles['home-mid-section']}>
        <h2 className={styles['mid-section-title']}> 
        What can we offer you?
        </h2>
        <div className={styles['home-mid-content']}>
          <div className={styles['image-content']}>
            <img src={homeMidBg} />
          </div>
          <Typography className={styles['text-content']}>
            <Paragraph className={styles['home-header-content']}>
              <strong style={{ fontSize: '26px', fontWeight: '900' }}>M</strong>
              ost people are very busy with their jobs, family and friends, and
              other important activities. People want to study Information
              Technology to land a good paying job, to create their own business
              or to play their own roles in the world we are living in.
            </Paragraph>
            <Paragraph className={styles['home-header-content']}>
              Most universities and colleges can’t provide the flexibility to
              study at your own pace or you must take a lot of courses before
              you reach your own goal. We are here to provide the required
              course to complete your job.
            </Paragraph>
          </Typography>
        </div>
      </div>

      <div className={styles['our-popular-courses']}>
        <div className={styles['our-popular-courses-head']}>
          <h2 className={styles['our-popular-courses-title']}>
            Our popular courses
          </h2>
          <p className={styles['our-popular-courses-description']}>
            Get the most out of our popular courses
          </p>
        </div>
        <SimpleGrid
          spacing={20}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <Card>
            <CardHeader>
              <img src={Ai} />
              <Heading size="md"> Artificial Intelligence (AI) </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View Course</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img src={CyberS} />
              <Heading size="md"> Cyber security </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View Course</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <img src={MsSql} />
              <Heading size="md"> Ms SQL </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View Course</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </div>
    </>
  );
}

export default Page1;
