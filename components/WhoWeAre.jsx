"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    // A simplified counter that relies on RAF
    let startTime;
    const duration = 2000;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * to));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, to]);

  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

export default function WhoWeAre() {
  return (
    <section id="who" className="py-24 md:py-40 bg-offwhite text-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 relative">
          {/* Left Side */}
          <div className="relative">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="eyebrow sticky top-32"
            >
              01 / The ARKCA Approach
            </motion.p>
          </div>

          {/* Right Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="headline-large font-serif mb-12 text-balance leading-[1.1]"
            >
              We turn regulatory complexity into business clarity.
            </motion.h2>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="space-y-6 text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl"
            >
              <p>
                ARKCA Corporate is a regulatory compliance consultancy helping businesses navigate complex legal, environmental, certification and corporate requirements.
              </p>
              <p>
                We simplify regulatory processes, identify compliance obligations, manage documentation and help businesses stay aligned with evolving regulations — allowing leadership teams to focus on growth.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-12"
        >
          <div>
            <div className="text-5xl md:text-6xl font-serif mb-2 tracking-tight">
              <Counter to={15000} suffix="+" />
            </div>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">Businesses Served</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-serif mb-2 tracking-tight">
              India-wide
            </div>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">Compliance Expertise</p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-serif mb-2 tracking-tight">
              Regulatory
            </div>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">First Advisory Approach</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
