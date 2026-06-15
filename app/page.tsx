'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Navbar from '@/components/layout/Navbar'
import CharacterBg from '@/components/layout/CharacterBg'
import Hero from '@/components/sections/Hero'
import Impact from '@/components/sections/Impact'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import { Achievements, Certificates, Education, CTA, Footer } from '@/components/sections/Bottom'

export default function Home() {
  useScrollReveal()
  return (
    <>
      {/* Fixed 3D character behind entire site */}
      <CharacterBg />

      <Navbar />

      <main>
        <Hero />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certificates />
        <Education />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
