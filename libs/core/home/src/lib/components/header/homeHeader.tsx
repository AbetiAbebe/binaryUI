import React, { useState } from 'react';
import { Col, Image, Layout, Menu, Row } from 'antd';
import type { MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import logo_white from '../../assets/png/logo-white.png'
import { Navigate, useNavigate } from 'react-router-dom';
import { Anchor } from 'antd';


const { Header} = Layout;

const items: MenuProps['items'] = [
    {
      label: 'SQL',
      key: 'sql',
      icon: <MailOutlined />,
    },
    {
      label: 'Cyber Security',
      key: 'cyberSecurity',
      icon: <AppstoreOutlined />
    },
    {
      label: 'BI',
      key: 'bi',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Contact Us',
      key: 'contact',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Login',
      key: 'login',
      icon: <AppstoreOutlined />,
    },
];

const { Link } = Anchor;


export function HomeHeader  () {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();


    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        // console.log('l', logo_white.toString());
        switch (e.key) {
          case 'login':
            navigate('/login')
            break;

          case 'sql':
            navigate('/')
            break;

          default:
            break;
        }
      };

    return (
        <>
          <Header color='#f8ebe7'>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                    {/* <div className="logo" > */}
                        {/* <Avatar
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            icon={<AntDesignOutlined />}
                        /> */}
                        <Link href='/' title="">
                        <Image
                          preview={false}
                            width={90}
                            height={90}
                            src={logo_white}
                        />
                        </Link>
                    {/* </div> */}
                </Col>
                <Col className="gutter-row" span={12}>
                   <Menu
                    onClick={onClick}
                    theme="light"
                    color='#f8ebe7'
                    mode="horizontal"
                    defaultSelectedKeys={['Sql']}
                    items={items}
                    />
                </Col>
            </Row>
          </Header>
          <div />
        </>
      );
}


export default  HomeHeader;
