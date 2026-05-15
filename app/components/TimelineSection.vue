<template>
  <section id="timeline" class="py-32 md:py-48 bg-cc-bg relative grid-line-x z-20 overflow-hidden">

    <div class="text-center mb-32 reveal-text relative z-10 flex flex-col items-center">
      <span class="font-serif italic text-6xl md:text-[6rem] font-light text-cc-border tracking-tighter block mb-6 text-highlight word-hover-target">(05)</span>

      <span class="text-cc-text font-sans not-italic font-medium text-sm md:text-base uppercase tracking-[0.3em] block mb-6 word-hover-target">A story of growth</span>

      <h2 class="font-serif italic text-4xl md:text-7xl lg:text-[7rem] font-light tracking-tighter leading-[0.9] text-cc-muted cursor-default inline-block">
        <span class="scramble-target scramble-scroll text-highlight word-hover-target block" data-text="Milestones &">Milestones &</span>
        <span class="scramble-target scramble-scroll text-highlight word-hover-target block" data-text="Achievements.">Achievements.</span>
      </h2>
    </div>

    <div class="max-w-5xl mx-auto px-6 relative timeline-wrapper mt-16">

      <div ref="lineRef" class="timeline-line-container absolute left-[31.5px] md:left-1/2 w-[2px] bg-[#1a1a1a] md:-translate-x-1/2 z-0">
        <div ref="glowRef" class="timeline-glow-element absolute left-1/2 w-[4px] h-24 md:h-32 bg-white rounded-full blur-[2px] shadow-[0_0_20px_rgba(255,255,255,0.8)] opacity-100" style="transform: translate(-50%, -50%);"></div>
      </div>

      <div ref="itemsRef" class="flex flex-col gap-24 relative z-10">
        <div
          v-for="(event, index) in timelineEvents"
          :key="index"
          class="timeline-item relative reveal-text flex flex-col md:flex-row justify-between items-start md:items-center w-full"
          :class="{'md:flex-row-reverse': index % 2 !== 0}"
        >
          <div class="timeline-dot absolute left-[31.5px] md:left-1/2 w-4 h-4 bg-[#000] border-[2px] border-cc-text rounded-full -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>

          <div class="w-full md:w-[45%] pl-16 md:pl-0">
            <div class="p-8 border border-cc-border bg-[#050505] hover:bg-[#0a0a0a] transition-all duration-500 rounded-md shadow-2xl relative overflow-hidden group">
               <div class="absolute top-0 left-0 w-1 h-full bg-cc-muted group-hover:bg-cc-text transition-colors duration-300"></div>

               <span class="text-[10px] uppercase tracking-[0.2em] text-cc-muted mb-3 block word-hover-target">{{ event.date }}</span>
               <h3 class="text-xl md:text-2xl font-medium text-cc-text mb-4 word-hover-target leading-tight">{{ event.title }}</h3>

               <div class="space-y-4">
                 <p class="text-sm md:text-base text-cc-muted leading-relaxed word-hover-target">
                   {{ event.description }}
                 </p>
                 <div v-if="event.learnings" class="pt-4 border-t border-cc-border/50">
                   <span class="text-[10px] uppercase tracking-widest text-cc-text block mb-2">Learnings:</span>
                   <p class="text-xs md:text-sm italic text-cc-muted leading-relaxed word-hover-target">
                     {{ event.learnings }}
                   </p>
                 </div>
               </div>
            </div>
          </div>

          <div class="hidden md:block w-[45%]"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const timelineEvents = [
  {
    date: 'Sep 2024 - Present',
    title: 'Computer Science at UNJ',
    description: 'Undergraduate student at State University of Jakarta, focusing on core computer science disciplines including data structures and operating systems.',
    learnings: 'Built a solid foundation in algorithm analysis, computational logic, and low-level system operations.'
  },
  {
    date: 'Early 2026',
    title: 'Coding & Algorithms Tournament (CAT) 2026',
    description: 'Participated in a competitive programming tournament to solve complex algorithmic and data structure challenges.',
    learnings: 'Improved logic implementation and problem-solving speed under strict time constraints.'
  },
  {
    date: '2026',
    title: 'Cybersecurity & CTF Competitor',
    description: 'Competed in Find IT UGM 2026 and Waskita Manunggal Siber Tournament 2026, focusing on system vulnerabilities and reverse engineering.',
    learnings: 'Developed an attacker\'s mindset to better understand how to build secure, impenetrable software architectures.'
  },
  {
    date: 'Early 2026',
    title: 'Techcomfest Web Development 2026',
    description: 'Reached 19th place nationally with the Nexora project. Acted as Project Manager, Business Analyst, and Technical Lead to deliver a high-performance ML-integrated platform.',
    learnings: 'Mastered the synergy of leadership and business orchestration while ensuring technical excellence in a national competition.'
  },
  {
    date: 'May 2026',
    title: 'I/O Festival BEM FTI Untar 2026',
    description: 'Secured 9th place nationally. Led the EcoServe team as PM, BA, and Technical Lead to architect and deploy a scalable circular economy ecosystem.',
    learnings: 'Experienced the full product lifecycle: from acting as a BA/PM drafting the SRS to orchestrating services as Technical Lead.'
  }
]

const lineRef  = ref<HTMLElement | null>(null)
const glowRef  = ref<HTMLElement | null>(null)
const itemsRef = ref<HTMLElement | null>(null)

let rafId = 0
let targetPct = 0
let currentPct = 0

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function updateGlow() {
  const line  = lineRef.value
  const glow  = glowRef.value
  const items = itemsRef.value

  if (!line || !glow || !items) return

  const itemEls = Array.from(items.querySelectorAll<HTMLElement>('.timeline-item'))
  if (itemEls.length === 0) return

  const lineRect = line.getBoundingClientRect()
  const glowHeight = glow.offsetHeight
  const halfGlow = (glowHeight / 2)
  const viewCenter = window.innerHeight / 2

  const dots = itemEls.map(el => {
    const r = el.getBoundingClientRect()
    return r.top + (window.innerWidth >= 768 ? el.offsetHeight / 2 : 40)
  })

  const firstDot = dots[0]
  const lastDot  = dots[dots.length - 1]

  if (firstDot === undefined || lastDot === undefined) return

  let rawPx: number = viewCenter

  const minPx = firstDot + halfGlow - 2
  const maxPx = lastDot - halfGlow + 2

  if (rawPx < minPx) rawPx = minPx
  if (rawPx > maxPx) rawPx = maxPx

  let calculatedPct = ((rawPx - lineRect.top) / lineRect.height) * 100
  calculatedPct = Math.max(0, Math.min(100, calculatedPct))

  currentPct = lerp(currentPct, calculatedPct, 0.1)
  glow.style.top = `${currentPct}%`

  rafId = requestAnimationFrame(updateGlow)
}

onMounted(async () => {
  await nextTick()
  const items = itemsRef.value
  const line  = lineRef.value

  if (items && line) {
    const itemEls = Array.from(items.querySelectorAll<HTMLElement>('.timeline-item'))
    const first = itemEls[0]
    const last = itemEls[itemEls.length - 1]

    if (first && last) {
      const isDesktop = window.innerWidth >= 768
      const offsetT = first.offsetTop + (isDesktop ? first.offsetHeight / 2 : 40)
      const offsetB = last.offsetTop + (isDesktop ? last.offsetHeight / 2 : 40)

      line.style.top = `${offsetT}px`
      line.style.height = `${offsetB - offsetT}px`
    }
  }

  rafId = requestAnimationFrame(updateGlow)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>