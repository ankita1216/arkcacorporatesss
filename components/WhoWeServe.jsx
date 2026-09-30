"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const serve = [
  {
    title: "Manufacturers",
    desc: "For businesses manufacturing products that must meet environmental, safety, quality and regulatory requirements."
  },
  {
    title: "Importers",
    desc: "For businesses bringing regulated products, materials or equipment into India and navigating applicable registrations, approvals and compliance requirements."
  },
  {
    title: "Producers",
    desc: "For producers with regulatory responsibilities across product lifecycle, environmental compliance and applicable EPR frameworks."
  },
  {
    title: "Brand Owners",
    desc: "For brands that need to manage regulatory obligations while building scalable and compliant operations."
  }
];

export default function WhoWeServe() {
  return (
    <section id="serve" className="py-24 md:py-40 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <p className="eyebrow mb-6">02 / Who We Serve</p>
          <h2 className="headline-large font-serif max-w-3xl text-balance">
            Compliance support built around the realities of your business.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serve.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[380px] p-8 border border-black/10 bg-offwhite hover:bg-black hover:text-white transition-colors duration-500 flex flex-col cursor-pointer overflow-hidden"
            >
              <div className="text-4xl font-serif text-gray-400 group-hover:text-white/40 transition-colors duration-500 mb-auto">
                0{i + 1}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed max-w-[90%]">
                  {item.desc}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10">
                <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
