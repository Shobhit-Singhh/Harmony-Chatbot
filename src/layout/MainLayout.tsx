import React from "react";
import { Outlet } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import BottomNavChat from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import TopNavbar from "../layout/Header";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Outlet /> {/* This will render the current page dynamically */}
            <Chatbot /> {/* Chatbot stays persistent on all pages */}
            <TopNavbar /> {/* TopNavbar stays persistent on all pages */}
            <Sidebar /> {/* Sidebar stays persistent on all pages */}
            <BottomNavChat /> {/* BottomNavChat stays persistent on all pages */}
        </div>
    );
};

export default MainLayout;
