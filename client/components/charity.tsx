import Image from "next/image";

export default function Charity() {
    const charities = [
        { name: "Prostate Cancer Foundation", src: "/assets/IMAGE (10).png" },
        { name: "American Tinnitus Association", src: "/assets/IMAGE (11).png" },
        { name: "U.S. Pain Foundation", src: "/assets/IMAGE (12).png" },
        { name: "American Diabetes Association", src: "/assets/IMAGE (13).png" },
        { name: "American Heart Association", src: "/assets/IMAGE (14).png" }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/assets/IMAGE (9).png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans">Our Charitable Initiatives</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 font-sans">Health Care Desk Gives Back</h3>
                <p className="max-w-4xl mx-auto mb-16 text-lg md:text-xl font-sans leading-relaxed">
                    At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.
                </p>

                <div className="flex flex-nowrap justify-center items-center gap-4 md:gap-8 lg:gap-12 w-full overflow-x-auto md:overflow-visible no-scrollbar">
                    {charities.map((charity, i) => (
                        <div key={i} className="relative h-10 w-24 md:h-16 md:w-40 lg:w-48 flex-shrink-0">
                            <Image
                                src={charity.src}
                                alt={charity.name}
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
