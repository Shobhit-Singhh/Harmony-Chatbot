import React from "react";

const scores = [
    { icon: "./assets/Score/icon 1.png", percentage: 70, points: "+1 pts" },
    { icon: "./assets/Score/icon 2.png", percentage: 50, points: "+2 pts" },
    { icon: "./assets/Score/icon 3.png", percentage: 85, points: "+3 pts" },
    { icon: "./assets/Score/icon 4.png", percentage: 40, points: "+2 pts" },
    { icon: "./assets/Score/icon 5.png", percentage: 95, points: "+3 pts" },
    { icon: "./assets/Score/icon 6.png", percentage: 60, points: "+2 pts" },
    { icon: "./assets/Score/icon 7.png", percentage: 80, points: "+1 pts" },
    { icon: "./assets/Score/icon 8.png", percentage: 20, points: "+1 pts" },
    { icon: "./assets/Score/icon 9.png", percentage: 100, points: "+2 pts" },
    { icon: "./assets/Score/icon 10.png", percentage: 30, points: "+2 pts" },
    { icon: "./assets/Score/icon 11.png", percentage: 90, points: "+3 pts" },
    { icon: "./assets/Score/icon 12.png", percentage: 45, points: "+1 pts" },
    { icon: "./assets/Score/icon 13.png", percentage: 75, points: "+1 pts" },
    { icon: "./assets/Score/icon 14.png", percentage: 10, points: "+2 pts" },
    { icon: "./assets/Score/icon 15.png", percentage: 35, points: "+3 pts" },
    { icon: "./assets/Score/icon 16.png", percentage: 65, points: "+1 pts" },
];

const ScoreBoard = () => {
    return (
        <div className="m-4">
            <div className="text-xl pb-2 flex items-center">
                <span>Score Board</span>
                <span className="ml-3">&#8594;</span>
            </div>
            <div className="m-1 py-4 bg-red-100 flex flex-wrap gap-4 items-center rounded-xl shadow-lg">
                {scores.map((score, index) => (
                    <div key={index} className="flex flex-col items-center w-20 h-20">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <div
                                className="absolute top-1/2 left-1/2 w-14 h-14 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    background: `conic-gradient(#4ade80 0%, #4ade80 ${score.percentage}%, transparent ${score.percentage}%, transparent 100%)`,
                                }}
                            ></div>
                            <img
                                className="absolute top-1/2 left-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2"
                                src="./assets/Score/Score Ring.png"
                                alt="Score Ring"
                            />
                            <img
                                className="absolute top-1/2 left-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2"
                                src={score.icon}
                                alt="Icon"
                            />
                        </div>
                        <div className="-mt-2 z-10">
                            <span className="border-2 border-blue-500 bg-blue-200 rounded-lg text-xs px-1 py-1">
                                {score.points}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScoreBoard;
