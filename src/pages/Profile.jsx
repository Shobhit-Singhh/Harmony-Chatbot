import React, { useState } from "react";

const ProfileDashboard = () => {
    const [activeTab, setActiveTab] = useState("Profile");
    const tabs = ["Profile", "Psyche", "Settings"];
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-accent-blue-light pt-16">
            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                {/* Profile Card */}
                <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 mb-6 md:mb-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6">
                        <div className="w-24 h-24 md:w-32 md:h-40 overflow-hidden rounded-full md:rounded-2xl shadow-md">
                            <img src="../../public/assets/profile/dp.avif" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold text-primary">John Doe</h1>
                            <h2 className="text-lg md:text-xl font-semibold text-neutral-600">Male, 25</h2>
                            <h3 className="text-sm md:text-md text-neutral-500">Email: xyz@gmail.com</h3>
                        </div>
                    </div>
                    <div className="flex justify-between bg-neutral-100 rounded-full p-2 gap-4">
                        {tabs.map((tab) => (
                            <button 
                                key={tab} 
                                className={`flex-1 px-4 py-2 rounded-full transition-colors ${
                                    activeTab === tab 
                                        ? "bg-primary text-white" 
                                        : "bg-neutral-200 hover:bg-primary hover:text-white"
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Based on Active Tab */}
                {activeTab === "Profile" && (
                    <>
                        {/* Profile Settings */}
                        <SectionCard 
                            title="Profile Settings" 
                            icon="profile" 
                            items={[
                                'Edit Profile', 
                                'Change Password', 
                                'My Subscription', 
                                'SOS Details', 
                                'Linked Accounts'
                            ]} 
                        />
                        
                        {/* Connected Services Section */}
                        <div className="my-6 md:my-8 bg-white rounded-lg shadow-xl">
                            <div className="p-4 md:p-8">
                                <div className="flex items-center justify-between mb-4 md:mb-8">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center mr-4">
                                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-dark">Connected Services</h3>
                                    </div>
                                    <button className="px-4 py-2 bg-neutral-100 text-neutral-600 rounded-lg hover:bg-primary hover:text-white transition-colors">
                                        Add Service
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        { name: "Google Account", status: "Connected", icon: "G" },
                                        { name: "Health App", status: "Connected", icon: "H" },
                                        { name: "Calendar", status: "Not Connected", icon: "C" }
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-accent-blue-light rounded-lg flex items-center justify-center mr-4">
                                                    <span className="text-primary font-bold">{service.icon}</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm md:text-base font-medium text-dark">{service.name}</p>
                                                    <p className="text-xs md:text-sm text-neutral-500">{service.status}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="px-3 py-1 md:px-4 md:py-2 bg-accent-blue-light text-primary rounded-lg hover:bg-accent-blue-light/80 transition-colors text-sm">
                                                    {service.status === "Connected" ? "Disconnect" : "Connect"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === "Psyche" && (
                    <SectionCard 
                        title="Psyche Section" 
                        icon="psyche" 
                        items={[
                            'Mental Health Assessment', 
                            'Progress Tracking', 
                            'Therapy Sessions', 
                            'Mood Journal', 
                            'Resources'
                        ]} 
                    />
                )}

                {activeTab === "Settings" && (
                    <>
                        {/* Preferences Card */}
                        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 mb-6 md:mb-8">
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="w-10 h-10 bg-secondary-light/20 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-dark ml-4">Preferences</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { name: "Notification Settings", desc: "Manage how and when you receive alerts" },
                                    { name: "Privacy Settings", desc: "Control your data sharing preferences" },
                                    { name: "Theme Settings", desc: "Customize the app appearance" },
                                    { name: "Language Settings", desc: "Change your preferred language" }
                                ].map((pref, index) => (
                                    <div key={index} className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="font-medium text-dark">{pref.name}</p>
                                                <p className="text-sm text-neutral-500">{pref.desc}</p>
                                            </div>
                                            <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subscription Section */}
                        <div className="mb-6 md:mb-8 bg-white rounded-lg shadow-xl">
                            <div className="p-4 md:p-8">
                                <div className="flex items-center mb-4 md:mb-6">
                                    <div className="w-10 h-10 bg-secondary-light/20 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-dark ml-4">Subscription</h3>
                                </div>
                                <div className="bg-secondary-light/10 p-4 md:p-6 rounded-lg border border-secondary-light">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                                        <div>
                                            <h4 className="text-lg font-bold text-dark">Premium Plan</h4>
                                            <p className="text-neutral-600">Next billing: March 25, 2025</p>
                                        </div>
                                        <span className="px-3 py-1 bg-secondary-light text-secondary rounded-full text-sm font-medium w-fit">Active</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2 sm:justify-between">
                                        <button className="px-6 py-2 bg-white text-neutral-600 rounded-lg hover:bg-neutral-100 transition-colors">
                                            View Details
                                        </button>
                                        <button className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors">
                                            Manage Subscription
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Deletion Section */}
                        <div className="bg-white rounded-lg shadow-xl">
                            <div className="p-4 md:p-8">
                                <div className="flex items-center mb-4 md:mb-6">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-dark ml-4">Account Deletion</h3>
                                </div>
                                <p className="text-neutral-600 mb-4">
                                    If you wish to delete your account, please note that this action is irreversible.
                                </p>
                                <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// Reusable Section Card Component
const SectionCard = ({ title, icon, items }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 mb-6 md:mb-8">
            <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {icon === "profile" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        )}
                        {icon === "psyche" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        )}
                        {icon === "settings" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        )}
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-dark ml-4">{title}</h3>
            </div>
            <ul className="divide-y divide-neutral-200">
                {items.map((item) => (
                    <li key={item} className="py-4 flex justify-between items-center">
                        <span className="text-neutral-600 font-medium">{item}</span>
                        <button className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-primary hover:text-white transition-colors">
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileDashboard;