import { useState } from "react";
import { FaComment, FaImage } from "react-icons/fa6";
import { FaPersonWalking, FaUserGroup, FaHeartPulse } from "react-icons/fa6";

const profiles = [
    { id: 4, name: "Mom", image: "./assets/profile/Profile 4.avif" },
    { id: 2, name: "Dad", image: "./assets/profile/Profile 2.avif" },
    { id: 1, name: "GrandMa", image: "./assets/profile/Profile 1.avif" },
    { id: 5, name: "Sophia", image: "./assets/profile/Profile 5.avif", highlight: true },
];

const Personal = () => {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (id) => {
        setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section className="container mx-auto mt-10 px-4 py-8">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-light text-green-700">Personal Connections</h1>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3">
                {profiles.map(({ id, name, image, highlight }) => (
                    <div
                        key={id}
                        className={`bg-white rounded-lg shadow-lg p-4 ${highlight ? "bg-green-200 outline outline-green-300 outline-2" : ""}`}
                    >
                        <div className="flex items-center">
                            <img className="w-16 h-16 rounded-full" src={image} alt="profile" />
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-end mt-3">
                            <button
                                onClick={() => toggleMenu(id)}
                                className="px-4 py-2 text-sm text-white bg-green-500 rounded-full"
                            >
                                Share
                            </button>
                            {openMenus[id] && (
                                <div className="flex items-center space-x-2 mt-2">
                                    <button className="p-2 text-green-500 rounded-full hover:bg-green-100">
                                        <FaComment />
                                    </button>
                                    <button className="p-2 text-green-500 rounded-full hover:bg-green-100">
                                        <FaImage />
                                    </button>
                                    <button className="p-2 text-green-500 rounded-full hover:bg-green-100">
                                        <FaPersonWalking />
                                    </button>
                                    <button className="p-2 text-green-500 rounded-full hover:bg-green-100">
                                        <FaUserGroup />
                                    </button>
                                    <button className="p-2 text-green-500 rounded-full hover:bg-green-100">
                                        <FaHeartPulse />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Personal;