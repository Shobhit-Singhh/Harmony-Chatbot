import React from "react";

const lettersData = [
    {
        src: "/assets/Letter/letter1.avif",
        title: "My First Soccer Victory",
        content:
            "I remember the thrill of my first soccer victory. It was a moment of hard work paying off, and it reminds me that with determination, I can achieve anything. I’ve faced challenges before and conquered them, so I’m ready to take on whatever comes next.",
    },
    {
        src: "/assets/Letter/letter2.avif",
        title: "A Memorable Birthday",
        content:
            "My birthday was a celebration of love, happiness, and achievement. It reminds me that life is full of special moments, and I am capable of creating more of them. With every challenge, there’s an opportunity for joy and growth.",
    },
    {
        src: "/assets/Letter/letter3.webp",
        title: "First Day of IIT",
        content:
            "My first day at IIT was a moment of pride and excitement. It was a reminder that I am capable of achieving my dreams. I’ve worked hard to get here, and I’m ready to face any challenge that comes my way.",
    },
    {
        src: "/assets/Letter/letter4.avif",
        title: "Earning My Scholarship",
        content:
            "Earning my scholarship was a proud moment, the result of hard work and perseverance. It shows that when I put in the effort, I can overcome any obstacle. This achievement is a reminder that my determination will always lead to success.",
    },
    {
        src: "/assets/Letter/letter5.avif",
        title: "First Business Milestone",
        content:
            "Reaching my first $1,000 in sales was an important milestone. It proves that every step I take towards my goals is valuable. The hard work paid off, and this accomplishment motivates me to keep pushing forward, no matter how difficult the journey.",
    },
    {
        src: "/assets/Letter/letter6.avif",
        title: "Buying My First Home",
        content:
            "Buying my first home was a dream come true. It was a symbol of my dedication and perseverance. This achievement reminds me that I am capable of making my dreams a reality, and I will continue to face challenges head-on with strength and resilience.",
    },
];

const Letter = () => {
    return (
        <div className="p-4  flex flex-col gap-2">
            <div className="text-xl pb-2 flex items-center">
                <span>Letter to Yourself</span>
                <span className="ml-3">&#8594;</span>
            </div>
            <div id="letter-container" className="overflow-x-auto flex gap-4 p-4">
                {lettersData.map((letter, index) => (
                    <div
                        key={index}
                        className="flex-none w-80 p-4 bg-white rounded-lg shadow-lg"
                    >
                        <img
                            src={letter.src}
                            alt="Letter"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">
                            {letter.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">{letter.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Letter;
