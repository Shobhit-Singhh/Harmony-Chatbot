import { useEffect } from "react";
import Dashoard from "../components/home/dashboard";
import JournalingPrompts from "../components/home/cards";
import ScoreBoard from "../components/home/scores";
import ReminderCards from "../components/home/reminder";
import CalendarSection from "../components/home/calendar";
import ImageCaptionCards from "../components/home/graphs";
import BackgroundImage from "../components/background";

const Home = () => {
    return (
        <div className="bg-green-100 min-h-screen">
            {/* Content Wrapper */}
            <div className="pt-14 pb-10 relative">
                {/* Background Image */}
                {/* <BackgroundImage /> */}


                {/* Hero Section */}
                <div className="flex items-center justify-center w-full h-full">
                    <Dashoard />
                </div>

                {/* Main Section */}
                <div className="border-2 m-3 pt-2 bg-pink-50 rounded-t-xl shadow-lg">
                    {/* Journaling Prompts */}
                    <div className="m-4">
                        <JournalingPrompts />
                    </div>

                    {/* Score Board */}
                    <div className="m-4">
                        <ScoreBoard />
                    </div>

                    {/* Well Being Reminders */}
                    <div className="m-4">
                        <ReminderCards />
                    </div>

                    {/* Calendar */}
                    <div className="m-4">
                        <CalendarSection />
                    </div>

                    {/* Vitals Section */}
                    <div className="m-4">
                        <ImageCaptionCards />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
