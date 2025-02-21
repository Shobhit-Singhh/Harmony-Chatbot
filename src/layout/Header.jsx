import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleNav = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full h-14 bg-slate-200 flex items-center px-6 shadow-md z-50">
                <div className="w-full flex justify-between items-center">
                    {/* Greeting */}
                    <div className="text-2xl font-bold text-green-800">
                        Hi John &#x1F44B;
                    </div>

                    {/* Navigation Tabs (visible on larger screens) */}
                    <ul className="hidden sm:flex space-x-6 text-sm font-medium">
                        <li><button onClick={() => navigate("/")} className="hover:text-green-700">Home</button></li>
                        <li><button onClick={() => navigate("/recommendation")} className="hover:text-green-700">Recommendation</button></li>
                        <li><button onClick={() => navigate("/memory")} className="hover:text-green-700">Media</button></li>
                        <li><button onClick={() => navigate("/profile")} className="hover:text-green-700">Profile</button></li>
                        <li><button onClick={() => navigate("/community")} className="hover:text-green-700">Community</button></li>
                    </ul>

                    {/* SOS Button and Hamburger Menu */}
                    <div className="flex items-center space-x-4">
                        {/* SOS Button */}
                        <button onClick={() => navigate("/sos")}>
                            <img className="h-10 w-10 object-contain" src="./assets/SOS Icon.png" alt="SOS" />
                        </button>

                        {/* Hamburger Icon (visible on small screens) */}
                        <button className="sm:hidden" onClick={toggleNav}>
                            <img className="h-8 w-8 object-contain" src="./assets/hamburger icon.png" alt="menu" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Right-Side Menu */}
            <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-40`}>
                <div className="p-6 relative">
                    {/* Close Button */}
                    <button onClick={toggleNav} className="text-2xl absolute top-4 right-4">
                        &times;
                    </button>

                    {/* Navigation Links */}
                    <ul className="space-y-6 text-lg font-medium pt-20">
                        <li><button onClick={() => navigate("/")} className="hover:text-green-700">Home</button></li>
                        <li><button onClick={() => navigate("/recommendation")} className="hover:text-green-700">Recommendation</button></li>
                        <li><button onClick={() => navigate("/media")} className="hover:text-green-700">Media</button></li>
                        <li><button onClick={() => navigate("/profile")} className="hover:text-green-700">Profile</button></li>
                        <li><button onClick={() => navigate("/community")} className="hover:text-green-700">Community</button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TopNavbar;
