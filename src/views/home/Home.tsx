import MainMenu from '@/views/components/Menu/MainMenu';
import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const breadcrumbItems = [{ title: 'User' }, { title: 'Bill' }];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <MainMenu />
      </Sider>
      <Layout>
        <Header className="flex h-12 items-center bg-white px-8">
          <Breadcrumb items={breadcrumbItems} />
        </Header>
        <Content className="mx-4 mt-4 flex-1 rounded-lg bg-white">
          <Outlet />
        </Content>
        <Footer className="text-center">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
