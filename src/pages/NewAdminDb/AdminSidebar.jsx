import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const { Sider } = Layout;

const AdminSidebar = () => {
    const theme = "dark";

    const sidebarItems = [
        {
            key: "dashboard",
            label: <NavLink to="/dashboard">Home</NavLink>
        },

        {
            key: "Student",
            label: "Student",
            children: [
                {
                    key: "Student",
                    label: <NavLink to="/dashboard/student">Student</NavLink>
                },
                {
                    key: "Paid Student",
                    label: <NavLink to="/dashboard/paid-student">Paid Student</NavLink>
                }
            ]
        },

        {
            key: "Courses",
            label: "Courses",
            children: [
                {
                    key: "Category",
                    label: <NavLink to="/dashboard/category">Category</NavLink>
                }
                ,
                {
                    key: "courses",
                    label: <NavLink to="/dashboard/courses">courses</NavLink>
                }
                ,
                {
                    key: "Add Class",
                    label: <NavLink to="/dashboard/add-class">Add Class</NavLink>
                }
            ]
        },

        {
            key: "Teachers",
            label: <NavLink to="/dashboard/teachers">Teachers</NavLink>
        },

        {
            key: "Batches",
            label: <NavLink to="/dashboard/batches">Batches</NavLink>
        }
        ,
        {
            key: "Payment",
            label: <NavLink to="/dashboard/payment">Payment</NavLink>
        }
        ,
        {
            key: "Affiliate",
            label: <NavLink to="/dashboard/affiliate">Affiliate</NavLink>
        }
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

export default AdminSidebar;
