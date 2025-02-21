import React from "react";

const reminderCardsData = [
    {
        title: "Stay Hydrated",
        icon: "./assets/Reminder Cards/Reminder=Water.png",
    },
    {
        title: "Take a Break",
        icon: "./assets/Reminder Cards/Reminder=Break.png",
    },
    {
        title: "Deep Breaths",
        icon: "./assets/Reminder Cards/Reminder=Breath.png",
    },
    {
        title: "Eye Rest",
        icon: "./assets/Reminder Cards/Reminder=Eye rest.png",
    },
    {
        title: "Meditate",
        icon: "./assets/Reminder Cards/Reminder=Meditate.png",
    },
];

const ReminderCards = () => {
    return (
        <div className="flex space-x-4 overflow-x-auto p-4">
            {reminderCardsData.map((card, index) => (
                <div
                    key={index}
                    className="shrink-0 flex flex-col items-center justify-between bg-white p-4 rounded-xl shadow-lg"
                >
                    <img
                        className="w-[200px] object-cover rounded-xl mb-2"
                        src={card.icon}
                        alt={card.title}
                    />
                    <span className="font-semibold -mt-12 p-2">{card.title}</span>
                </div>
            ))}
        </div>
    );
};

export default ReminderCards;