<template>
  <section id="tech" class="grid grid-cols-1 md:grid-cols-12 grid-line-x bg-cc-bg relative z-20">
    <div class="md:col-span-3 grid-line-y p-6 md:p-12 flex flex-col justify-start">
      <span class="font-serif italic text-6xl md:text-[8rem] font-light text-cc-border tracking-tighter reveal-text text-highlight word-hover-target">(02)</span>
    </div>
    <div class="md:col-span-9 p-6 md:p-12 md:py-32 flex flex-col justify-center">

      <div class="w-full" @mousemove="updateMainMouse" @mouseleave="leaveMainMouse">
        <h2 class="font-serif italic text-4xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[0.9] mb-12 text-cc-muted reveal-text cursor-default inline-block">
          <span class="scramble-target scramble-scroll text-highlight word-hover-target block" data-text="Structural integrity.">Structural integrity.</span>
          <span class="text-cc-text font-sans not-italic font-medium text-2xl md:text-3xl tracking-tight block mt-8 md:ml-16 word-hover-target">
            Tools selected for purpose, not trend.
          </span>
        </h2>

        <div class="grid-line-x w-full h-[1px] mt-8 mb-12 relative">
          <div class="absolute inset-0 pointer-events-none transition-opacity duration-300"
               :class="isMainHovered ? 'opacity-100' : 'opacity-0'"
               :style="{ background: `radial-gradient(circle 250px at ${mainMouseX}px 50%, rgba(255, 255, 255, 0.15), transparent)` }">
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-12 md:ml-16">
        <div v-for="(category, catIndex) in techCategories" :key="catIndex"
             class="reveal-text w-full"
             @mousemove="updateCategoryMouse($event, catIndex)"
             @mouseleave="leaveCategoryMouse(catIndex)">

          <h3 class="text-cc-muted text-sm uppercase tracking-widest cursor-default word-hover-target block">
            {{ category.title }}
          </h3>

          <div class="grid-line-x w-full h-[1px] mt-4 mb-8 relative">
            <div class="absolute inset-0 pointer-events-none transition-opacity duration-300"
                 :class="hoveredCategory === catIndex ? 'opacity-100' : 'opacity-0'"
                 :style="{ background: `radial-gradient(circle 250px at ${categoryMouseX[catIndex]}px 50%, rgba(255, 255, 255, 0.15), transparent)` }">
            </div>
          </div>

          <div class="flex flex-wrap gap-4">
            <div v-for="(tech, index) in category.items" :key="index"
                 class="tech-badge cursor-default"
                 :style="{ '--brand-color': tech.color }">

              <div class="badge-inner px-6 py-4 border border-cc-border rounded-full flex items-center gap-3 bg-[#050505] transition-all duration-300">
                <img :src="`https://cdn.simpleicons.org/${tech.icon}/white`" :alt="tech.name" class="w-5 h-5 opacity-60 transition-all duration-300 badge-icon" />
                <span class="text-sm md:text-base font-medium tracking-tight text-cc-text whitespace-nowrap transition-all duration-300 badge-text">
                  {{ tech.name }}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mainMouseX = ref(0)
const isMainHovered = ref(false)

const updateMainMouse = (e: MouseEvent) => {
  isMainHovered.value = true
  const target = e.currentTarget as HTMLElement
  if (target) {
    const rect = target.getBoundingClientRect()
    mainMouseX.value = e.clientX - rect.left
  }
}

const leaveMainMouse = () => {
  isMainHovered.value = false
}

const techCategories = [
  {
    title: 'Core Languages',
    items: [
      { name: 'TypeScript', icon: 'typescript', color: '#007ACC' },
      { name: 'Go', icon: 'go', color: '#00ADD8' }
    ]
  },
  {
    title: 'FFrameworks & Libraries (Current Explorations)',
    items: [
      { name: 'Vue', icon: 'vuedotjs', color: '#4FC08D' },
      { name: 'Next.js', icon: 'nextdotjs', color: '#FFFFFF' },
      { name: 'Nuxt', icon: 'nuxt', color: '#00DC82' },
      { name: 'NestJS', icon: 'nestjs', color: '#E0234E' },
      { name: 'Gin', icon: 'gin', color: '#00ADD8' },
      { name: 'React Native', icon: 'react', color: '#61DAFB' },
      { name: 'Electron', icon: 'electron', color: '#9FEAF9' }
    ]
  },
  {
    title: 'Databases & Services',
    items: [
      { name: 'PostgreSQL', icon: 'postgresql', color: '#316192' },
      { name: 'Supabase', icon: 'supabase', color: '#3ECF8E' }
    ]
  },
  {
    title: 'OS & Infrastructure',
    items: [
      { name: 'Linux', icon: 'linux', color: '#FCC624' },
      { name: 'Git', icon: 'git', color: '#F05033' },
      { name: 'Docker', icon: 'docker', color: '#0db7ed' },
      { name: 'Podman', icon: 'podman', color: '#892CA0' }
    ]
  }
]

const categoryMouseX = ref<number[]>(techCategories.map(() => 0))
const hoveredCategory = ref<number | null>(null)

const updateCategoryMouse = (e: MouseEvent, index: number) => {
  hoveredCategory.value = index
  const target = e.currentTarget as HTMLElement
  if (target) {
    const rect = target.getBoundingClientRect()
    categoryMouseX.value[index] = e.clientX - rect.left
  }
}

const leaveCategoryMouse = (index: number) => {
  if (hoveredCategory.value === index) {
    hoveredCategory.value = null
  }
}
</script>

<style scoped>
.tech-badge { transform: translateZ(0); }
.tech-badge:hover .badge-inner {
  border-color: var(--brand-color);
  background-color: rgba(255, 255, 255, 0.02);
  box-shadow: 0 0 20px -5px var(--brand-color);
  transform: translateY(-2px);
}
.tech-badge:hover .badge-text {
  color: var(--brand-color);
  text-shadow: 0 0 10px var(--brand-color);
}
.tech-badge:hover .badge-icon {
  opacity: 1;
  filter: drop-shadow(0 0 8px var(--brand-color));
}
</style>