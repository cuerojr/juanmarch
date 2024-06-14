import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { CustomEase } from 'gsap/dist/CustomEase'
import { useEffect } from 'react'

// https://greensock.com/docs/v3/GSAP/gsap.registerPlugin()

export function useGsapPlugins() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(CustomEase) 
    ScrollTrigger.clearScrollMemory()
    // ScrollTrigger.defaults({
    //   markers: process.env.NODE_ENV === 'development',
    // })
  }, [])
}
