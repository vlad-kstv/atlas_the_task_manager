import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { GetProp, MenuProps } from 'antd';
import Title from 'antd/es/typography/Title';
import '../../pages/styles/Navbar.css';

type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Projects',
    children: [
      { key: "2-1", label: "Create new project" },
      { key: '2-2', label: "Your projects", type: "group", children: [{key: "1-1", label: "test projcet"}]},
    ]
  },
  {
    key: '3',
    icon: <CalendarOutlined />,
    label: 'Starred',
    children: [
      { key: '3-1', label: "starred project" }
    ]
  },
];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div style={{ padding: '16px 24px' }}>
          <Title className='navbar-atlas-title' level={2} style={{ margin: 0 }}>Atlas</Title>
        </div>
        <Menu
          style={{ borderRight: 'none' }}
          onClick={onClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='vertical'
          theme='light'
          items={items}
        />
      </div>
   </>
  )
}