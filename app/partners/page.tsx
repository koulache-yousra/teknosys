"use client"

import { useState, useEffect } from 'react'
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

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 space-y-16">
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
              {items.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group glassmorphism rounded-3xl p-8 flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-[0_0_40px_rgba(217,70,239,0.25)]"
                >
                  <div className="flex items-center justify-center h-20">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-semibold text-foreground">{partner.name}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{partner.description}</p>
                    <span className="inline-flex items-center justify-center text-xs font-semibold text-accent/80">
                      Visiter le site ➜
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <section id="devenir-partenaire" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="max-w-6xl mx-auto glassmorphism rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Vous êtes un partenaire potentiel ?</h2>
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
        </section>
      </section>

      <Footer />
      {showForm && <PartnerForm onClose={() => setShowForm(false)} />}
    </main>
  )
}