import React from "react";

const Recommendation = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Top Nav Bar */}
      <script src="./dist/scripts/frames/top_nav.js"></script>
      
      {/* Right Side Menu (Initially hidden on small screens) */}
      <script src="./dist/scripts/frames/side_menu.js"></script>
      
      {/* Bottom Nav Bar */}
      <script src="./dist/scripts/frames/bottom_nav.js"></script>

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          className="w-full object-cover bg-green-50 opacity-50"
          src="./assets/Topographic bg.png"
          alt="background"
        />
        <img
          className="md:hidden object-cover bg-green-50 opacity-50"
          src="./assets/Topographic bg.png"
          alt="background"
        />
      </div>

      {/* Journaling Section */}
      <section className="mt-[70px]">
        <div className="flex items-center justify-center bg-emerald-100 py-4">
          <div className="flex flex-col items-center justify-center">
            <a className="text-lg text-green-800 " href="#">Daily Reflection</a>
            <h2 className="text-2xl font-bold text-center text-green-600 border-spacing-10 px-6">
              How do you feel about your current emotions?
            </h2>
            <div className="flex items-center justify-center">
              <textarea
                className="p-2 rounded-lg border-2 border-green-400 w-96 h-32"
                placeholder="Write your thoughts here"
              ></textarea>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Journaling Prompts Section */}
      <section>
        <div className="m-4">
          <div className="text-xl pb-2 flex items-center">
            <a>Daily Journaling Prompts</a>
            <a className="ml-3">&#8594;</a>
          </div>
          {/* Scrollable Container */}
          <div className="overflow-x-auto">
            <div id="prompt-cards-container" className="flex space-x-6 p-2"></div>
          </div>
        </div>
      </section>

      <script src="./dist/scripts/recommendations/recommendation.js"></script>
    </div>
  );
};

export default Recommendation;