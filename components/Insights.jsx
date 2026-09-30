"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  { cat: "BIS", title: "Understanding BIS certification requirements for manufacturers and importers", date: "Sep 2026" },
  { cat: "EPR", title: "CPCB deadlines: what producers and importers should prepare for", date: "Aug 2026" },
  { cat: "Compliance", title: "Why regulatory gap analysis should come before registration", date: "Jul 2026" }
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 md:py-40 bg-offwhite text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="eyebrow mb-6">08 / Insights</p>
            <h2 className="headline-large font-serif">Regulatory Intelligence</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-sm">
            Clear insights for businesses navigating a changing regulatory environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="group flex flex-col h-full border-t border-black/20 pt-8 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="eyebrow !mb-0">{post.cat}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">{post.date}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-serif text-balance mb-12 leading-tight group-hover:text-gray-600 transition-colors duration-500">
                {post.title}
              </h3>

              <div className="mt-auto pt-8 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-semibold">Read article</span>
                <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
