import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type Lenis from '@studio-freight/lenis'

declare module '#app' {
  interface NuxtApp {
    $gsap: typeof gsap
    $ScrollTrigger: typeof ScrollTrigger
    $lenis: InstanceType<typeof Lenis> | null
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $gsap: typeof gsap
    $ScrollTrigger: typeof ScrollTrigger
    $lenis: InstanceType<typeof Lenis> | null
  }
}

export {}