import React from "react";
import { FaUserMd } from "react-icons/fa";

const professionals = [
    {
        id: 1,
        name: "Dr. John Doe",
        specialization: "Cardiologist",
        experience: "10 years",
        location: "New York, USA",
        image: "./assets/profile/Profile 5.avif",
    },
    {
        id: 2,
        name: "Dr. Jane Smith",
        specialization: "Dermatologist",
        experience: "8 years",
        location: "Los Angeles, USA",
        image: "./assets/profile/Profile 5.avif",
    },
    {
        id: 3,
        name: "Dr. Robert Johnson",
        specialization: "Neurologist",
        experience: "12 years",
        location: "Chicago, USA",
        image: "./assets/profile/Profile 5.avif",
    },
    {
        id: 4,
        name: "Dr. Emily Brown",
        specialization: "Pediatrician",
        experience: "6 years",
        location: "Houston, USA",
        image: "./assets/profile/Profile 5.avif",
    },
    {
        id: 5,
        name: "Dr. Michael Wilson",
        specialization: "Orthopedist",
        experience: "15 years",
        location: "Boston, USA",
        image: "./assets/profile/Profile 5.avif",
    },
    {
        id: 6,
        name: "Dr. Sarah Lee",
        specialization: "Psychiatrist",
        experience: "9 years",
        location: "San Francisco, USA",
        image: "./assets/profile/Profile 5.avif",
    },
];

const Professionals = () => {
    // Function to split professionals into responsive rows based on viewport
    const getResponsiveRows = () => {
        // For small screens (3 rows), medium screens (2 rows), large screens (1 row)
        const itemsPerRow = {
            sm: Math.ceil(professionals.length / 3),
            md: Math.ceil(professionals.length / 2),
            lg: professionals.length
        };

        return {
            sm: Array.from({ length: 3 }, (_, i) => 
                professionals.slice(i * itemsPerRow.sm, (i + 1) * itemsPerRow.sm)),
            md: Array.from({ length: 2 }, (_, i) => 
                professionals.slice(i * itemsPerRow.md, (i + 1) * itemsPerRow.md)),
            lg: [professionals]
        };
    };

    const responsiveRows = getResponsiveRows();

    return (
        <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-light/20 rounded-full flex items-center justify-center">
                    <FaUserMd className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-dark ml-4">Healthcare Professionals</h3>
            </div>

            {/* Small screens (3 rows) */}
            <div className="block sm:hidden">
                {responsiveRows.sm.map((row, rowIndex) => (
                    row.length > 0 && (
                        <div key={`sm-${rowIndex}`} className="mb-4 overflow-x-auto">
                            <div className="flex space-x-4 min-w-max pb-2">
                                {row.map((profile) => (
                                    <div
                                        key={`sm-${profile.id}`}
                                        className="w-48 flex-none bg-neutral-50 rounded-lg p-4"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img
                                                className="w-16 h-16 rounded-full mb-3 object-cover"
                                                src={profile.image}
                                                alt={profile.name}
                                            />
                                            <h4 className="text-base font-medium text-dark mb-1 text-center">
                                                {profile.name}
                                            </h4>
                                            <p className="text-neutral-600 text-xs mb-1 text-center">
                                                {profile.specialization}
                                            </p>
                                            <p className="text-neutral-500 text-xs mb-3 text-center">
                                                {profile.location}
                                            </p>
                                            <button className="w-full py-1 px-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm">
                                                Connect
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>

            {/* Medium screens (2 rows) */}
            <div className="hidden sm:block md:hidden">
                {responsiveRows.md.map((row, rowIndex) => (
                    row.length > 0 && (
                        <div key={`md-${rowIndex}`} className="mb-4 overflow-x-auto">
                            <div className="flex space-x-4 min-w-max pb-2">
                                {row.map((profile) => (
                                    <div
                                        key={`md-${profile.id}`}
                                        className="w-56 flex-none bg-neutral-50 rounded-lg p-5"
                                    >
                                        <div className="flex flex-col items-center">
                                            <img
                                                className="w-18 h-18 rounded-full mb-3 object-cover"
                                                src={profile.image}
                                                alt={profile.name}
                                            />
                                            <h4 className="text-lg font-medium text-dark mb-1 text-center">
                                                {profile.name}
                                            </h4>
                                            <p className="text-neutral-600 text-sm mb-1 text-center">
                                                {profile.specialization}
                                            </p>
                                            <p className="text-neutral-500 text-sm mb-3 text-center">
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
                    )
                ))}
            </div>

            {/* Large screens (1 row) */}
            <div className="hidden md:block">
                <div className="overflow-x-auto">
                    <div className="flex space-x-6 min-w-max pb-2">
                        {professionals.map((profile) => (
                            <div
                                key={`lg-${profile.id}`}
                                className="w-64 flex-none bg-neutral-50 rounded-lg p-6"
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        className="w-20 h-20 rounded-full mb-4 object-cover"
                                        src={profile.image}
                                        alt={profile.name}
                                    />
                                    <h4 className="text-lg font-medium text-dark mb-1 text-center">
                                        {profile.name}
                                    </h4>
                                    <p className="text-neutral-600 text-sm mb-1 text-center">
                                        {profile.specialization}
                                    </p>
                                    <p className="text-neutral-500 text-sm mb-4 text-center">
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