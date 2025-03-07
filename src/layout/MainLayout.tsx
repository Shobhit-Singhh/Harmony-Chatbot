import App from "../components/diagnosis/chatbase";
import React from "react";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <App />
        </div>
    );
};

export default MainLayout;