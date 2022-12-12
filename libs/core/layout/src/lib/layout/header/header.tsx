import React from 'react';
import { Layout, Menu } from 'antd';

const { Header} = Layout;

export function  TopHeader () {

  return (
    <>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
      <div />
    </>

  );
};

export default TopHeader;
