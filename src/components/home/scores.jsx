import React from "react";
import {
    Medal, Dumbbell, Utensils, Moon, Droplet, Briefcase, Users, Heart, BookOpen, PiggyBank, Brain, Music, Globe, ShoppingCart, Leaf, Smile, Target, Timer, Home, ClipboardCheck, Handshake, Lightbulb
} from "lucide-react";

const scores = [
    { category: "Exercise", score: 75, points: "+2 pts", icon: <Dumbbell className="w-5 h-5 text-red-500" /> },
    { category: "Diet", score: 85, points: "+3 pts", icon: <Utensils className="w-5 h-5 text-orange-500" /> },
    { category: "Sleep", score: 90, points: "+4 pts", icon: <Moon className="w-5 h-5 text-blue-500" /> },
    { category: "Hydration", score: 80, points: "+2 pts", icon: <Droplet className="w-5 h-5 text-cyan-500" /> },
    { category: "Work Productivity", score: 88, points: "+3 pts", icon: <Briefcase className="w-5 h-5 text-gray-700" /> },
    { category: "Quality Time with Family", score: 85, points: "+4 pts", icon: <Users className="w-5 h-5 text-green-500" /> },
    { category: "Relationship Effort", score: 80, points: "+3 pts", icon: <Heart className="w-5 h-5 text-pink-500" /> },
    { category: "Learning & Growth", score: 90, points: "+5 pts", icon: <BookOpen className="w-5 h-5 text-indigo-500" /> },
    { category: "Financial Management", score: 75, points: "+3 pts", icon: <PiggyBank className="w-5 h-5 text-yellow-500" /> },
    { category: "Mindfulness & Mental Health", score: 95, points: "+5 pts", icon: <Brain className="w-5 h-5 text-purple-500" /> },
    { category: "Listening to Music", score: 78, points: "+2 pts", icon: <Music className="w-5 h-5 text-rose-500" /> },
    { category: "Travel & Exploration", score: 82, points: "+4 pts", icon: <Globe className="w-5 h-5 text-teal-500" /> },
    { category: "Smart Spending", score: 88, points: "+3 pts", icon: <ShoppingCart className="w-5 h-5 text-amber-500" /> },
    { category: "Sustainable Living", score: 86, points: "+3 pts", icon: <Leaf className="w-5 h-5 text-lime-500" /> },
    { category: "Daily Gratitude", score: 92, points: "+4 pts", icon: <Smile className="w-5 h-5 text-orange-400" /> },
    { category: "Goal Setting & Achievement", score: 90, points: "+5 pts", icon: <Target className="w-5 h-5 text-red-600" /> },
    { category: "Time Management", score: 87, points: "+4 pts", icon: <Timer className="w-5 h-5 text-blue-600" /> },
    { category: "Home Organization", score: 85, points: "+3 pts", icon: <Home className="w-5 h-5 text-gray-600" /> },
    { category: "Task Completion", score: 89, points: "+4 pts", icon: <ClipboardCheck className="w-5 h-5 text-cyan-600" /> },
    { category: "Networking & Socializing", score: 82, points: "+3 pts", icon: <Handshake className="w-5 h-5 text-violet-500" /> },
    { category: "Creative Thinking", score: 91, points: "+4 pts", icon: <Lightbulb className="w-5 h-5 text-yellow-400" /> },
];

const no_of_row = 2;

const ScoreBoard = () => {
    return (
        <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
                <Medal className="w-6 h-6 text-yellow-500" />
                <h2 className="text-lg font-medium text-gray-800">Achievement Board</h2>
            </div>

            {/* Grid with row control */}
            <div className="overflow-x-auto">
                <div className= "grid grid-flow-col auto-cols-[minmax(200px,_1fr)] sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-1 gap-4">
                    {scores.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-sm min-w-[200px]">
                            <div className="flex items-center gap-2 mb-2">
                                {item.icon}
                                <h3 className="text-sm font-medium">{item.category}</h3>
                            </div>
                            <div className="text-2xl font-bold text-green-500">{item.score}%</div>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                {item.points}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScoreBoard;