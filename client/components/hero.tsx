import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full bg-[#FAFAFA] py-12 md:py-20">
            <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight font-sans">
                        Health Desk Clinic:<br />All Natural Supplements
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed font-sans max-w-xl">
                        Health Care Desk is the premier choice for those seeking wellness through wholesome, superfood-enriched formulas that actually work. Our all-natural, organic health supplements are designed to give your body what it needs to thrive and optimize your health each day!
                    </p>
                    <button className="bg-[#2B7CD3] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg cursor-pointer font-sans">
                        Shop Now
                    </button>
                </div>

                {/* Doctor Image */}
                <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] flex justify-center md:justify-end">
                    <div className="relative w-full h-full max-w-lg">
                        <Image
                            src="/assets/doctor.png"
                            alt="Doctor"
                            fill
                            className="object-contain object-center md:object-right"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
