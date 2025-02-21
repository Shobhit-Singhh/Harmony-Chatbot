import React from "react";

const promptCardsData = [
    {
        title: "Frustration Burns Within",
        description: "I was irritated all day because _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Angry.png",
        background: "#FFB9B9",
        prompts: "13 AI Suggested Prompts",
    },
    {
        title: "Happiness Shines Bright",
        description: "I'm grateful for the _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Happy.png",
        background: "#FFD6A5",
        prompts: "10 AI Suggested Prompts",
    },
    {
        title: "Lost in a Whirl of Thoughts ",
        description: "I was lost in thought _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Thinking.png",
        background: "#A5FFD6",
        prompts: "15 AI Suggested Prompts",
    },
    {
        title: "Sadness Looms Over",
        description: "I was low all day because _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Sad.png",
        background: "#B9B9FF",
        prompts: "12 AI Suggested Prompts",
    },
    {
        title: "Anxiety Creeps In",
        description: "I couldn't shake the thought _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Worry.png",
        background: "#FFB9FF",
        prompts: "8 AI Suggested Prompts",
    },
    {
        title: "Crying Out Loud",
        description: "No one knows but I'm _ _ _",
        points: "+1 pts",
        icon: "./assets/Mood/Mood=Cry.png",
        background: "#FFD6FF",
        prompts: "5 AI Suggested Prompts",
    },
];

const JournalingPrompts = () => {
    return (
        <div className="m-4">
            <div className="text-xl pb-2 flex items-center">
                <span>Daily Journaling Prompts</span>
                <span className="ml-3">&#8594;</span>
            </div>
            <div className="overflow-x-auto">
                <div className="flex space-x-6 p-2">
                    {promptCardsData.map((card, index) => (
                        <div
                            key={index}
                            className="w-[320px] rounded-xl p-2 shrink-0"
                            style={{
                                backgroundColor: card.background,
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <div className="flex p-2 items-center justify-between">
                                <img className="w-12" src={card.icon} alt="icon" />
                                <a className="border-2 border-blue-500 bg-blue-200 rounded-lg text-xs px-1 py-1">
                                    {card.points}
                                </a>
                            </div>
                            <div className="p-2 flex flex-col">
                                <a className="text-xl font-semibold">{card.title}</a>
                                <a className="text-base text-gray-600">{card.description}</a>
                            </div>
                            <div className="flex justify-center items-center mx-4">
                                <a className="text-xs uppercase text-gray-600 p-2 tracking-wider">
                                    {card.prompts}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JournalingPrompts;
