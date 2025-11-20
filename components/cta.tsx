"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>

      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.2
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="rounded-3xl border border-white/10 p-12 md:p-16 text-center space-y-8 backdrop-blur-xl bg-white/5">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground/80 leading-tight">
              Vous avez un projet ?<br />
              Une question ?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-light">
              Contactez-nous pour une consultation .
            </p>
          </div>

          <Link
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105 inline-block"
          >
            Contactez-nous !
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
