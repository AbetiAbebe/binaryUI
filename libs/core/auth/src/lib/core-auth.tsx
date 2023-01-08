import styles from './core-auth.module.scss';
import React from 'react';
import { Layout } from 'antd';
import { HomeHeader, HomeFooter} from '@binarycosmo/core/home';
import HomeBg from './assets/img/login-and-signup-bg.jpg';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

/* eslint-disable-next-line */
export interface CoreAuthProps {}

export function CoreAuth(props: any) {
  console.log('Props ' , props);
  return (
    <div className={styles['container']}>
      <Layout className={styles['login-page']}>
        <Layout>
          <HomeHeader />
          <Content
            className={styles['auth-container']}
            style={{
              backgroundImage: `url(${HomeBg})`,
            }}
          >
            <Outlet />
          </Content>
          <HomeFooter />
        </Layout>
      </Layout>
    </div>
  );
}

export default CoreAuth;
