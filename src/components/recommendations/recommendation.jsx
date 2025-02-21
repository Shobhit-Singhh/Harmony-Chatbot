const recommendations = [
    {
        title: "Personal Recommendation",
        description: "Personalized prompt for gratitude journaling, self-letter writing, and your preserved memories.",
        images: ["./assets/Recommendation/r2.avif", "./assets/Recommendation/r1.avif"]
    },
    {
        title: "Media Recommendation",
        description: "Recommendations for movies, music, and books based on your mood and preferences.",
        images: ["./assets/Recommendation/r5.avif", "./assets/Recommendation/r6.avif"]
    },
    {
        title: "Article",
        description: "Educational articles help you understand how different CBT techniques work.",
        images: ["./assets/Recommendation/r3.avif", "./assets/Recommendation/r4.avif"]
    }
];

const RecommendationSection = () => {
    return (
        <section className="py-10 bg-pink-50 m-4 rounded-xl pb-14">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-green-800">Recommendation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {recommendations.map((rec, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className='flex items-center justify-center mt-6 rounded-md'>
                                {rec.images.map((img, idx) => (
                                    <img key={idx} className="h-44" src={img} alt={rec.title} />
                                ))}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-green-800">{rec.title}</h3>
                                <p className="mt-2 text-gray-600">{rec.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendationSection;