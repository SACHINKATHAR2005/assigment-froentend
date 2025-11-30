import Image from "next/image";

export default function BestSellers() {
    const products = [
        { name: "Dent Pure", image: "/assets/Rectangle1.png" },
        { name: "True Fem", image: "/assets/Rectangle2.png" },
        { name: "Vita Renew", image: "/assets/Rectangle3.png" },
        { name: "ProstaZen", image: "/assets/Rectangle4.png" },
        { name: "Nerve Freedom", image: "/assets/Rectangle5.png" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="w-full mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-bold mb-4 text-black font-sans">Our Best Sellers</h2>
                <p className="text-gray-800 mb-8 font-sans text-lg">
                    Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-12 text-black font-bold font-sans text-lg">
                    <span>Results-Driven</span>
                    <div className="h-6 w-[2px] bg-black"></div>
                    <span>All-Natural</span>
                    <div className="h-6 w-[2px] bg-black"></div>
                    <span>Non-GMO</span>
                    <div className="h-6 w-[2px] bg-black"></div>
                    <span>Cruelty-Free</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Product Image Container */}
                            <div className="w-full bg-[#F9F9F9] rounded-xl mb-6 flex items-center justify-center p-4 aspect-[4/5] relative">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Product Name */}
                            <h3 className="font-bold mb-2 text-black text-center font-sans text-xl">
                                {product.name}
                            </h3>

                            {/* Rating Stars */}
                            <div className="relative w-24 h-5 mb-4">
                                <Image
                                    src="/assets/stars.png"
                                    alt="5 star rating"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Shop Now Button */}
                            <button className="border border-[#2B7CD3] text-[#2B7CD3] px-8 py-2 text-base font-medium hover:bg-blue-50 transition cursor-pointer font-sans w-full max-w-[160px]">
                                Shop Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
