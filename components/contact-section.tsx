"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ajoutez ici la logique de soumission du formulaire
    console.log("Formulaire soumis:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="section bg-gradient-to-br from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-8">Contactez-nous</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Envoyer le message
              </button>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Nos coordonnées</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Adresse</h4>
                <p className="text-muted-foreground">123 Rue de l'Innovation, 75000 Paris</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-muted-foreground">contact@teknosys.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Téléphone</h4>
                <p className="text-muted-foreground">+33 1 23 45 67 89</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Horaires</h4>
                <p className="text-muted-foreground">Lun - Ven: 9h - 18h</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}