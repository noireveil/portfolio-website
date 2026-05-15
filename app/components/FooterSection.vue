<template>
  <footer id="footer" class="relative z-10 bg-[#050505] overflow-hidden grid-line-x min-h-[50vh] flex flex-col justify-center">

    <div class="px-6 md:px-12 pt-32 pb-12 flex flex-col gap-20 relative z-10">

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div class="md:col-span-9 reveal-text">
          <h2 class="font-serif italic text-5xl md:text-7xl lg:text-[8rem] font-light tracking-tighter leading-[1.1] text-cc-text cursor-default">
            <span class="scramble-target scramble-scroll word-hover-target block" data-text="Ready to collaborate">Ready to collaborate</span>
            <span class="scramble-target scramble-scroll word-hover-target text-cc-muted block" data-text="and build together?">and build together?</span>
          </h2>
        </div>
        <div class="md:col-span-3 flex md:justify-end reveal-text pb-4">
          <button @click="scrollToTop" class="group flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-cc-muted hover:text-cc-text transition-colors duration-500 cursor-pointer">
            <span class="scramble-target scramble-scroll word-hover-target" data-text="Scroll to top">Scroll to top</span>
            <div class="w-10 h-10 rounded-full border border-cc-border flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-500 bg-[#0a0a0a]">
              &uarr;
            </div>
          </button>
        </div>
      </div>

      <div class="grid-line-x w-full h-[1px] relative opacity-50"></div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 w-full">

        <div class="md:col-span-3 flex flex-col gap-3 reveal-text">
          <span class="text-[10px] uppercase tracking-[0.25em] text-cc-muted cursor-default scramble-target scramble-scroll word-hover-target block" data-text="Current Location">Current Location</span>
          <p class="text-lg font-medium text-cc-text cursor-default scramble-target scramble-scroll word-hover-target block" data-text="Jakarta, Indonesia">Jakarta, Indonesia</p>
        </div>

        <div class="md:col-span-3 flex flex-col gap-3 reveal-text">
          <span class="text-[10px] uppercase tracking-[0.25em] text-cc-muted cursor-default scramble-target scramble-scroll word-hover-target block" data-text="Local Timezone">Local Timezone</span>
          <p class="text-lg font-medium text-cc-text uppercase cursor-default word-hover-target block">{{ currentTime }}</p>
        </div>

        <div class="md:col-span-6 flex flex-col gap-8 md:items-end reveal-text">
           <span class="text-[10px] uppercase tracking-[0.25em] text-cc-muted md:text-right cursor-default scramble-target scramble-scroll word-hover-target block" data-text="Wanna be my friend?">Wanna be my friend?</span>
           <div class="flex flex-wrap gap-4">
              <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank" class="w-14 h-14 rounded-full border border-cc-border bg-[#0a0a0a] flex items-center justify-center transition-all duration-500 group hover:bg-cc-text hover:border-cc-text cursor-pointer text-cc-text hover:text-cc-bg shadow-2xl">
                <span v-html="social.svg" class="w-6 h-6 flex items-center justify-center transition-colors duration-500"></span>
              </a>
           </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-cc-border/20 gap-6">
        <p class="text-[10px] uppercase tracking-widest text-cc-muted opacity-50 cursor-default scramble-target scramble-scroll word-hover-target block" :data-text="'© ' + new Date().getFullYear() + ' Muhammad Yasyfi Alhafizh.'">
          &copy; {{ new Date().getFullYear() }} Muhammad Yasyfi Alhafizh.
        </p>
        <div class="flex gap-8 text-[10px] uppercase tracking-widest text-cc-muted opacity-50 cursor-default">
          <span class="scramble-target scramble-scroll word-hover-target block" data-text="Built with Nuxt.js">Built with Nuxt.js</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
let timer: any

const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/yasyfialhafizh',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/yasyfialhafizh',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
  },
  {
    name: 'Telegram',
    link: 'https://t.me/yasyfialhafizh',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/yasyfialhafizh',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>'
  }
]

const updateTime = () => {
  const now = new Date()
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }
  currentTime.value = new Intl.DateTimeFormat('en-US', options).format(now) + ' GMT+7'
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>