import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;

const StuSidebar = () => {
    const theme = "dark";

    const sidebarItems = [
        {
            key: "Profile",
            label: <NavLink to="/user-db">Profile</NavLink>
        },
        {
            key: "Courses",
            label: "Courses",
            children: [
                {
                    key: "All Courses",
                    label: <NavLink to="/user-db/courses">All Courses</NavLink>
                },
                {
                    key: "My Courses",
                    label: <NavLink to="/user-db/my-courses">My Courses</NavLink>
                }
            ]
        },
        {
            key: "Affiliate",
            label: <NavLink to="/user-db/affiliate">Affiliate</NavLink>
        },
        {
            key: "Teachers",
            label: <NavLink to="/user-db/teachers">Teachers</NavLink>
        },
        // {
        //     key: "Success Story",
        //     label: <NavLink to="/user-db/success-story">Success Story</NavLink>
        // },
        // {
        //     key: "Settings",
        //     label: <NavLink to="/user-db/settings">Settings</NavLink>
        // }
    ]


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
                style={{ height: '100%' }}
                theme={theme}
                mode="vertical"
                defaultSelectedKeys={["4"]}
                items={sidebarItems}
            />
        </Sider >
    );
};

export default StuSidebar;
