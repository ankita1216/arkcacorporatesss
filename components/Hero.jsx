"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col md:flex-row items-center bg-black overflow-hidden pt-32 pb-16">
      {/* Background SVG abstract elements */}
      <div className="absolute inset-0 z-0 opacity-[0.08] select-none pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.12" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col justify-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="eyebrow text-white/60 mb-8 border-l border-white/20 pl-4">
              Regulatory • Compliance • Certification • Advisory
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="headline-huge text-white font-serif text-balance">
              Compliance, Simplified.<br />Business, Uninterrupted.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-12 font-light text-balance leading-relaxed">
              ARKCA Corporate helps businesses navigate India&apos;s evolving regulatory landscape with expert compliance, certification, licensing and advisory solutions.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="#contact" className="bg-white text-black px-8 py-5 text-xs uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors flex items-center group w-full sm:w-auto justify-center">
              Talk to an Expert
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#what" className="text-white border border-white/20 px-8 py-5 text-xs uppercase tracking-widest font-semibold hover:border-white transition-colors w-full sm:w-auto justify-center flex">
              Explore Our Expertise
            </Link>
          </motion.div>
        </div>
        
        {/* Right Side: Editorial Image Collage */}
        <div className="relative h-[600px] w-full hidden lg:block">
          
          {/* Main Base Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[480px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image 
              src="/images/compliance.png" 
              alt="Corporate Compliance Architecture" 
              fill 
              className="object-cover scale-105" 
              sizes="(max-width: 1200px) 50vw, 800px"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 border border-white/10" />
            <div className="absolute bottom-6 left-6 border-l shrink-0 border-white/40 pl-3">
              <p className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-medium">Core Compliance</p>
            </div>
          </motion.div>

          {/* Environmental Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 60, x: -30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 bottom-4 w-64 h-80 z-20 overflow-hidden box-shadow-2xl shadow-black p-2 bg-black/60 backdrop-blur-sm border border-white/10 group"
          >
            <div className="relative w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/images/environment.png" 
                alt="Environmental Compliance" 
                fill 
                className="object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-[2s]" 
                sizes="250px"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-[10px] text-white uppercase tracking-[0.15em] font-medium">Environmental</p>
                <div className="h-[1px] w-8 bg-white mt-2" />
              </div>
            </div>
          </motion.div>

          {/* Certification Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: -40, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-12 top-12 w-56 h-64 z-10 overflow-hidden box-shadow-xl shadow-black p-2 bg-black/80 backdrop-blur-md border border-white/10 group"
          >
            <div className="relative w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/images/certification.png" 
                alt="Certifications" 
                fill 
                className="object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-[2s]" 
                sizes="220px"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <div className="absolute right-4 top-4 text-right">
                <p className="text-[10px] text-white uppercase tracking-[0.15em] font-medium">Registrations</p>
                <div className="h-[1px] w-8 bg-white ml-auto mt-2" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
