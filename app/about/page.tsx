"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import AboutHero from "@/components/about-hero"
import MissionVision from "@/components/mission-vision"
import Values from "@/components/values"
import KeyFigures from "@/components/key-figures"
import Certifications from "@/components/certifications"
import QualityCommitment from "@/components/quality-commitment"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <AboutHero />
      <MissionVision />
      <Values />
      <KeyFigures />
      <Certifications />
      <QualityCommitment />
      <Footer />
    </main>
  )
}
