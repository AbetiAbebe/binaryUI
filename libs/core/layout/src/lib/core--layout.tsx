import styles from './core--layout.module.scss';
import {  Button, Layout, Menu, MenuProps, theme } from 'antd';
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SelectOutlined,
  SecurityScanOutlined,
  TableOutlined,
  SolutionOutlined,
  ReconciliationOutlined,
  ProfileOutlined
} from '@ant-design/icons';

import { Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import AppFooter from './layout/foooter/footer';


const { Header, Sider, Content } = Layout;

export function  CoreLayout () {
  const { token: { colorBgContainer }, } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate();

  const items2: MenuProps['items'] = [
    {
      label: 'Student List',
      key: 'studList',
      icon: <SolutionOutlined />,
    },
    {
      label: 'Class Managment',
      key: 'classMgmt',
      icon: <TableOutlined />,
      children : [
        {
          label: 'Course Admin',
          key: 'courseMgmt',
          icon: <SelectOutlined />,
        },
        {
          label: 'Bundle Course',
          key: 'bundleMgmt',
          icon: <SelectOutlined />,
        },
      ]
    },
    {
      label: 'Grade Managment',
      key: 'gradeMgmt',
      icon: <ReconciliationOutlined />,
    },
    {
      label: 'Payment Collection',
      key: 'paymentMgmt',
      icon: <ProfileOutlined />,
      children : [
        {
          label: 'Invoice',
          key: 'invoice',
          icon: <SelectOutlined />,
        },
      ]
    },
  ];

  const items: MenuProps['items'] = [
    {
      label: 'Logout',
      key: 'logout',
      icon: <SecurityScanOutlined />,
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    // console.log('l', logo_white.toString());
    switch (e.key) {
      case 'logout':
        navigate('/home');
        break;
      default:
        break;
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
       <Sider style={{ paddingTop: 64 }} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={items2}
          />
        </Sider>
      <Layout className="layout">
        <Header>
          <Row>
            <Col span={18}>
            <div style={{ width: 256 }}>
              <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </div>
          </Col>
            <Col span={6}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                onClick={onClick}

              />
            </Col>
          </Row>
        </Header>

        <Layout style={{ padding: '0 54px 24px' }}>
          <Content style={{
              minHeight: 280,
              maxHeight: '100%',
              background: colorBgContainer,
            }}>
            <div className="site-layout-content" style={{ background: colorBgContainer }}>
              <Outlet />
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CoreLayout;

