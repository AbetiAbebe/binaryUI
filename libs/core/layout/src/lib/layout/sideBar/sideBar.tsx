import React, { useState } from 'react'
import { MenuProps, theme } from 'antd';
import {  Layout, Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const {Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

export function AppsideBar ()  {
    const [collapsed, setCollapsed] = useState(false);

    const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
      (icon, index) => {
        const key = String(index + 1);

        return {
          key: `sub${key}`,
          icon: React.createElement(icon),
          label: `subnav ${key}`,

          children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
              key: subKey,
              label: `option${subKey}`,
            };
          }),
        };
      },
    );

    const {
      token: { colorBgContainer },
    } = theme.useToken();

  return (
    <>

    <div />
    </>
  )
}


export default AppsideBar;
