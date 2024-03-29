import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import StuNavbar from "./StuNavbar";
import StuSidebar from "./StuSidebar";
import ScrollToTop from "../../components/ScrollToTop";

const StudentDashboardLayout = () => {
    const theme = false

    return (
        <ScrollToTop><Layout style={{ height: "100%", width: '100%' }}>
            <StuSidebar />
            <Layout>
                <Header
                    style={{
                        display: "flex",
                        alignItems: "center",
                        position: "fixed",
                        width: "100%",
                        zIndex: 1000,
                        backgroundColor: !theme
                            ? scrollY > 0
                                ? "rgba(0, 0, 0, 0.8)"
                                : "#001529"
                            : scrollY > 0
                                ? "#fffcfc8a"
                                : "white",

                        backdropFilter: scrollY > 0 ? "blur(4px)" : "none",
                        transition: "background-color 0.3s, backdrop-filter 0.3s",
                    }}
                >
                    <StuNavbar />
                </Header>
                <Content
                    style={{
                        margin: "24px 0px 0",
                        background: "rgb(198,231,226)"
                    }}
                    className={`${!theme ? "dark " : ""}`}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            marginTop: "55px",
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer >
                    <footer>
                        <div className="float-right d-none d-sm-inline">Version 1.0.0 </div>
                        <strong>
                            Copyright © 2023-2024
                            <a href="https://softwebsys.com/">Softweb System Solutions</a>
                        </strong>
                        All rights reserved.
                    </footer>
                </Footer>
            </Layout>
        </Layout></ScrollToTop>
    );
};

export default StudentDashboardLayout;