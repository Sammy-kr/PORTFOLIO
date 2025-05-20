import React from 'react'
import { Spotlight } from './ui/spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import LitUpBorders from './ui/lit-up-borders'

export default function Hero() {
  return (
    <div className="min-h-[150vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-50" fill="white" />
        <Spotlight className="top-40 -left-full h-[80vh] w-[50vw] opacity-50" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] opacity-50" fill="blue" />
      </div>
      
      {/* First Section */}
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Hello, I'm Sam</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">Welcome to my portfolio</p>
        </div>
      </div>

      {/* Second Section */}
      <BackgroundBeamsWithCollision className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="uppercase tracking-widest font-bold text-white text-2xl md:text-3xl mb-8">
            welcome to next.js magic
          </h2>
          <TextGenerateEffect 
            className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8" 
            words="Transforming concepts into seamless experiences " 
          />
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Hi, I&apos;m Sam, a software engineer with a passion for building
            scalable and efficient web applications.
          </p>
          <a href="/about" className="inline-block">
            <LitUpBorders />
          </a>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}
