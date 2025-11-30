import Image from "next/image";

export default function FollowUs() {
    const socialIcons = [
        { name: "Facebook", src: "/assets/Facebook.png" },
        { name: "Twitter", src: "/assets/Twitter.png" },
        { name: "Telegram", src: "/assets/Telegram.png" },
        { name: "LinkedIn", src: "/assets/LinkedIn.png" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
                <div className="flex justify-center mb-10">
                    <div className="relative w-64 h-16">
                        <Image
                            src="/assets/follo-us logo.png"
                            alt="Health Desk Clinic"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <button className="border border-[#2B7CD3] text-[#2B7CD3] px-12 py-3 text-lg font-medium hover:bg-blue-50 transition duration-300 cursor-pointer mb-10 font-sans">
                    Follow Us
                </button>

                <div className="flex justify-center gap-6">
                    {socialIcons.map((social, index) => (
                        <div
                            key={index}
                            className="relative w-10 h-10 cursor-pointer hover:scale-110 transition duration-300"
                            title={social.name}
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


