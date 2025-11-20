"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Diallo",
    role: "CTO",
    company: "Groupe Technologique",
    content: "TeknoSys a transformé notre infrastructure IT. Leur expertise en cybersécurité est exceptionnelle.",
    rating: 5,
  },
  {
    name: "Fatima Toure",
    role: "Directrice Digitale",
    company: "Banque Régionale",
    content: "L'implémentation de SAP s'est déroulée sans interruption. Une équipe fiable et réactive.",
    rating: 5,
  },
  {
    name: "Jean-Luc Kessou",
    role: "VP Infrastructure",
    company: "Conglomérat Africain",
    content: "Réduction de 40% des coûts IT tout en renforçant la sécurité. Un partenaire innovant.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
            Nos <span className="text-accent">clients</span> parlent
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl p-8 border bg-white shadow-xl border-slate-200/70 dark:bg-white/5 dark:border-white/10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 mb-8 leading-relaxed italic font-light">"{testimonial.content}"</p>

              <div className="border-t border-border/30 pt-6">
                <div className="font-bold text-foreground text-sm">{testimonial.name}</div>
                <div className="text-xs text-foreground/60 mt-1">{testimonial.role}</div>
                <div className="text-xs text-accent mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
