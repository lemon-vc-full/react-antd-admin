import { DesktopOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/welcome', label: 'Welcome', icon: <DesktopOutlined /> },
  {
    key: '/auth',
    label: '权限管理',
    icon: <UserOutlined />,
    children: [
      { key: '/auth/user', label: '用户管理' },
      { key: '/auth/role', label: '角色管理' },
      { key: '/auth/menu', label: '菜单管理' },
    ],
  },
];

const rootSubmenuKeys = ['/auth'];

function MainMenu() {
  const navigateTo = useNavigate();
  const { pathname } = useLocation();

  const setFirstOpenKeys = (pathname: string): string[] => {
    const result: string[] = [];
    const pathArr = pathname.split('/').filter(Boolean);
    pathArr.reduce((prev, curr) => {
      prev += `/${curr}`;
      result.push(prev);
      return prev;
    }, '');
    return result;
  };
  let firstOpenKeys = setFirstOpenKeys(pathname);

  const [openKeys, setOpenKeys] = useState(firstOpenKeys);

  const menuClick = ({ key }: { key: string }) => {
    navigateTo(key);
  };

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={firstOpenKeys}
      openKeys={openKeys}
      mode="inline"
      items={items}
      onOpenChange={onOpenChange}
      onClick={menuClick}
    />
  );
}

export default MainMenu;
