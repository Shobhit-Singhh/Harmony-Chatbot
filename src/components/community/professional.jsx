import React from "react";

const professionals = [
    {
        name: "John Doe",
        specialization: "Cardiologist",
        experience: "10 years",
        location: "New York, USA",
        image: "./assets/profile/Profile 5.avif",
    },
    {
        name: "Jane Smith",
        specialization: "Dermatologist",
        experience: "8 years",
        location: "Los Angeles, USA",
        image: "./assets/profile/Profile 5.avif",
    }, 
    {
        name: "Jane Smith",
        specialization: "Dermatologist",
        experience: "8 years",
        location: "Los Angeles, USA",
        image: "./assets/profile/Profile 5.avif",
    }, 
    {
        name: "Jane Smith",
        specialization: "Dermatologist",
        experience: "8 years",
        location: "Los Angeles, USA",
        image: "./assets/profile/Profile 5.avif",
    }, 
    {
        name: "Jane Smith",
        specialization: "Dermatologist",
        experience: "8 years",
        location: "Los Angeles, USA",
        image: "./assets/profile/Profile 5.avif",
    }, 
    {
        name: "Jane Smith",
        specialization: "Dermatologist",
        experience: "8 years",
        location: "Los Angeles, USA",
        image: "./assets/profile/Profile 5.avif",
    },
];

const Professionals = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center mb-5">
                <h1 className="text-3xl font-light text-green-700">Professionals Around You</h1>
            </div>
            <div className="flex flex-col items-center justify-center mx-3 mb-16">
                <div className="slider-container overflow-hidden relative w-full max-w-4xl mx-auto">
                    <div className="slider flex gap-4 transition-transform ease-in-out duration-300 overflow-x-auto scrolling-touch">
                        {professionals.map((profile, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg flex-shrink-0 w-44">
                                <div className="px-4 py-3 flex flex-col items-center justify-between">
                                    <div className="flex items-center mb-3">
                                        <img className="w-16 h-16 rounded-full" src={profile.image} alt="profile" />
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-lg font-semibold text-slate-900">{profile.name}</h2>
                                        <p className="text-sm text-gray-600">{profile.specialization}</p>
                                        <p className="text-sm text-gray-600">{profile.experience}</p>
                                        <p className="text-sm text-gray-600">{profile.location}</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-center mt-3">
                                        <button className="px-4 py-2 text-sm text-white bg-green-500 rounded-full">Connect</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Professionals;
