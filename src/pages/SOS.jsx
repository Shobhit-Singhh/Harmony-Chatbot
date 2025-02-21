import React from "react";

const CalmSupport = () => {
    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <img className="w-full h-full object-cover bg-green-50 opacity-50" src="./assets/Topographic bg.png" alt="background" />
            </div>

            {/* Main Content */}
            <div className="mx-6 my-16">
                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-extrabold text-emerald-700">Calm Support</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Access tools and resources to guide you through moments of distress.
                    </p>
                </div>

                {/* Emergency Contact Options */}
                <div className="bg-red-50 p-8 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-red-800 mb-6">Emergency Contact Options</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <img className="w-12 h-12" src="./assets/SOS/Contact.png" alt="Contact" />
                            <p className="text-gray-700">
                                <strong>Contact Trusted People:</strong> Add and quickly call or text family, friends, or therapists.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <img className="w-12 h-12" src="./assets/SOS/Location.png" alt="Location" />
                            <p className="text-gray-700">
                                <strong>Share Location:</strong> Share your location with trusted contacts in case of emergency.
                            </p>
                        </div>
                    </div>

                    {/* Contact List */}
                    <div className="mt-8">
                        <h3 className="text-xl font-medium text-red-700 mb-4">Saved Contacts</h3>
                        <ul className="space-y-4">
                            {["John Doe", "Jane Smith", "Sebastian Smith"].map((name, index) => (
                                <li key={index} className="flex items-center justify-between bg-red-100 p-4 rounded-md shadow-sm">
                                    <div>
                                        <p className="text-gray-800 font-semibold">{name}</p>
                                        <p className="text-gray-600 text-sm">+1 234 567 890</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-700 transition">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition">
                                            <i className="fas fa-comment"></i>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                            Add More Contacts
                        </button>
                    </div>
                </div>

                {/* Crisis Hotlines */}
                <div className="bg-yellow-50 p-8 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Crisis Hotlines</h2>
                    <p className="text-gray-700 mb-6">Find helplines tailored to your location for mental health support.</p>
                    <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                        View Helplines
                    </button>
                </div>

                {/* Quick Coping Tools */}
                <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-10">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-6">Quick Coping Tools</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <img className="w-14 h-14" src="./assets/SOS/Breath.png" alt="Breathing Exercises" />
                            <p className="text-gray-700"><strong>Breathing Exercises:</strong> Follow calming breathing techniques.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img className="w-14 h-14" src="./assets/SOS/Audio.png" alt="Grounding Exercises" />
                            <p className="text-gray-700"><strong>Grounding Exercises:</strong> Practice the 5-4-3-2-1 sensory method.</p>
                        </div>
                    </div>
                </div>

                {/* Real-Time Chat Support */}
                <div className="bg-purple-50 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-purple-800 mb-4">Real-Time Chat Support</h2>
                    <p className="text-gray-700 mb-6">Use our chatbot for basic support and suggestions.</p>
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                        Chat Now
                    </button>
                    <p className="text-red-600 text-sm mt-4"><strong>Note:</strong> This is not a substitute for professional help.</p>
                </div>
            </div>
        </div>
    );
};

export default CalmSupport;
