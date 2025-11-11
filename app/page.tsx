import { HeroHeader } from '@/components/header'
import HeroSection from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import React from 'react'

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <HeroSection />
    </div>
  )
}

export default Home