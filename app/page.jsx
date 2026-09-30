import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import WhoWeServe from "@/components/WhoWeServe";
import WhatWeDo from "@/components/WhatWeDo";
import WhyArkca from "@/components/WhyArkca";
import Process from "@/components/Process";
import Insights from "@/components/Insights";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-offwhite text-black min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhoWeServe />
      <WhatWeDo />
      <WhyArkca />
      <Process />
      <Insights />
      <FinalCTA />
      <Footer />
    </main>
  );
}
