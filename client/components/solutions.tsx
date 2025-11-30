import Image from "next/image";

export default function Solutions() {
    const solutions = [
        {
            title: "Weight Loss",
            description: "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you.",
            icon: "/assets/Frame1.png", // Assuming icons are part of these frames or need to be extracted/replaced. Using frames as placeholders if they contain the full card visual, otherwise will need specific icons. Based on previous context, frames might be full images. Let's assume we need to build the card structure.
            // Wait, the user said "make it same to sam as it is". The screenshot shows cards with icons, text, and buttons.
            // If Frame1-5 are the full card images, I should just use them. But the previous code treated them as images.
            // The screenshot shows distinct elements: Icon, Title, Description, Button.
            // I will assume for now that I need to build the HTML structure and use placeholders or available assets for icons if not explicitly provided.
            // Actually, looking at the file list, Frame1-5 are likely the icons or the full card graphics.
            // Let's look at the previous code: it was displaying Frame1-5.
            // If Frame1.png is the whole card, I should just display it.
            // BUT, the user wants "Nutrition Solutions..." header and then the cards.
            // The screenshot shows editable text. This implies it's HTML text, not just an image.
            // I will build the card structure. I'll use the Frame images as the icons for now, assuming they might be the icons.
            // If they are full cards, I might need to adjust. Let's assume they are icons based on the "Frame" naming often used for exports.
            // Re-reading: "make it same to sam as it is".
            // I will create the data structure matching the text in the screenshot.
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
                            {/* Icon Container */}
                            <div className="w-16 h-16 mb-6 relative flex-shrink-0">
                                {/* Using the Frame images as icons. If they are full cards, this will look wrong, but I have to guess based on available assets. 
                                    Usually 'Frame' exports from Figma are the icons or the specific group. */}
                                <Image
                                    src={item.iconSrc} // Using the frames as icons
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-black mb-4 font-sans">{item.title}</h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-sans">
                                {item.description}
                            </p>

                            <button className="w-full bg-[#5B8DEF] text-white font-bold py-3 rounded-full hover:bg-blue-600 transition duration-300 text-sm font-sans">
                                Buy now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
