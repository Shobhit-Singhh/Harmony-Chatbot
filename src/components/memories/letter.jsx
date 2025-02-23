import React from "react";

const lettersData = [
    {
        src: "/assets/Letter/letter1.avif",
        title: "My First Soccer Victory",
        content: "I remember the thrill of my first soccer victory. It was a moment of hard work paying off, and it reminds me that with determination, I can achieve anything.",
    },
    {
        src: "/assets/Letter/letter2.avif",
        title: "A Memorable Birthday",
        content: "My birthday was a celebration of love, happiness, and achievement. It reminds me that life is full of special moments.",
    },
    {
        src: "/assets/Letter/letter3.webp",
        title: "First Day of IIT",
        content: "My first day at IIT was a moment of pride and excitement. It was a reminder that I am capable of achieving my dreams.",
    },
    {
        src: "/assets/Letter/letter4.avif",
        title: "Earning My Scholarship",
        content: "Earning my scholarship was a proud moment, the result of hard work and perseverance. It shows that when I put in the effort, I can overcome any obstacle.",
    },
    {
        src: "/assets/Letter/letter5.avif",
        title: "First Business Milestone",
        content: "Reaching my first $1,000 in sales was an important milestone. It proves that every step I take towards my goals is valuable.",
    },
    {
        src: "/assets/Letter/letter6.avif",
        title: "Buying My First Home",
        content: "Buying my first home was a dream come true. It was a symbol of my dedication and perseverance.",
    },
];

const Letter = () => {
    return (
        <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-medium text-gray-800">Letter to Yourself</h2>
                <span className="text-gray-400">→</span>
            </div>
            <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                    {lettersData.map((letter, index) => (
                        <div
                            key={index}
                            className="flex-none w-80 snap-start bg-white rounded-xl shadow-sm p-4"
                        >
                            <img
                                src={letter.src}
                                alt={letter.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-base font-medium mb-2">{letter.title}</h3>
                            <p className="text-sm text-gray-600">{letter.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Letter;