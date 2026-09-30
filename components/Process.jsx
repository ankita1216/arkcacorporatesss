"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Understand", desc: "We understand your business, products and regulatory requirements." },
  { title: "Assess", desc: "We identify applicable regulations, registrations and compliance gaps." },
  { title: "Execute", desc: "Our team manages documentation, applications, certifications and regulatory processes." },
  { title: "Maintain", desc: "We help businesses stay aligned with continuing and changing compliance obligations." }
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="how" className="py-24 md:py-40 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-32 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="headline-large font-serif mb-6">
              Compliance should not slow your business down.
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              ARKCA combines regulatory knowledge, structured processes and practical business understanding to help organizations manage compliance with greater clarity and confidence.
            </p>
          </div>
        </motion.div>

        <div>
          <p className="eyebrow mb-12">06 / How We Work</p>
          
          <div className="relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-black/10">
              <motion.div 
                className="h-full bg-black origin-left"
                style={{ scaleX }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
              {steps.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col relative pt-4 md:pt-12"
                >
                  {/* Mobile animated border (replaces horizontal line) */}
                  <div className="md:hidden absolute top-0 left-0 w-8 h-[1px] bg-black" />

                  <div className="text-2xl font-serif text-gray-400 mb-6">0{i + 1}</div>
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
