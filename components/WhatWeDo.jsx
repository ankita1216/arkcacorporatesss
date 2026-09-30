"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Environmental & EPR Compliance",
    desc: "Plastic Waste · E-Waste · Battery Waste · Tyre Waste · Used Oil · ELV · Packaging · Other EPR frameworks",
  },
  {
    title: "Regulatory Registrations & Certifications",
    desc: "BIS · CDSCO · WPC · FSSAI · ISO · LMPC · APEDA · MPEDA · MSME",
  },
  {
    title: "Corporate & Business Compliance",
    desc: "Company Formation · GST · ROC Compliance · DPIIT · LLP · OPC · RCMC · Corporate filings",
  },
  {
    title: "Import, Export & Trade Compliance",
    desc: "IEC · ICEGATE · AD Code · SCOMET · DGFT-related approvals",
  },
  {
    title: "Regulatory Advisory & Ongoing Compliance",
    desc: "Compliance assessment · Gap analysis · Documentation · Renewals · Returns · Monitoring",
  }
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);

  return (
    <section id="what" className="py-24 md:py-40 bg-offwhite text-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <p className="eyebrow mb-6">03 / What We Do</p>
          <h2 className="headline-large font-serif max-w-4xl text-balance">
            From registration to ongoing compliance, we manage the regulatory details behind your business.
          </h2>
        </motion.div>

        <div className="border-t border-black/20">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setActive(i)}
              className="group border-b border-black/20 cursor-pointer overflow-hidden transition-all duration-500"
            >
              <div className="py-8 md:py-10 grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_1fr_auto] gap-4 md:gap-8 items-center px-4 -mx-4 hover:bg-white transition-colors duration-500">
                <span className="text-xl md:text-2xl font-serif text-gray-400 group-hover:text-black transition-colors">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-2 group-hover:pl-4 transition-all duration-500">
                    {item.title}
                  </h3>
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mt-4 group-hover:pl-4 transition-all duration-500 text-sm md:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="w-12 h-12 flex items-center justify-center transform origin-center transition-transform duration-500 group-hover:-rotate-45">
                  <ArrowRight className="w-6 h-6 text-black/30 group-hover:text-black transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
