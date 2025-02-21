import React from "react";

const Gratitude = () => {
    const gratitudeData = [
        {
            title: "Grateful for Health and Energy",
            content:
                "Today, I am grateful for my health and the energy I have to start the day. Every morning is a new opportunity to take care of my body and mind.",
        },
        {
            title: "Grateful for Inner Peace",
            content:
                "I am grateful for the peace within me. It helps me stay grounded amidst the chaos of daily life.",
        },
        {
            title: "Grateful for My Mindset",
            content:
                "I am grateful for my mindset and the way I approach life. With a positive outlook, I see challenges as opportunities to grow.",
        },
        {
            title: "Grateful for the Present Moment",
            content:
                "I am grateful for the present moment. Right now, I have the power to make choices that align with my values.",
        },
        {
            title: "Grateful for Self-Growth",
            content:
                "Today, I am grateful for the continuous growth I experience. Each day offers a chance to become better than yesterday.",
        },
        {
            title: "Grateful for Opportunities",
            content:
                "I am grateful for the opportunities I have each day to learn, improve, and contribute.",
        },
    ];

    return (
        <div className="p-4  flex flex-col gap-2">
            <div className="text-xl pb-2 flex items-center">
                <span>Gratitude Journals</span>
                <span className="ml-3">&#8594;</span>
            </div>
            <div className="overflow-x-auto flex gap-4 p-4">
                {gratitudeData.map((item, index) => (
                    <div
                        key={index}
                        className="flex-none w-80 p-4 bg-white rounded-lg shadow-lg"
                    >
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gratitude; // ✅ Make sure to export default
