const ThoughtSection = () => {
    return (
        <section className="mt-[70px]">
            <div className="flex items-center justify-center bg-emerald-100 py-4">
                <div className="flex flex-col items-center justify-center">
                    <a className="text-lg text-green-800" href="#">Daily Reflection</a>
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
    );
};

export default ThoughtSection;
