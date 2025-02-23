import Personal from "../components/community/personal";
import ProfessionalSlider from "../components/community/professional";

const Community = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-accent-blue-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-display-lg font-display text-dark mb-6">
                        Your Support Network
                    </h2>
                    <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
                        Connect with loved ones and healthcare professionals who support your journey to better health.
                    </p>
                </div>

                {/* Personal Connections Section */}
                <div className="mb-16">
                    <Personal />
                </div>

                {/* Professional Connections Section */}
                <div>
                    <ProfessionalSlider />
                </div>
            </div>
        </div>
    );
};

export default Community;