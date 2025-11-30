import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Solutions from "@/components/solutions";
import BestSellers from "@/components/best-sellers";
import Trust from "@/components/trust";
import Features from "@/components/features";
import Charity from "@/components/charity";
import Testimonials from "@/components/testimonials";
import FollowUs from "@/components/follow-us";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 w-full">
      <Navbar />
      <Hero />
      <Solutions />
      <BestSellers />
      <Trust />
      <Features />
      <Charity />
      <Testimonials />
      <FollowUs />
      <Footer />
    </main>
  );
}
