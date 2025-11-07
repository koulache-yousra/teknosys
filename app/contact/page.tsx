"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [isDark])

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />

      <section className="pt-28 md:pt-36 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-black">Contactez-nous</h1>
          <p className="text-foreground/70 text-lg">
            Parlons de vos projets IT. Notre équipe vous répond sous 24 heures.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="glassmorphism rounded-3xl p-10 space-y-8">
            <h2 className="text-2xl font-semibold">Coordonnées directes</h2>
            <div className="space-y-6 text-foreground/70">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:contact@teknosys.com" className="hover:text-accent">
                    contact@teknosys.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Téléphone</p>
                  <a href="tel:+21300000000" className="hover:text-accent">
                    +213 00 00 00 00
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Adresse</p>
                  <p>Centre d'affaires, Alger - Algérie</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-accent/10 border border-accent/20 p-6 space-y-2">
              <p className="text-sm uppercase text-accent font-semibold">Disponibilité</p>
              <p className="text-foreground">Du dimanche au jeudi – 9h à 18h</p>
              <p className="text-foreground/70 text-sm">Support prioritaire pour nos clients sous contrat.</p>
            </div>
          </div>

          <form className="glassmorphism rounded-3xl p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom complet</label>
                <input className="w-full rounded-xl border border-border/40 bg-background px-4 py-3" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Société</label>
                <input className="w-full rounded-xl border border-border/40 bg-background px-4 py-3" placeholder="Nom de l'entreprise" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full rounded-xl border border-border/40 bg-background px-4 py-3" placeholder="email@domaine.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Téléphone</label>
                <input className="w-full rounded-xl border border-border/40 bg-background px-4 py-3" placeholder="+213 ..." />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Sujet</label>
              <input className="w-full rounded-xl border border-border/40 bg-background px-4 py-3" placeholder="Intégration IT, support, conseil..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea className="w-full rounded-xl border border-border/40 bg-background px-4 py-3 min-h-[160px]" placeholder="Décrivez votre besoin ou votre projet" />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-400 px-8 py-3 font-semibold text-white shadow-lg shadow-rose-400/30 transition-all hover:-translate-y-0.5"
            >
              Envoyer le message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}


