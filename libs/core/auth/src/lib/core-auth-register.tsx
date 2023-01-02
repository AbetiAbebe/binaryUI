import styles from './core-auth.module.scss';
import React from 'react';
import LoginForm from './components/loginForm/loginForm';
import RegsitrationForm from './components/registrationForm/registrationForm';
import { Layout, Menu, theme } from 'antd';
import HomeHeader from 'libs/core/home/src/lib/components/header/homeHeader';
import HomeFooter from 'libs/core/home/src/lib/components/footer/homeFooter';
import HomeBg from './assets/img/homePageBg.jpg';

const { Content } = Layout;

/* eslint-disable-next-line */
export interface CoreAuthProps {}

export function Regiter(props: CoreAuthProps) {
  return (
    <div className={styles['container']}>
      <Layout className={styles['login-page']}>
        {/* <AppsideBar /> */}
        <Layout>
          <HomeHeader />

          <Content
            className={styles['auth-container']}
            style={{
              backgroundImage: `url(${HomeBg})`,
            }}
          >
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
            <LoginForm />
            <RegsitrationForm />
          </Content>
          <HomeFooter />
        </Layout>
      </Layout>
    </div>
  );
}

export default Regiter;
