"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from "@/components/header"
import Footer from "@/components/footer"
import PartnerForm from '@/components/PartnerForm'
import { partners, type Partner } from "@/data/partners"

export default function PartnersPage() {
  const [isDark, setIsDark] = useState(false)
  const [showForm, setShowForm] = useState(false)

  // Gestion du thème
  useEffect(() => {
    
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
  
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const partnersByCategory = partners.reduce<Record<string, Partner[]>>((acc, partner) => {
    const key = partner.category ?? "Autres"
    if (!acc[key]) acc[key] = []
    acc[key].push(partner)
    return acc
  }, {})

  const categories = Object.entries(partnersByCategory)

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} setIsDark={toggleTheme} />

      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-black">Partenaires technologiques</h1>
          <p className="text-foreground/70 text-lg">
            Un réseau de fabricants internationaux pour garantir des solutions fiables, durables et évolutives.
          </p>
        </div>
      </section>

      <motion.section id="partners" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 space-y-16">
        {categories.map(([category, items]) => (
          <div key={category} className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <span className="text-sm uppercase tracking-widest text-foreground/60">{category}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{category}</h2>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((partner, index) => {
                // Animation variants
                const cardVariants = {
                  offscreen: {
                    y: 50,
                    opacity: 0
                  },
                  onscreen: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.4,
                      duration: 0.8,
                      delay: index * 0.1
                    }
                  },
                  hover: {
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }
                };

                return (
                  <motion.a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative rounded-3xl p-8 flex flex-col gap-6 overflow-hidden"
                    initial="offscreen"
                    whileInView="onscreen"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-background to-slate-100 dark:to-slate-900/50 rounded-3xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex items-center justify-center h-20">
                      <motion.div 
                        className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-h-14 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300" 
                        />
                      </motion.div>
                    </div>
                    
                    <div className="relative z-10 space-y-3 text-center">
                      <motion.h3 
                        className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                        whileHover={{ 
                          backgroundImage: 'linear-gradient(to right, var(--accent), var(--accent-light))',
                          transition: { duration: 0.3 }
                        }}
                      >
                        {partner.name}
                      </motion.h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {partner.description}
                      </p>
                      <motion.span 
                        className="inline-flex items-center justify-center text-xs font-semibold text-accent/80 group-hover:text-accent transition-colors"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        Visiter le site <span className="ml-1">→</span>
                      </motion.span>
                    </div>
                    
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-all duration-500" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        ))}
        
        <motion.section 
          id="devenir-partenaire" 
          className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto glassmorphism rounded-3xl p-10 md:p-14 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Vous êtes un partenaire potentiel ?
            </motion.h2>
            <p className="mt-3 text-foreground/70">Nous recherchons des partenaires et distributeurs stratégiques.</p>
            <div className="mt-6">
              <button 
                onClick={() => setShowForm(true)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-rose-400/40"
              >
                Remplir le formulaire
              </button>
            </div>
          </div>
        </motion.section>
      </motion.section>
      <Footer />
      {showForm && <PartnerForm onClose={() => setShowForm(false)} />}
    </main>
  )
}