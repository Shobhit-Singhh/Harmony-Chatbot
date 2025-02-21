import Personal from "../components/community/personal";
import ProfessionalSlider from "../components/community/professional";

const Community = () => {
    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Main Content */}
            <div className="bg-pink-50 mt-20 mx-4 mb-14 rounded-t-xl p-6 shadow-lg">
                <h2 className="text-3xl font-bold text-center text-green-800">Community</h2>

                {/* Personal Connections Section */}
                <div className="m-4">
                    <Personal />
                </div>

                {/* Professional Slider Section */}
                <div className="m-4">
                    <ProfessionalSlider />
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, id }) => (
    <div className="mt-6">
        <div className="py-4 bg-pink-50 rounded-t-xl">
            <div className="text-xl flex items-center ps-4">
                <a>{title}</a>
                <a className="ml-3 text-blue-500">&#8594;</a>
            </div>
            <div id={id} className="overflow-y-auto p-2 flex flex-wrap gap-2 max-h-96 m-4"></div>
        </div>
    </div>
);

export default Community;
