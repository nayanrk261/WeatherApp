import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet />  {/* This is where page content renders */}
        </div>
    );
};

export default AppLayout;