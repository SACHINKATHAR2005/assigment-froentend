
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            product: "TestoBites",
            image: "/assets/IMAGE (16).png",
            text: "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
            name: "Ryan R."
        },
        {
            product: "Vita Renew",
            image: "/assets/IMAGE (17).png",
            text: "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
            name: "Jamie Fields"
        },
        {
            product: "Nerve Freedom",
            image: "/assets/IMAGE (18).png",
            text: "I have been an RN for 20 years and love helping people find solutions to their health issues.NF Product is the best natural product for neuropathy pain hands down.",
            name: "Anonymous"
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black font-sans">Verified Customer Testimonials</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="relative p-8 rounded-xl min-h-[320px] flex flex-col justify-between group bg-[#F0F9FB]">
                            {/* Card Background Image */}
                            <div className="absolute inset-0 w-full h-full z-0 rounded-xl overflow-hidden">
                                <Image
                                    src="/assets/IMAGE (19).png"
                                    alt="Background Pattern"
                                    fill
                                    className="object-cover opacity-100"
                                />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-5 mb-6">
                                    <div className="relative w-20 h-32 flex-shrink-0 -mt-16 -ml-2">
                                        <Image
                                            src={t.image}
                                            alt={t.product}
                                            fill
                                            className="object-contain object-top drop-shadow-md"
                                        />
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-lg text-black font-sans mb-1">{t.product}</h4>
                                        <div className="relative w-20 h-4">
                                            <Image
                                                src="/assets/stars.png"
                                                alt="5 stars"
                                                fill
                                                className="object-contain object-left"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-6 leading-relaxed font-sans text-sm">
                                    {t.text}
                                </p>
                            </div>
                            <p className="relative z-10 text-sm text-gray-900 font-medium font-sans">
                                - {t.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
