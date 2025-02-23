import { useState } from "react";
import { FaComment, FaImage, FaPersonWalking, FaUserGroup, FaHeartPulse } from "react-icons/fa6";

const profiles = [
    { id: 4, name: "Mom", image: "./assets/profile/Profile 4.avif" },
    { id: 9, name: "Mom", image: "./assets/profile/Profile 4.avif" },
    { id: 6, name: "Mom", image: "./assets/profile/Profile 4.avif" },
    { id: 2, name: "Dad", image: "./assets/profile/Profile 2.avif" },
    { id: 7, name: "Dad", image: "./assets/profile/Profile 2.avif" },
    { id: 6, name: "Dad", image: "./assets/profile/Profile 2.avif" },
    { id: 1, name: "GrandMa", image: "./assets/profile/Profile 1.avif" },
    { id: 5, name: "Sophia", image: "./assets/profile/Profile 5.avif", highlight: true },
];

const no_of_row = 2; // Define the number of rows dynamically

const Personal = () => {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (id) => {
        setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    // Group profiles into rows based on `id % no_of_row`
    const rows = Array.from({ length: no_of_row }, (_, i) =>
        profiles.filter(({ id }) => id % no_of_row === i)
    );

    return (
        <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                        <FaUserGroup className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-h3 font-display text-dark ml-4">Personal Connections</h3>
                </div>
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                    Add Connection
                </button>
            </div>

            <div className="overflow-x-auto whitespace-nowrap pb-4">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap gap-4 min-w-max mt-4">
                        {row.map(({ id, name, image, highlight }) => (
                            <div
                                key={id}
                                className={`min-w-[320px] max-w-[620px] flex flex-row justify-between items-center gap-4 bg-neutral-50 rounded-lg p-4 transition-all ${openMenus[id] ? "max-w-[460px] p-6" : ""
                                    } ${highlight ? "ring-2 ring-primary" : ""}`}
                            >
                                <div className="flex flex-row items-center space-x-4">
                                    <img className="w-16 h-16 rounded-full object-cover" src={image} alt={name} />
                                    <h4 className="text-lg font-medium text-dark">{name}</h4>
                                </div>
                                {openMenus[id] && (
                                    <div className="overflow-x-auto flex gap-2">
                                        {[FaComment, FaImage, FaPersonWalking, FaUserGroup, FaHeartPulse].map((Icon, index) => (
                                            <button
                                                key={index}
                                                className="p-2 bg-accent-blue-light text-primary rounded-lg hover:bg-accent-blue-light/80 transition-colors"
                                            >
                                                <Icon className="w-4 h-4" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                                <button
                                    onClick={() => toggleMenu(id)}
                                    className="py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
                                >
                                    Share
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Personal;
