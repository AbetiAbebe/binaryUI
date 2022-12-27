import { Layout, Menu, theme } from 'antd';
import HomeFooter from '../footer/homeFooter';
import HomeHeader from '../header/homeHeader';
import Page1 from '../pages/page1';

const { Content } = Layout;

export function HomeLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <AppsideBar /> */}
      <Layout className="layout">
        <HomeHeader />

        <Content style={{ padding: '0px 0px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-content"
            style={{ background: '#ffffff' }}
          >
            <Page1 />
          </div>
        </Content>
        <HomeFooter />
      </Layout>
    </Layout>
  );
}

export default HomeLayout;
