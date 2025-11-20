"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-white/10 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-bold text-lg text-white">TEKNOSYS</div>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              We understand the ever-growing threat landscape of the digital world.
            </p>
            <div className="flex gap-3 pt-4">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-accent/20 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm">Quick link</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Références", path: "/references" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.path} 
                    className="text-white/60 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

{/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm">Contact</h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+88123456987"
                className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>‪+213 20301061</span>
              </a>
              <a
                href="mailto:support@kitpapa.com"
                className="flex items-start gap-3 text-white/60 hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>sales@teknosysgroup.com </span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Algerie - Alger</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 text-center">Copyright © 2025 teknosysgroup.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
