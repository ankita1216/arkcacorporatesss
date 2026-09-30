"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Who We Are", href: "#who" },
  { label: "Who We Serve", href: "#serve" },
  { label: "What We Do", href: "#what" },
  { label: "Why ARKCA", href: "#why" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-500",
          scrolled ? "bg-black/90 backdrop-blur-xl py-4 border-b border-white/10 shadow-sm shadow-black/20" : "bg-transparent text-white"
        )}
      >
        <Link href="#top" className="text-lg md:text-xl font-bold tracking-[0.08em] uppercase flex items-center group">
          ARKCA<span className="font-light tracking-[0.02em] ml-1 text-white/80 group-hover:text-white transition-colors"> Corporate</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link href="#contact" className="border border-white/30 hover:border-white text-white px-6 py-3 text-xs uppercase tracking-widest font-medium transition-all group flex items-center gap-2">
            Talk to an Expert
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white outline-none p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-8 pt-20 px-6"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-medium tracking-tight text-white hover:text-white/70 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 mx-auto self-center"
            >
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="border border-white text-white px-8 py-4 text-sm uppercase tracking-widest font-medium flex items-center justify-center w-full min-w-[200px]"
              >
                Talk to an Expert →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
