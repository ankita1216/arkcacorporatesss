"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-48 bg-black text-white relative overflow-hidden">
      {/* Background radial gradient subtle */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl max-w-[85%]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="headline-huge font-serif mb-8 text-balance">
              Not sure what your business needs to comply with?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl text-balance leading-relaxed mb-12">
              Tell us what you manufacture, import, produce or sell. We&apos;ll help you understand the regulatory requirements that may apply to your business.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="mailto:certificate@arkcacorporate.com"
              className="bg-white text-black px-8 py-5 text-xs uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors flex items-center group w-full sm:w-auto justify-center"
            >
              Check My Compliance Requirement
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919316631170"
              className="text-white border border-white/20 px-8 py-5 text-xs uppercase tracking-widest font-semibold hover:border-white transition-colors w-full sm:w-auto justify-center flex"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
