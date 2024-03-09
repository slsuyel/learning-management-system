import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { callApi } from "../../utilities/functions";


const AdminNavbar = () => {
    const navigate = useNavigate()


    const handleLogoutClick = async () => {
        const res = await callApi("POST", '/api/logout')
        // console.log(res);
        localStorage.removeItem("token")
        navigate('/admin/signin')
        console.log('pp');
    };

    const handleProfileClick = () => {
        // navigate('/user-db/');
        console.log('pp');
    };

    // if (isLoading) {
    //     return null
    // }

    const items = [
        {
            label: "Profile",
            key: "1",
            icon: <UserOutlined />,
            onClick: handleProfileClick,
        },
        {
            label: "Log Out",
            key: "2",
            icon: <LogoutOutlined />,
            onClick: handleLogoutClick,
        },
    ];

    const menuProps = {
        items,
    };
    return (
        <div className="d-flex gap-3 align-item-center ">
            <Dropdown.Button
                menu={menuProps}
                placement="bottom"
                icon={<UserOutlined />}
            >
                Admin
            </Dropdown.Button>
        </div>
    );
};

export default AdminNavbar;
;