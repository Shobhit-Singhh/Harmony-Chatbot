import React from "react";

const audioData = [
    { src: "/assets/add.png" },
    { src: "/assets/music.png" },
    { src: "/assets/music.png" },
    { src: "/assets/music.png" },
    { src: "/assets/music.png" },
    { src: "/assets/music.png" },
    { src: "/assets/music.png" },
    { src: "/assets/music.png" },
    { src: "/assets/music.png" },
    { src: "/assets/music.png" }
];

const AudioGallery = () => {
    return (
        <div id="music-container" className="gap-4 p-4">
            <div className="text-xl pb-2 flex items-center">
                <span>Audio</span>
                <span className="ml-3">&#8594;</span>
            </div>

            <div className="overflow-x-auto flex gap-4 p-4">
                {audioData.map((audio, index) => (
                    <img
                        key={index}
                        src={audio.src}
                        alt="Music"
                        className="w-24 h-18 object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
};

export default AudioGallery;
