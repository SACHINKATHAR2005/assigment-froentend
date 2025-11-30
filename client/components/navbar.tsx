"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="w-full bg-white border-b border-gray-100 h-[84px] flex items-center"
      style={{ boxShadow: '0px 3.6px 4.8px 0px rgba(0, 0, 0, 0.10)' }}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between h-full">

        {/* Left Logo */}
        <div className="flex items-center flex-shrink-0">
          <div className="relative w-[140px] h-[60px]">
            <Image
              src="/assets/logo.jpg"
              alt="Health Desk Clinic"
              fill
              className="cursor-pointer object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Right Section: Menu & Cart */}
        <div className="flex items-center gap-8">
          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-black font-sans text-lg font-medium">
            {["Home", "Shop", "About Us", "FAQ", "Blog", "Contact Us"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#2B7CD3] transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <div className="flex items-center justify-end flex-shrink-0">
            <div className="relative w-8 h-8">
              <Image
                src="/assets/IMAGE (20).png"
                alt="Cart"
                fill
                className="cursor-pointer object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
