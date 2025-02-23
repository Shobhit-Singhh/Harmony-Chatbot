import React from "react";

const promptCards = [
    {
        title: "Frustration Burns Within",
        description: "I was irritated all day because _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Angry.png",
        background: "bg-red-50",
        borderColor: "border-red-200",
        prompts: "13 AI Suggested Prompts",
    },
    {
        title: "Happiness Shines Bright",
        description: "I'm grateful for _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Happy.png",
        background: "bg-yellow-50",
        borderColor: "border-yellow-200",
        prompts: "10 AI Suggested Prompts",
    },
    {
        title: "Lost in a Whirl of Thoughts",
        description: "I was lost in thought _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Thinking.png",
        background: "bg-green-50",
        borderColor: "border-green-200",
        prompts: "15 AI Suggested Prompts",
    },
    {
        title: "Sadness Looms Over",
        description: "I was low all day because _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Sad.png",
        background: "bg-blue-50",
        borderColor: "border-blue-200",
        prompts: "12 AI Suggested Prompts",
    },
    {
        title: "Anxiety Creeps In",
        description: "I couldn't shake the thought _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Worry.png",
        background: "bg-purple-50",
        borderColor: "border-purple-200",
        prompts: "8 AI Suggested Prompts",
    },
    {
        title: "Crying Out Loud",
        description: "No one knows but I'm _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Cry.png",
        background: "bg-pink-50",
        borderColor: "border-pink-200",
        prompts: "5 AI Suggested Prompts",
    },
];

const no_of_row = 2; // Change this to set the number of rows

const JournalingPrompts = () => {
    return (
        <div className="">
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-medium text-gray-800">Daily Reflections</h2>
                <span className="text-gray-400">→</span>
            </div>

            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="grid grid-flow-col auto-cols-[minmax(280px,_1fr)] sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-4">
                    {promptCards.map((card, index) => (
                        <div
                            key={index}
                            className={`min-w-[280px] p-4 rounded-xl ${card.background} ${card.borderColor}`}
                        >
                            <h3 className="text-base font-medium mb-2">{card.title}</h3>
                            <p className="text-sm text-gray-600">{card.description}</p>
                            <span className="text-xs font-medium mt-2 inline-block bg-white px-2 py-1 rounded-full">
                                {card.points}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JournalingPrompts;