import Image from "next/image";

const trustItems = [
    {
        src: "/assets/IMAGE (1).png",
        label: "All Natural",
    },
    {
        src: "/assets/IMAGE (2).png",
        label: "Cruelty-Free",
    },
    {
        src: "/assets/IMAGE (3).png",
        label: "Money-back\nGuarantee",
    },
    {
        src: "/assets/IMAGE (4).png",
        label: "Giving back",
    },
    {
        src: "/assets/IMAGE (5).png",
        label: "Non-GMO",
    },
];

export default function Trust() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            
            <div className="absolute inset-0 w-full h-full z-0 opacity-30">
                <Image
                    src="/assets/IMAGE.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-sans">
                    A Brand That You Can Trust
                </h2>
                <p className="text-lg text-gray-700 mb-16 max-w-3xl mx-auto font-sans">
                    Our results-driven supplements are made with premium & safe ingredients
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
                    {trustItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-16 h-16 md:w-20 md:h-20 relative mb-4 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={item.src}
                                    alt={item.label.replace('\n', ' ')}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[#2B7CD3] font-medium text-sm md:text-base whitespace-pre-line leading-tight">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
