import React from "react";

const imageCaptionData = [
    { 
        src: "./assets/Graph/graph1.png", 
        caption: "Beats per minute (BPM)"
    },
    { 
        src: "./assets/Graph/graph3.png",
        caption: "Daily Blood Pressure (BP) ranges"
    },
    { 
        src: "./assets/Graph/graph2.png",
        caption: "Daily steps Count"
    },
    { 
        src: "./assets/Graph/graph1.png", 
        caption: "Daily Sleep Duration"
    }
];

const ImageCaptionCards = () => {
    return (
        <div className="m-4">
            {/* Score Board Heading */}
            <div className="text-xl pb-2 flex items-center">
                <span>Score Board</span>
                <span className="ml-3">&#8594;</span>
            </div>
            
            {/* Image Caption Cards */}
            <div className="overflow-x-auto flex gap-6 py-4 bg-red-100 items-center rounded-xl shadow-lg p-4">
                {imageCaptionData.map((item, index) => (
                    <div key={index} className="flex-none w-80 p-4 bg-pink-100 rounded-xl shadow-lg text-center">
                        <img className="rounded-lg w-full h-44 object-cover" src={item.src} alt={item.caption} />
                        <p className="mt-2 text-sm text-gray-600">{item.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageCaptionCards;
