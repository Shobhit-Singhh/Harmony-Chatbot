import { useEffect } from "react";

const Memories = () => {
    useEffect(() => {
        import("../dist/scripts/memories/gallery.js");
        import("../dist/scripts/memories/music.js");
        import("../dist/scripts/memories/letter.js");
        import("../dist/scripts/memories/gratitude.js");
    }, []);

    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Navigation Bars */}
            <script src="../dist/scripts/frames/top_nav.js"></script>
            <script src="../dist/scripts/frames/side_menu.js"></script>
            <script src="../dist/scripts/frames/bottom_nav.js"></script>

            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <img
                    className="w-full object-cover opacity-50"
                    src="../assets/Topographic bg.png"
                    alt="background"
                />
            </div>

            {/* Main Content */}
            <div className="bg-pink-50 mt-20 mx-4 mb-14 rounded-t-xl p-6 shadow-lg">
                <h2 className="text-3xl font-bold text-center text-green-800">Memories</h2>

                {/* Gallery Section */}
                <Section title="Gallery" id="image-container" />

                {/* Music Section */}
                <Section title="Music" id="music-container" />

                {/* Letter Section */}
                <Section title="Letter" id="letter-container" />

                {/* Gratitude Letters Section */}
                <Section title="Gratitude Letters" id="gratitude-container" />
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

export default Memories;
