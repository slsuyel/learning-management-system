import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;

const StuSidebar = () => {
    const theme = "dark";
    const items = [
        { key: 'profile', title: 'Profile', to: '/user-db' },
        {
            key: 'submenu',
            title: 'Courses',
            items: [
                { key: 'courses', title: 'All Courses', to: '/user-db/courses' },
                { key: 'my-courses', title: 'My Courses', to: '/user-db/my-courses' }
            ]
        },
        { key: 'affiliate', title: 'Affiliate', to: '/user-db/affiliate' },
        { key: 'teachers', title: 'Teachers', to: '/user-db/teachers' },
        { key: 'successStory', title: 'Success Story', to: '/user-db/success-story' },
        { key: 'settings', title: 'Settings', to: '/user-db/settings' }
    ];

    return (
        <Sider
            theme={theme}
            breakpoint="lg"
            collapsedWidth="0"
            style={{
                height: "100vh",
                position: "sticky",
                top: "0",
                left: "0",
            }}
        >
            <div
                style={{
                    height: "4rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src='https://school-suyel.netlify.app/assets/dblogo-ixqnXm-n.png' alt="" width={150} />
            </div>
            <Menu
                theme={theme}
                mode="inline"
                defaultSelectedKeys={['profile']}
            >
                {items.map(item => (
                    item.items ? (
                        <SubMenu key={item.key} title={item.title}>
                            {item.items.map(subItem => (
                                <Menu.Item key={subItem.key}>
                                    <NavLink to={subItem.to}>{subItem.title}</NavLink>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ) : (
                        <Menu.Item key={item.key}>
                            <NavLink to={item.to}>{item.title}</NavLink>
                        </Menu.Item>
                    )
                ))}
            </Menu>
        </Sider>
    );
};

export default StuSidebar;
