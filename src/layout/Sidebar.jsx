import React, { useState } from "react";

const RightSideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Menu Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            >
                ☰
            </button>

            {/* Right Side Menu */}
            <div
                className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 relative">
                    {/* Close Button */}
                    <button onClick={() => setIsOpen(false)} className="text-2xl absolute top-4 right-4">
                        &times;
                    </button>

                    {/* Navigation Links */}
                    <ul className="space-y-6 text-lg font-medium pt-20">
                        <li>
                            <a href="index.html" className="hover:text-green-700">Home</a>
                        </li>
                        <li>
                            <a href="recommendation.html" className="hover:text-green-700">Recommendation</a>
                        </li>
                        <li>
                            <a href="media.html" className="hover:text-green-700">Media</a>
                        </li>
                        <li>
                            <a href="profile.html" className="hover:text-green-700">Profile</a>
                        </li>
                        <li>
                            <a href="community.html" className="hover:text-green-700">Community</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RightSideMenu;
