import React from "react";
import { FaUserMd } from "react-icons/fa";

const professionals = [
    {
        name: "Dr. John Doe",
        specialization: "Cardiologist",
        experience: "10 years",
        location: "New York, USA",
        image: "./assets/profile/Profile 5.avif",
    },
    {
        name: "Dr. Jane Smith",
        specialization: "Dermatologist",
        experience: "8 years",
        location: "Los Angeles, USA",
        image: "./assets/profile/Profile 5.avif",
    },
    // ... other professionals
];

const Professionals = () => {
    return (
        <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-secondary-light/20 rounded-full flex items-center justify-center">
                    <FaUserMd className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-h3 font-display text-dark ml-4">Healthcare Professionals</h3>
            </div>

            <div className="relative">
                <div className="overflow-x-auto pb-4">
                    <div className="flex space-x-6">
                        {professionals.map((profile, index) => (
                            <div
                                key={index}
                                className="flex-none w-64 bg-neutral-50 rounded-lg p-6"
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        className="w-20 h-20 rounded-full mb-4 object-cover"
                                        src={profile.image}
                                        alt={profile.name}
                                    />
                                    <h4 className="text-lg font-medium text-dark mb-1">
                                        {profile.name}
                                    </h4>
                                    <p className="text-neutral-600 text-sm mb-1">
                                        {profile.specialization}
                                    </p>
                                    <p className="text-neutral-500 text-sm mb-4">
                                        {profile.location}
                                    </p>
                                    <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professionals;