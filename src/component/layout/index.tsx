import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.module.less';

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
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
});

const AppLayout = () => {
  const [mainMenuList, setMainMenuList] = useState<any[]>([]);
  const getMenu = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setMainMenuList(items1);
        resolve([]);
      }, 1000);
    });
  };

  useEffect(() => {
    (async () => {
      await getMenu();
    })();
  }, []);

  return (
    <Layout>
      <Header className={styles.pageHeader}>
        <div className={styles.logo}>logo</div>
        <Menu
          className={styles.mainMenu}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={mainMenuList}
        />
        <div className={styles.userInfo}>
          admin <span>退出</span>
        </div>
      </Header>
      <Content>
        <Layout className={styles.pageContent}>
          <Sider width={200}>
            <Menu
              className={styles.subMenu}
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              items={items2}
            />
          </Sider>
          <Content className={styles.mainContent}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AppLayout;
