<template>
  <section id="experience" class="py-24 md:py-48 grid-line-x bg-cc-bg relative overflow-hidden flex flex-col items-center justify-center">
    <h2 class="text-xs text-cc-muted uppercase tracking-widest mb-16 reveal-text cursor-default word-hover-target">Verified Credentials & Certifications</h2>

    <div class="marquee-container w-full transform -rotate-2 scale-110">
      <div class="marquee-track px-4 gap-12 text-4xl md:text-7xl font-medium tracking-tighter uppercase text-cc-text">
        <span v-for="item in certificates" :key="item" class="cursor-default word-hover-target">{{ item }} <span class="font-serif italic text-cc-border mx-4">*</span></span>
      </div>
      <div class="marquee-track px-4 gap-12 text-4xl md:text-7xl font-medium tracking-tighter uppercase text-cc-text" aria-hidden="true">
        <span v-for="item in certificates" :key="item + '-copy'" class="cursor-default word-hover-target">{{ item }} <span class="font-serif italic text-cc-border mx-4">*</span></span>
      </div>
    </div>

    <div class="marquee-container-reverse w-full transform -rotate-2 scale-110 mt-8">
      <div class="marquee-track-reverse flex px-4 gap-12 text-4xl md:text-7xl font-medium tracking-tighter uppercase text-cc-border">
        <span v-for="item in certificates.slice().reverse()" :key="item + '-rev'" class="cursor-default word-hover-target">{{ item }} <span class="font-serif italic text-cc-muted mx-4">*</span></span>
      </div>
      <div class="marquee-track-reverse flex px-4 gap-12 text-4xl md:text-7xl font-medium tracking-tighter uppercase text-cc-border" aria-hidden="true">
        <span v-for="item in certificates.slice().reverse()" :key="item + '-rev-copy'" class="cursor-default word-hover-target">{{ item }} <span class="font-serif italic text-cc-muted mx-4">*</span></span>
      </div>
    </div>

    <div class="mt-32 reveal-text">
      <button class="group relative inline-flex items-center gap-6 text-sm md:text-lg uppercase tracking-widest font-medium overflow-hidden">
        <span class="relative z-10 text-cc-text word-hover-target cursor-pointer">Download Full Curriculum Vitae</span>
        <div class="w-12 h-[1px] bg-cc-text transition-all duration-500 group-hover:w-24 group-hover:bg-cc-muted"></div>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const certificates = [
  'Google Cybersecurity',
  'Cisco Ethical Hacker',
  'CAT Tournament 2026',
  'Waskita Manunggal Siber CTF',
  'Find It CTF UGM'
]

let ctx: any

onMounted(() => {
  const { $gsap } = useNuxtApp()

  ctx = $gsap.context(() => {
    $gsap.to('.marquee-track-reverse', {
      xPercent: 100,
      repeat: -1,
      duration: 35,
      ease: 'none',
      startAt: { xPercent: -100 }
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<style scoped>
.marquee-track-reverse {
  flex-shrink: 0;
  min-width: 100%;
  align-items: center;
  justify-content: space-around;
}
</style>