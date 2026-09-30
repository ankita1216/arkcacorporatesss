"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Col */}
          <div className="lg:pr-8">
            <Link href="#top" className="text-xl font-bold tracking-[0.08em] uppercase flex items-center group mb-6">
              ARKCA<span className="font-light tracking-[0.02em] ml-1 text-white/80"> Corporate</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed text-balance">
              Strategic regulatory compliance, certification and advisory solutions for businesses across India.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold mb-6">Company</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: "Who We Are", href: "#who" },
                { label: "Who We Serve", href: "#serve" },
                { label: "What We Do", href: "#what" },
                { label: "Insights", href: "#insights" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm w-max">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Compliance Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold mb-6">Compliance</h4>
            <div className="flex flex-wrap flex-col gap-4 max-h-48 md:max-h-none h-fit w-max pr-8 lg:pr-0">
              {['EPR', 'BIS', 'CDSCO', 'WPC', 'GST', 'IEC', 'ROC', 'Certifications'].map((l) => (
                <Link key={l} href="#what" className="text-gray-400 hover:text-white transition-colors text-sm w-max">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-white/40 font-semibold mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:certificate@arkcacorporate.com" className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                certificate@arkcacorporate.com
              </a>
              <a href="tel:+919316631170" className="text-gray-400 hover:text-white transition-colors text-sm">
                +91 9316631170
              </a>
              <p className="text-gray-600 text-sm mt-4">
                Serving businesses India-wide.
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} ARKCA Corporate. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-white transition-colors text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
