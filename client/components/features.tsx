import Image from "next/image";

export default function Features() {
    return (
        <div className="space-y-20 pb-20 pt-10 bg-white">
            {/* Header for this section area */}
            <section className="text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black font-sans">Health Care Desk</h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 font-sans">The Future Of Smart Health</h3>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto font-sans">
                        At Health Care Desk, we are committed to producing supplements that harness the power of all-natural
                        superfoods. Our products help support the body's natural processes, improving our customers' quality of
                        life.
                    </p>
                </div>
            </section>

            {/* Feature 1 - Image Left */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex items-center justify-center">
                    <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image
                            src="/assets/IMAGE (6).png"
                            alt="100% Natural Components"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-2 text-black font-sans">100% Natural Components</h3>
                    <p className="text-lg font-semibold mb-4 text-black font-sans">Nature-Powered Wellness You Can Trust</p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans max-w-lg">
                        We harness the goodness of nature to create supplements enriched with premium, research-backed superfood
                        extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At
                        Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every
                        product you choose is both effective and trustworthy.
                    </p>
                    <button className="border border-[#2B7CD3] text-[#2B7CD3] px-8 py-2 rounded-none text-sm font-medium hover:bg-blue-50 transition cursor-pointer font-sans">
                        Learn More
                    </button>
                </div>
            </section>

            {/* Feature 2 - Image Right */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2 flex items-center justify-center">
                    <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image
                            src="/assets/IMAGE (7).png"
                            alt="Research-Backed Formulations"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-2 text-black font-sans">Research-Backed Formulations</h3>
                    <p className="text-lg font-semibold mb-4 text-black font-sans">Formulated with Clinically Tested Ingredients</p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans max-w-lg">
                        We combine the expertise of our physicians with the latest health data and medical research, ensuring every
                        supplement is thoughtfully formulated for maximum benefit.
                    </p>
                    <button className="border border-[#2B7CD3] text-[#2B7CD3] px-8 py-2 rounded-none text-sm font-medium hover:bg-blue-50 transition cursor-pointer font-sans">
                        Learn More
                    </button>
                </div>
            </section>

            {/* Feature 3 - Image Left */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex items-center justify-center">
                    <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image
                            src="/assets/IMAGE (8).png"
                            alt="Eco-Conscious Manufacturing"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-2 text-black font-sans">Eco-Conscious Manufacturing</h3>
                    <p className="text-lg font-semibold mb-4 text-black font-sans">Sustainable from Source to Shelf</p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans max-w-lg">
                        Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring
                        exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to
                        reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for
                        you.
                    </p>
                    <button className="border border-[#2B7CD3] text-[#2B7CD3] px-8 py-2 rounded-none text-sm font-medium hover:bg-blue-50 transition cursor-pointer font-sans">
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    );
}
