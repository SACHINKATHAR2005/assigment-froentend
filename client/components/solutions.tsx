import Image from "next/image";

export default function Solutions() {
    const solutions = [
        {
            title: "Weight Loss",
            description: "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you.",
            icon: "/assets/Frame1.png",

            iconSrc: "/assets/Frame1.png"
        },
        {
            title: "Nerve Pain",
            description: "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function.",
            iconSrc: "/assets/Frame2.png"
        },
        {
            title: "Skin Care",
            description: "Explore premium skincare products that nourish, protect, and enhance your natural glow.",
            iconSrc: "/assets/Frame3.png"
        },
        {
            title: "Men's Health",
            description: "Discover men's health products designed to boost energy, strength, and overall well-being.",
            iconSrc: "/assets/Frame4.png"
        },
        {
            title: "Women's Health",
            description: "Explore women's health products that support hormonal balance and overall wellness.",
            iconSrc: "/assets/Frame5.png"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="w-full mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black font-sans leading-tight">
                        Nutrition Solutions<br />for Your Complete Well-Being
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {solutions.map((item, index) => (
                        <div key={index} className="bg-[#F8FDFF] rounded-2xl p-6 flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-blue-100">

                            <div className="w-16 h-16 mb-6 relative flex-shrink-0">

                                <Image
                                    src={item.iconSrc}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-black mb-4 font-sans">{item.title}</h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-sans">
                                {item.description}
                            </p>

                            <button suppressHydrationWarning className="w-full bg-[#5B8DEF] text-white font-bold py-3 rounded-full hover:bg-blue-600 transition duration-300 text-sm font-sans">
                                Buy now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
