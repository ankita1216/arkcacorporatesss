"use client";
import { motion } from "framer-motion";

const why = [
  { title: "Regulatory Expertise", desc: "Deep understanding of India's evolving regulatory and compliance landscape." },
  { title: "End-to-End Support", desc: "From initial assessment and documentation to registration, certification and ongoing compliance." },
  { title: "Practical Guidance", desc: "We translate complex regulations into clear, actionable steps for businesses." },
  { title: "Process Transparency", desc: "Clear documentation, defined processes and visibility throughout the engagement." },
  { title: "Long-Term Partnership", desc: "We don't just help businesses obtain registrations — we help them stay prepared for continuing obligations." }
];

export default function WhyArkca() {
  return (
    <section id="why" className="py-24 md:py-40 bg-black text-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 md:mb-32"
        >
          <p className="eyebrow text-white/40 mb-6">04 / Why ARKCA</p>
          <h2 className="headline-large font-serif">Why Businesses Choose ARKCA</h2>
        </motion.div>

        <div>
          {why.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1.5fr_1fr] gap-6 md:gap-12 items-baseline py-12 md:py-16 border-t border-white/10 hover:border-white/30 transition-colors duration-500 relative"
            >
              <div className="text-2xl md:text-3xl font-serif text-white/20 group-hover:text-white/60 transition-colors duration-500">
                0{i + 1}
              </div>
              <h3 className="text-3xl md:text-5xl lg:text-[4rem] tracking-tight font-serif uppercase leading-[1.05] group-hover:pl-4 transition-all duration-500">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white/80 transition-colors duration-500 text-lg max-w-md ml-auto md:ml-0">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
