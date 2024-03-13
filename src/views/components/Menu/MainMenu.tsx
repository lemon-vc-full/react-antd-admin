import { DesktopOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/welcome', label: 'Welcome', icon: <DesktopOutlined /> },
  {
    key: '/auth',
    label: '权限管理',
    icon: <UserOutlined />,
    children: [
      { key: '/user', label: '用户管理' },
      { key: '/role', label: '角色管理' },
      { key: '/menu', label: '菜单管理' },
    ],
  },
];

const rootSubmenuKeys = ['/auth'];

function MainMenu() {
  const [openKeys, setOpenKeys] = useState(['']);

  const navigateTo = useNavigate();

  const menuClick = (e: { keyPath: Array<string> }) => {
    const path = e.keyPath.reduce((prev, current) => current + prev, '');
    navigateTo(path);
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
      openKeys={openKeys}
      mode="inline"
      items={items}
      onOpenChange={onOpenChange}
      onClick={menuClick}
    />
  );
}

export default MainMenu;
