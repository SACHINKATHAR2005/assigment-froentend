import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white w-full">

            <section className="bg-[#FAFAFA] py-16 w-full">
                <div className="w-full px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                        <div>
                            <h3 className="text-xl font-bold mb-4 text-black font-sans">Have a Question?</h3>
                            <p className="text-gray-600 mb-6 font-sans">
                                Check out our FAQs where we answer the most commonly asked questions
                            </p>
                            <button suppressHydrationWarning className="border border-[#2B7CD3] text-[#2B7CD3] px-8 py-2 text-sm font-medium hover:bg-blue-50 transition cursor-pointer font-sans">
                                Read FAQs
                            </button>
                        </div>


                        <div>
                            <h3 className="text-xl font-bold mb-4 text-black font-sans">Connect With Us</h3>
                            <p className="text-gray-600 mb-6 font-sans">
                                Enjoy free shipping for all orders.
                            </p>
                            <p className="text-xl font-bold text-black font-sans">
                                1-800-822-7777
                            </p>
                        </div>


                        <div>
                            <h3 className="text-xl font-bold mb-4 text-black font-sans">We're Social</h3>
                            <p className="text-gray-600 mb-6 font-sans">
                                Like us, love us, follow us!
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-[#1D65C1] text-white py-16 w-full">
                <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 font-sans">Let's Grow Together</h2>
                        <p className="text-blue-100 font-sans text-lg">We'll keep it simple. Only the news and updates you need.</p>
                    </div>
                    <div className="flex w-full md:w-auto max-w-lg">
                        <input
                            suppressHydrationWarning
                            type="email"
                            placeholder="Please Enter Your Email"
                            className="w-full md:w-96 px-6 py-3 text-gray-900 focus:outline-none font-sans text-base bg-[#1656A8] placeholder-blue-300 text-white border border-blue-400"
                        />
                        <button suppressHydrationWarning className="bg-white text-black px-10 py-3 font-bold hover:bg-gray-100 transition cursor-pointer whitespace-nowrap font-sans text-base">
                            Submit
                        </button>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-white w-full">
                <div className="w-full px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-200 pb-16">

                        <div className="md:col-span-1">
                            <div className="relative w-48 h-12 mb-8">
                                <Image
                                    src="/assets/logo.jpg"
                                    alt="Health Desk Clinic"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <div className="text-base text-gray-500 space-y-2 font-sans">
                                <p>Address: 7623 Red Oak Trail, Austin,</p>
                                <p>TX, 78745, United States <span className="mx-1">|</span> Phone: (512) 555-2376</p>
                                <p>Email: Ereforce@outlook.com</p>
                            </div>
                        </div>


                        <div className="md:col-span-3 md:border-l md:border-gray-200 md:pl-12">
                            <h4 className="font-bold text-[#2B7CD3] mb-8 font-sans text-xl">Our Products</h4>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-8 text-base text-gray-500 font-sans">
                                <span>Vita Renew</span>
                                <span>Vita Renew</span>
                                <span>Vita Renew</span>
                                <span>Vita Renew</span>
                                <span>Vita Renew</span>

                                <span>TestoBites</span>
                                <span>TestoBites</span>
                                <span>TestoBites</span>
                                <span>TestoBites</span>
                                <span>TestoBites</span>

                                <span>Audizen</span>
                                <span>Audizen</span>
                                <span>Audizen</span>
                                <span>Audizen</span>
                                <span>Audizen</span>

                                <span>Nerve Flow</span>
                                <span>Nerve Flow</span>
                                <span>Nerve Flow</span>
                                <span>Nerve Flow</span>
                                <span>Nerve Flow</span>

                                <span>Uro flow</span>
                                <span>Memof</span>
                                <span>Derma care</span>
                                <span>TestoZen</span>
                                <span>True Fem</span>
                            </div>
                        </div>
                    </div>


                    <div className="text-center mb-10">
                        <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-5xl mx-auto">
                            These statements have not been evaluated by the Food and Drug Administration.
                            These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
                        </p>
                    </div>


                    <div className="flex justify-center mb-10">
                        <div className="relative w-72 h-10">
                            <Image
                                src="/assets/credit cards accepted.png"
                                alt="Accepted Credit Cards"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-sans border-t border-gray-100 pt-10">
                        <p>© 2025, Health Desk Clinic. All Rights Reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0 items-center">
                            <span className="cursor-pointer hover:text-blue-600">Terms And Conditions</span>
                            <span className="text-gray-300">|</span>
                            <span className="cursor-pointer hover:text-blue-600">Privacy Policy</span>
                            <span className="text-gray-300">|</span>
                            <span className="cursor-pointer hover:text-blue-600">Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
