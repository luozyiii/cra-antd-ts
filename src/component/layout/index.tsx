import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { config as RouteConfig } from '@/route';
import { icons } from './config';

import styles from './index.module.less';

const { Header, Content, Sider } = Layout;

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
  const [mainItems, setMainItems] = useState<any[]>([]);
  const [subItems, setSubItems] = useState<any[]>([]);

  // 转换成 antd menu 结构
  const getAntdMenu = (menuList: any, len: number = 99) => {
    let count = 0;
    function loop(arr: any) {
      count++;
      if (arr && arr.length > 0) {
        const newArr = arr.map((item: any) => {
          let { index, title, path, children, icon, ...other } = item;
          if (index) {
            return false;
          }
          const menuItem = {
            ...other,
            label: title,
            key: path,
            children: children && count < len ? loop(children) : undefined,
          };
          if (icon && typeof icon === 'string') {
            menuItem.icon = React.createElement(icons[icon]);
          } else if (icon === '' || icon === undefined) {
            menuItem.icon = undefined;
          } else {
            menuItem.icon = icon;
          }
          return menuItem;
        });
        return newArr.filter(Boolean);
      } else {
        return [];
      }
    }
    return loop(menuList);
  };

  const getMenu = () => {
    return new Promise((resolve, reject) => {
      // 顶部菜单
      const menu = getAntdMenu(RouteConfig[0].children, 1);
      // 侧边菜单
      const subMenu = getAntdMenu(RouteConfig[0].children[2].children, 2);
      setTimeout(() => {
        setMainItems(menu);
        setSubItems(subMenu);
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
          items={mainItems}
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
              items={subItems}
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
