import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        import("../dist/scripts/home/cards.js");
        import("../dist/scripts/home/scores.js");
        import("../dist/scripts/home/reminders.js");
        import("../dist/scripts/home/graphs.js");
    }, []);

    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Top, Side, Bottom Navigation */}
            <script src="../dist/scripts/frames/top_nav.js"></script>
            <script src="../dist/scripts/frames/side_menu.js"></script>
            <script src="../dist/scripts/frames/bottom_nav.js"></script>

            {/* Content Wrapper */}
            <div className="pt-14 pb-10 relative">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <img className="w-full h-full object-cover opacity-50" src="../assets/Background.png" alt="background" />
                </div>

                {/* Hero Section */}
                <div className="flex items-center justify-center">
                    <img className="w-1/2" src="../assets/Dashoard Card.png" alt="hero" />
                </div>

                {/* Main Section */}
                <div className="border-2 m-3 pt-2 bg-pink-50 rounded-t-xl shadow-lg">
                    {/* Journaling Prompts */}
                    <div className="m-4">
                        <div className="text-xl pb-2 flex items-center">
                            <a>Daily Journaling Prompts</a>
                            <a className="ml-3">&#8594;</a>
                        </div>
                        <div className="overflow-x-auto">
                            <div id="prompt-cards-container" className="flex space-x-6 p-2"></div>
                        </div>
                    </div>

                    {/* Score Board */}
                    <div className="m-4">
                        <div className="text-xl pb-2 flex items-center">
                            <a>Score Board</a>
                            <a className="ml-3">&#8594;</a>
                        </div>
                        <div id="score-list" className="m-1 py-4 bg-red-100 flex flex-wrap gap-y-4 items-center rounded-xl shadow-lg"></div>
                    </div>

                    {/* Well Being Reminders */}
                    <div className="m-4">
                        <div className="text-xl pb-2 flex items-center">
                            <a>Well Being Reminders</a>
                            <a className="ml-3">&#8594;</a>
                        </div>
                        <div className="overflow-x-auto">
                            <div id="reminder-cards-container" className="flex space-x-6 p-2"></div>
                        </div>
                    </div>

                    {/* Calendar */}
                    <div className="flex flex-col justify-center m-4">
                        <div className="text-xl pb-2 flex items-center">
                            <a>Calendar</a>
                            <a className="ml-3">&#8594;</a>
                        </div>
                        <div className="flex justify-center">
                            <img className="max-w-[500px] w-full" src="../assets/calendar.png" alt="calendar" />
                        </div>
                    </div>

                    {/* Vitals Section */}
                    <div className="m-4 py-4 bg-pink-50 rounded-t-xl">
                        <div className="text-xl flex items-center ps-4">
                            <a href="#">Vitals</a>
                            <a href="#" className="ml-3 text-blue-500">&#8594;</a>
                        </div>
                        <div id="image-caption-container" className="overflow-x-auto p-2 flex gap-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
