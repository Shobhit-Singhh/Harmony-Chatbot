import React from "react";

const ProfileDashboard = () => {
    return (
        <div className="bg-slate-100 min-h-screen flex flex-col items-center p-6">
            {/* Profile Card */}
            <div className="bg-pink-50 p-6 rounded-2xl shadow-lg max-w-lg w-full">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-32 h-40 overflow-hidden rounded-2xl shadow-md">
                        <img src="./assets/profile/dp.avif" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-green-600">John Doe</h1>
                        <h2 className="text-xl font-semibold text-gray-600">Male, 25</h2>
                        <h3 className="text-md text-gray-500">Email: xyz@gmail.com</h3>
                    </div>
                </div>
                <div className="flex justify-between bg-gray-100 rounded-full p-2">
                    {['Profile', 'Psyche', 'Settings'].map((item) => (
                        <button key={item} className="px-4 py-2 bg-gray-300 rounded-full hover:bg-green-500 transition">
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sections */}
            {['Profile Settings', 'Psyche Section', 'Settings'].map((section) => (
                <div key={section} className="bg-white mt-8 p-6 rounded-2xl shadow-lg max-w-lg w-full">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">{section}</h2>
                    <ul className="divide-y divide-gray-200">
                        {['Edit Profile', 'Change Password', 'My Subscription', 'SOS Details', 'Linked Accounts'].map((item) => (
                            <li key={item} className="py-4 flex justify-between items-center">
                                <span className="text-gray-600 font-medium">{item}</span>
                                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-green-500 hover:text-white transition">
                                    Edit
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProfileDashboard;