import {  Layout, theme } from 'antd';
import TopHeader from '../header/header';
import AppFooter from '../foooter/footer';

const {  Content } = Layout;

export function  AppLayout () {
  const {  token: { colorBgContainer }, } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <AppsideBar /> */}
      <Layout className="layout">
        <TopHeader />

        <Content style={{ padding: '0 50px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-content" style={{ background: colorBgContainer }}>
            Content
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
