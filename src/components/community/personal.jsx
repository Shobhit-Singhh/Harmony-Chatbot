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

const Personal = () => {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (id) => {
        setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    // Function to split profiles into responsive rows based on viewport
    const getResponsiveRows = () => {
        // For small screens (3 rows), medium screens (2 rows), large screens (1 row)
        const itemsPerRow = {
            sm: Math.ceil(profiles.length / 3),
            md: Math.ceil(profiles.length / 2),
            lg: profiles.length
        };

        return {
            sm: Array.from({ length: 3 }, (_, i) => 
                profiles.slice(i * itemsPerRow.sm, (i + 1) * itemsPerRow.sm)),
            md: Array.from({ length: 2 }, (_, i) => 
                profiles.slice(i * itemsPerRow.md, (i + 1) * itemsPerRow.md)),
            lg: [profiles]
        };
    };

    const responsiveRows = getResponsiveRows();

    return (
        <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                        <FaUserGroup className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium text-dark ml-4">Personal Connections</h3>
                </div>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                    Add Connection
                </button>
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
                                        className={`min-w-[280px] flex flex-row justify-between items-center gap-3 bg-neutral-50 rounded-lg p-3 transition-all ${
                                            openMenus[profile.id] ? "max-w-[460px] p-4" : ""
                                        } ${profile.highlight ? "ring-2 ring-primary" : ""}`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <img className="w-12 h-12 rounded-full object-cover" src={profile.image} alt={profile.name} />
                                            <h4 className="text-base font-medium text-dark">{profile.name}</h4>
                                        </div>
                                        {openMenus[profile.id] && (
                                            <div className="overflow-x-auto flex gap-2">
                                                {[FaComment, FaImage, FaPersonWalking, FaUserGroup, FaHeartPulse].map((Icon, index) => (
                                                    <button
                                                        key={index}
                                                        className="p-1 bg-accent-blue-light text-primary rounded-lg hover:bg-accent-blue-light/80 transition-colors"
                                                    >
                                                        <Icon className="w-3 h-3" />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                        <button
                                            onClick={() => toggleMenu(profile.id)}
                                            className="py-1 px-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors text-sm"
                                        >
                                            Share
                                        </button>
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
                                        className={`min-w-[300px] flex flex-row justify-between items-center gap-4 bg-neutral-50 rounded-lg p-4 transition-all ${
                                            openMenus[profile.id] ? "max-w-[460px] p-5" : ""
                                        } ${profile.highlight ? "ring-2 ring-primary" : ""}`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <img className="w-14 h-14 rounded-full object-cover" src={profile.image} alt={profile.name} />
                                            <h4 className="text-lg font-medium text-dark">{profile.name}</h4>
                                        </div>
                                        {openMenus[profile.id] && (
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
                                            onClick={() => toggleMenu(profile.id)}
                                            className="py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
                                        >
                                            Share
                                        </button>
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
                    <div className="flex space-x-4 min-w-max pb-2">
                        {profiles.map((profile) => (
                            <div
                                key={`lg-${profile.id}`}
                                className={`min-w-[320px] max-w-[620px] flex flex-row justify-between items-center gap-4 bg-neutral-50 rounded-lg p-4 transition-all ${
                                    openMenus[profile.id] ? "max-w-[460px] p-6" : ""
                                } ${profile.highlight ? "ring-2 ring-primary" : ""}`}
                            >
                                <div className="flex flex-row items-center space-x-4">
                                    <img className="w-16 h-16 rounded-full object-cover" src={profile.image} alt={profile.name} />
                                    <h4 className="text-lg font-medium text-dark">{profile.name}</h4>
                                </div>
                                {openMenus[profile.id] && (
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
                                    onClick={() => toggleMenu(profile.id)}
                                    className="py-2 px-4 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors"
                                >
                                    Share
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;