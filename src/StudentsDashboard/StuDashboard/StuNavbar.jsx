import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useStudent from "../../hooks/useStudent";
import Loader from "../../utilities/Loader";

const StuNavbar = () => {
    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)

    const navigate = useNavigate();
    const { studentLogOut } = useContext(AuthContext);

    const handleLogoutClick = () => {
        studentLogOut();
    };

    const handleProfileClick = () => {
        navigate('/user-db/');
    };

    if (isLoading) {
        return null
    }

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
                {studentData.founder_name}
            </Dropdown.Button>
        </div>
    );
};

export default StuNavbar;
