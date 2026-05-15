<template>
  <div>
    <nav class="fixed top-0 w-full z-[100] px-6 md:px-12 py-10 flex justify-between items-start pointer-events-none transition-all duration-500">
      <NuxtLink to="/" :class="['flex items-start gap-1 font-medium text-lg md:text-xl tracking-widest uppercase text-cc-text hover:text-cc-muted transition-all duration-500 whitespace-nowrap pointer-events-auto', (isMenuOpen || showFloatingDock) ? 'opacity-0 pointer-events-none' : 'opacity-100']">
        MUHAMMAD YASYFI ALHAFIZH<span class="text-[10px] md:text-xs text-cc-muted mt-[2px] md:mt-[4px]">&copy;</span>
      </NuxtLink>

      <div class="flex items-center gap-8 md:gap-12 pointer-events-auto">
        <div @click="navigateToWorks" :class="['hidden md:flex items-center cursor-pointer group transition-all duration-500', (isMenuOpen || showFloatingDock) ? 'opacity-0 pointer-events-none' : 'opacity-100']">
          <span class="text-xs md:text-sm font-medium tracking-widest uppercase text-cc-text group-hover:text-cc-muted transition-colors">
            <span class="scramble-target scramble-works" data-text="View Works">View Works</span>
          </span>
        </div>

        <button @click="toggleMenu" :class="['relative w-8 h-8 flex flex-col items-end justify-center group transition-all duration-500 z-[120]', (showFloatingDock && !isMenuOpen) ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto']">
          <div :class="['h-[1.5px] bg-white transition-all duration-500 ease-in-out absolute right-0 origin-center', isMenuOpen ? 'w-8 rotate-45 top-1/2 -mt-[0.75px]' : 'w-8 top-[35%]']"></div>
          <div :class="['h-[1.5px] bg-white transition-all duration-500 ease-in-out absolute right-0 origin-center', isMenuOpen ? 'w-8 -rotate-45 top-1/2 -mt-[0.75px]' : 'w-[60%] top-[65%] group-hover:w-8']"></div>
        </button>
      </div>
    </nav>

    <Transition name="fade">
      <div v-if="showFloatingDock && !isMenuOpen" class="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-12 z-[80] flex items-center gap-2 p-2 bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <button @click="goHome" class="w-12 h-12 rounded-full flex items-center justify-center bg-cc-text text-black hover:scale-110 transition-transform pointer-events-auto">
           <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
           </svg>
        </button>
        <button @click="toggleMenu" class="relative w-12 h-12 rounded-full flex flex-col items-end justify-center gap-1.5 border border-white/20 hover:bg-white/10 transition-colors pointer-events-auto px-[14px]">
          <div class="w-full h-[1.5px] bg-white transition-all duration-300"></div>
          <div class="w-[60%] h-[1.5px] bg-white transition-all duration-300"></div>
        </button>
      </div>
    </Transition>

    <Transition name="overlay">
      <div v-if="isMenuOpen" @touchmove.prevent class="fixed inset-0 z-[90] bg-[#050505]/60 backdrop-blur-2xl flex flex-col h-[100dvh] w-screen">
        <div class="absolute inset-0 flex flex-col justify-evenly pointer-events-none opacity-20 z-0">
           <div class="grid-line-x w-full"></div>
           <div class="grid-line-x w-full"></div>
           <div class="grid-line-x w-full"></div>
           <div class="grid-line-x w-full"></div>
        </div>

        <div class="flex-1 flex flex-col justify-center items-center px-6 relative z-10">
          <nav class="flex flex-col items-center gap-6 md:gap-10">
            <NuxtLink v-for="(link, index) in menuLinks" :key="index" :to="link.to" @click="closeMenu" class="text-5xl md:text-8xl font-serif italic text-cc-muted hover:text-cc-text transition-all duration-500 hover:scale-105">
              {{ link.text }}
            </NuxtLink>
          </nav>
        </div>

        <div class="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 relative z-10 w-full bg-transparent">
          <div class="hidden md:block flex-1"></div>

          <div class="flex-1 flex flex-col items-center text-center gap-2">
            <p class="text-[10px] md:text-xs text-cc-muted uppercase tracking-[0.3em] font-medium leading-relaxed">
              A Software Developer based in Jakarta, Indonesia.
            </p>
            <p class="text-[9px] md:text-[10px] text-cc-muted/50 uppercase tracking-[0.25em]">
              Specializing in Backend Engineering & System Architecture.
            </p>
          </div>

          <div class="flex-1 flex justify-center md:justify-end gap-6">
            <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank" class="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-cc-text group transition-all duration-500">
              <span v-html="social.svg" class="w-4 h-4 text-cc-muted group-hover:text-black transition-colors"></span>
            </a>
          </div>
        </div>

      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'

const router = useRouter()
const nuxtApp = useNuxtApp()
const isMenuOpen = ref(false)
const showFloatingDock = ref(false)

const menuLinks = [
  { text: 'Home', to: '/' },
  { text: 'View Works', to: '#work' },
  { text: 'Milestones', to: '#timeline' },
  { text: 'Contact', to: '#contact' }
]

const socials = [
  { name: 'GitHub', link: 'https://github.com/yasyfialhafizh', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/yasyfialhafizh', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' },
  { name: 'Instagram', link: 'https://instagram.com/yasyfialhafizh', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>' },
  { name: 'Telegram', link: 'https://t.me/yasyfialhafizh', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' }
]

watch(isMenuOpen, (val) => {
  if (val) {
    nuxtApp.$lenis?.stop()
    document.documentElement.classList.add('overflow-hidden', 'hide-scroll')
    document.body.classList.add('overflow-hidden', 'hide-scroll')
  } else {
    nuxtApp.$lenis?.start()
    document.documentElement.classList.remove('overflow-hidden', 'hide-scroll')
    document.body.classList.remove('overflow-hidden', 'hide-scroll')
  }
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const goHome = () => {
  closeMenu()
  nuxtApp.$lenis?.scrollTo(0, { immediate: true })
  router.push('/')
}

const handleScroll = () => {
  showFloatingDock.value = window.scrollY > 400
}

const navigateToWorks = () => {
  closeMenu()
  const workSection = document.querySelector('#work') as HTMLElement | null
  if (workSection) {
    nuxtApp.$lenis?.scrollTo(workSection, { duration: 1.5 })
  } else {
    router.push('/#work')
  }
}

const runScramble = (element: HTMLElement) => {
  if (element.dataset.animating === 'true') return
  element.dataset.animating = 'true'
  const originalText = element.getAttribute('data-text') || element.innerText
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+'
  let iteration = 0
  const interval = setInterval(() => {
    element.innerText = originalText.split('').map((char, index) => {
      if(char === ' ') return ' '
      if(index < iteration) return originalText[index]
      return chars[Math.floor(Math.random() * chars.length)]
    }).join('')
    if(iteration >= originalText.length) {
      clearInterval(interval)
      element.innerText = originalText
      element.dataset.animating = 'false'
    }
    iteration += 0.3
  }, 10)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const worksEl = document.querySelector('.scramble-works')
  if (worksEl) {
    worksEl.parentElement?.parentElement?.addEventListener('mouseenter', () => runScramble(worksEl as HTMLElement))
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  nuxtApp.$lenis?.start()
  document.documentElement.classList.remove('overflow-hidden', 'hide-scroll')
  document.body.classList.remove('overflow-hidden', 'hide-scroll')
})
</script>

<style>
.hide-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll::-webkit-scrollbar {
  display: none;
}
</style>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(20px); }

.overlay-enter-active, .overlay-leave-active { transition: opacity 0.5s ease, backdrop-filter 0.5s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; backdrop-filter: blur(0px); }
</style>