import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DbContainer from "../components/ui/DbContainer";

export default function WithNavbar() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <DbContainer>  <Outlet /></DbContainer>
      <Footer />
    </div>
  );
}
