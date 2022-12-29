import React, { useState } from 'react';
import styles from '../../core-home.module.scss';
import { Button, Col, Dropdown, Image, Layout, Menu, Row } from 'antd';
import type { MenuProps } from 'antd';
import { ConsoleSqlOutlined, SecurityScanOutlined, LineChartOutlined , ContactsOutlined,LoginOutlined } from '@ant-design/icons';
import logo_white from '../../assets/png/binary-cosmo-logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { Anchor } from 'antd';

const { Header } = Layout;

const items: MenuProps['items'] = [
  {
    label: 'SQL',
    key: 'sql',
    icon: <ConsoleSqlOutlined />,
  },
  {
    label: 'Cyber Security',
    key: 'cyberSecurity',
    icon: <SecurityScanOutlined />,
  },
  {
    label: 'BI',
    key: 'bi',
    icon: <LineChartOutlined />,
  },
  {
    label: 'Contact Us',
    key: 'contact',
    icon: <ContactsOutlined />,
  },

  {
    label: 'Login / Register',
    key: 'login/register',
    icon: <ContactsOutlined />,
    children : [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: 'Login',
            key: 'login',
            icon: <LoginOutlined />,
          },
          {
            label: 'Register',
            key: 'reg',
            icon: <LoginOutlined />,
          },
        ]
      }
    ]
  },


];

const items_dropDown : MenuProps['items'] = [

];

const { Link } = Anchor;

export function HomeHeader() {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    // console.log('l', logo_white.toString());
    switch (e.key) {
      case 'login':
        navigate('/login');
        break;

      case 'sql':
        navigate('/home');
        break;

        case 'reg':
          navigate('/register');
          break;

      default:
        break;
    }
  };

  return (
    <>
      <Header color="#ffffff" className={styles['header']}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            {/* <div className="logo"> */}
            {/* <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  icon={<AntDesignOutlined />}
              /> */}
            <Link href="/" title="">
              <Image
              onClick={()=> navigate("/")}
                style={{ padding: '5px', cursor: 'pointer' }}
                preview={false}
                width={55}
                height={55}
                src={logo_white}

              />
              <span className={styles['logo']}>Binary Cosmo</span>
            </Link>

            {/* </div> */}
          </Col>
          <Col className="gutter-row" span={12}>
            <Menu
              onClick={onClick}
              theme="dark"
              color="#f8ebe7"
              mode="horizontal"
              defaultSelectedKeys={['Sql']}
              items={items}
            />
             {/* <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <Button>Login / Register</Button>
            </Dropdown> */}
          </Col>
        </Row>
      </Header>
      <div />
    </>
  );
}

export default HomeHeader;
