import React, { useState } from "react";

const BottomNavChat = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            {/* Bottom Navigation Bar */}
            <nav className="sm:hidden fixed bottom-0 left-0 w-full h-12 bg-slate-200 flex items-center px-6 shadow-md z-50">
                <div className="w-full flex justify-between items-center">
                    {/* Left Side Icons */}
                    <div className="m-1 flex items-center justify-between w-28">
                        <img
                            className="w-6 cursor-pointer"
                            src="./assets/Nav/Nav =Home.png"
                            alt="home"
                            onClick={() => (window.location.href = "index.html")}
                        />
                        <img
                            className="w-6 cursor-pointer"
                            src="./assets/Nav/Nav =Recommendation.png"
                            alt="recommendation"
                            onClick={() => (window.location.href = "recommendation.html")}
                        />
                    </div>

                    {/* AI Chat Icon in the Middle */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg z-0 -mt-12 cursor-pointer"
                        onClick={() => setIsChatOpen(!isChatOpen)}
                    >
                        <img className="w-6" src="./assets/Nav/Nav =Sage Bot.png" alt="AI chat" />
                    </div>

                    {/* Right Side Icons */}
                    <div className="m-1 flex items-center justify-between w-28">
                        <img
                            className="w-6 cursor-pointer"
                            src="./assets/Nav/Nav =Media.png"
                            alt="media"
                            onClick={() => (window.location.href = "media.html")}
                        />
                        <img
                            className="w-6 cursor-pointer"
                            src="./assets/Nav/Nav =Profile.png"
                            alt="profile"
                            onClick={() => (window.location.href = "profile.html")}
                        />
                    </div>
                </div>
            </nav>

            {/* Chatbox (Hidden by default) */}
            <div
                className={`fixed left-1/2 transform -translate-x-1/2 w-96 bg-green-500 rounded-t-xl transition-transform duration-300 ease-in-out z-30 ${isChatOpen ? "bottom-0" : "-bottom-2 translate-y-full"
                    }`}
            >
                <div className="bg-green-500 m-6 flex flex-col items-center justify-center rounded-xl">
                    {/* Chat Interface */}
                    <div className="w-[360px] bg-white rounded-lg shadow-lg flex flex-col mb-16 mx-8">
                        {/* Chat Display Area */}
                        <div className="p-4 h-[400px] overflow-y-scroll border-b space-y-4">
                            {/* Simulated Chat Log */}
                            <div className="text-gray-700">
                                <p><strong>Bot:</strong> Hi! How can I assist you today?</p>
                            </div>
                            <div className="text-gray-900">
                                <p><strong>You:</strong> I need help understanding my account statement.</p>
                            </div>
                            <div className="text-gray-700">
                                <p><strong>Bot:</strong> Sure, could you provide more details?</p>
                            </div>
                            <div className="text-gray-900">
                                <p><strong>You:</strong> I noticed a charge I don’t recognize.</p>
                            </div>
                            <div className="text-gray-700">
                                <p><strong>Bot:</strong> I understand. Can you share the date and amount of the charge?</p>
                            </div>
                            <div className="text-gray-900">
                                <p><strong>You:</strong> It's from November 10th for $120.</p>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="flex items-center p-4">
                            <input
                                type="text"
                                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Type your message here..."
                            />
                            <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BottomNavChat;
