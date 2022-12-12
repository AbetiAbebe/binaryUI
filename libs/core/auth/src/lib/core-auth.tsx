import styles from './core-auth.module.scss';
import React from 'react';
import LoginForm from './components/loginForm/loginForm';
import { Layout, Menu, theme } from 'antd';
import HomeHeader from 'libs/core/home/src/lib/components/header/homeHeader';
import HomeFooter from 'libs/core/home/src/lib/components/footer/homeFooter';

const {  Content } = Layout;

/* eslint-disable-next-line */
export interface CoreAuthProps {}

export function CoreAuth(props: CoreAuthProps) {
  return (
    <div className={styles['container']}>

<Layout style={{ minHeight: '100vh' }}>
      {/* <AppsideBar /> */}
      <Layout className="layout">
        <HomeHeader  />

        <Content style={{ padding: '60px 50px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <LoginForm />
        </Content>
        <HomeFooter />
      </Layout>
    </Layout>

    </div>
  );
}

export default CoreAuth;
