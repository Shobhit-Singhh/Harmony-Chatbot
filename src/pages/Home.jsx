import Dashboard from "../components/home/dashboard";
import JournalingPrompts from "../components/home/cards";
import GraphCards from "../components/home/graphs";
import ReminderCards from "../components/home/reminder";
import ScoreBoard from "../components/home/scores";
import CalendarSection from "../components/home/calendar";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-accent-blue-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Dashboard Section */}
                <div className="mb-12">
                    <Dashboard />
                </div>

                {/* Journaling Section */}
                <div className="mb-12">
                    <JournalingPrompts />
                </div>

                {/* Graphs Section */}
                <div className="mb-12">
                    <GraphCards />
                </div>

                {/* Reminders Section */}
                <div className="mb-12">
                    <ReminderCards />
                </div>

                {/* Score Board Section */}
                <div className="mb-12">
                    <ScoreBoard />
                </div>

                {/* Calendar Section */}
                <div>
                    <CalendarSection />
                </div>
            </div>
        </div>
    );
};

export default Home;