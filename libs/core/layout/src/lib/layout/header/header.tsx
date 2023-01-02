import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { ConsoleSqlOutlined, SecurityScanOutlined } from '@ant-design/icons';

const { Header} = Layout;

export function  TopHeader () {

  const items: MenuProps['items'] = [

    {
      label: 'Logout',
      key: 'logout',
      icon: <SecurityScanOutlined />,
    },
  ];

  return (
    <>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
        />
      </Header>
      <div />
    </>

  );
};

export default TopHeader;
