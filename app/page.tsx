"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Expertise from "@/components/expertise"
import Strengths from "@/components/strengths"
import Partners from "@/components/partners"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Expertise />
      <Strengths />
      <Partners />
      <CTA />
      <Footer />
    </div>
  )
}
