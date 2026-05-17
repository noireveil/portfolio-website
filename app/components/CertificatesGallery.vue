<template>
  <section id="certificates" class="grid grid-cols-1 md:grid-cols-12 grid-line-x min-h-screen bg-[#050505] relative z-20">
    <div class="md:col-span-3 grid-line-y border-cc-border p-6 md:p-12 flex flex-col justify-start">
      <span class="font-serif italic text-6xl md:text-[8rem] font-light text-cc-border tracking-tighter reveal-text text-highlight word-hover-target">(04)</span>
    </div>
    <div class="md:col-span-9 p-6 md:p-12 md:py-32 flex flex-col justify-center">
      <h2 class="font-serif italic text-4xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[0.9] mb-16 max-w-4xl text-cc-muted reveal-text cursor-default inline-block">
        <span class="scramble-target scramble-scroll text-highlight word-hover-target block whitespace-nowrap" data-text="Visual Archives.">Visual Archives.</span>
        <span class="text-cc-text font-sans not-italic font-medium text-2xl md:text-3xl tracking-tight block mt-8 md:ml-16 word-hover-target">
          A deliberate archive of credentials, built work, and documented experience.
        </span>
      </h2>

      <div class="grid-line-x w-full h-[1px] mt-8 mb-16"></div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mt-8 md:ml-16">
        <div v-for="(item, index) in archiveItems" :key="index"
             @click="openLightbox(index)"
             class="reveal-text group relative bg-[#111] border border-cc-border overflow-hidden rounded-md cursor-pointer"
             :class="item.gridSpan">

           <div class="absolute inset-0 bg-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
             <div class="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
               <span class="text-[10px] md:text-xs uppercase tracking-widest text-white/70 mb-2 block font-medium">{{ item.type }}</span>
               <h4 class="text-xl md:text-2xl font-medium text-white tracking-tight">{{ item.title }}</h4>
             </div>
           </div>

           <NuxtImg
             :src="item.images[0]"
             format="webp"
             loading="lazy"
             class="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
             :alt="item.title"
           />

           <div class="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
             <div class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
               <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
             </div>
           </div>

           <div v-if="item.images.length > 1" class="absolute top-6 left-6 z-20 opacity-70">
             <svg class="w-5 h-5 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6h12v12H4V6zm14-2H6v2h12v12h2V4z"></path></svg>
           </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="currentArchive" class="fixed inset-0 z-[999999] flex flex-col md:flex-row bg-[#050505]/95 backdrop-blur-xl">

          <button @click="closeLightbox" class="absolute top-6 right-6 md:right-8 md:top-8 z-50 text-white/50 hover:text-white transition-colors">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <div class="flex-1 w-full h-[60vh] md:h-full relative flex items-center justify-center p-4 md:p-12 overflow-hidden">

            <button v-if="currentArchive.images.length > 1" @click.stop="prevImage" class="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 transition-all border border-white/10 hidden md:flex">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <Transition name="img-swap" mode="out-in">
              <NuxtImg
                 :key="activeImageIndex"
                 :src="currentArchive.images[activeImageIndex]"
                 format="webp"
                 class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-md"
                 :alt="`${currentArchive.title} - Image ${activeImageIndex + 1}`"
              />
            </Transition>

            <button v-if="currentArchive.images.length > 1" @click.stop="nextImage" class="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 transition-all border border-white/10 hidden md:flex">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div v-if="currentArchive.images.length > 1" class="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5 z-30">
              <div v-for="(_, imgIdx) in currentArchive.images" :key="imgIdx"
                   @click.stop="activeImageIndex = imgIdx"
                   class="h-1.5 rounded-full transition-all duration-500 cursor-pointer"
                   :class="activeImageIndex === imgIdx ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'">
              </div>
            </div>

          </div>

          <div class="w-full md:w-[450px] lg:w-[500px] h-[40vh] md:h-full bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center p-8 md:p-16 overflow-y-auto">
            <div class="flex flex-col gap-6" :key="`info-${activeItem}`">
              <div>
                <span class="text-xs uppercase tracking-[0.2em] text-cc-muted mb-3 block">{{ currentArchive.type }}</span>
                <h3 class="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">{{ currentArchive.title }}</h3>
              </div>

              <div class="w-full h-[1px] bg-white/10 my-2"></div>

              <p class="text-cc-muted text-base md:text-lg leading-relaxed">
                {{ currentArchive.description }}
              </p>

              <div v-if="currentArchive.images.length > 1" class="flex items-center gap-4 mt-8 md:hidden">
                <button @click.stop="prevImage" class="flex-1 py-3 border border-white/10 text-white/70 hover:text-white rounded flex items-center justify-center uppercase tracking-widest text-xs font-medium">Prev</button>
                <button @click.stop="nextImage" class="flex-1 py-3 border border-white/10 text-white/70 hover:text-white rounded flex items-center justify-center uppercase tracking-widest text-xs font-medium">Next</button>
              </div>
            </div>
          </div>

        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#imports'

const archiveItems = [
  {
    title: 'Language Proficiency',
    type: 'Language Certificate',
    images: [
      '/images/certificates/english-prediction.jpeg'
    ],
    description: 'Standardized assessments and certifications documenting language proficiency levels for academic and professional purposes.',
    gridSpan: 'md:col-span-4 aspect-[4/5]'
  },
  {
    title: 'Apexio Workspace',
    type: 'Interface Documentation',
    images: [
      '/images/projects/apexio-workspace.jpeg'
    ],
    description: 'Visual documentation of the Apexio digital workspace. Showcasing the Kanban-based task management system and the functional integration of its underlying Laravel architecture.',
    gridSpan: 'md:col-span-8 aspect-video md:aspect-auto'
  },
  {
    title: 'Nexora Core Dashboard',
    type: 'Interface Documentation',
    images: [
      '/images/projects/nexora-dashboard.jpeg'
    ],
    description: 'Data visualization and metric panels for the Nexora Learn platform. Merging minimalist aesthetics with complex gamification tracking functionalities.',
    gridSpan: 'md:col-span-6 aspect-square'
  },
  {
    title: 'EcoServe Ecosystem',
    type: 'Interface Documentation',
    images: [
      '/images/projects/ecoserve-ui.jpeg',
      '/images/projects/ecoserve-dashboard.jpeg',
      '/images/projects/ecoserve-mobile.jpeg'
    ],
    description: 'Primary interface screens of the EcoServe Progressive Web App. Engineered to provide seamless navigation and intuitive user experiences within a circular economy framework.',
    gridSpan: 'md:col-span-6 aspect-square'
  },
  {
    title: 'Multi-Disciplinary Tech Academy',
    type: 'Technical Certifications',
    images: [
      '/images/certificates/dicoding-web.jpeg',
      '/images/certificates/dicoding-devops.jpeg',
      '/images/certificates/dicoding-python.jpeg',
      '/images/certificates/dicoding-ml.jpeg'
    ],
    description: 'A comprehensive suite of technical certifications from Dicoding Academy covering fundamental web development, DevOps pipelines, Python programming, and introductory Machine Learning frameworks.',
    gridSpan: 'md:col-span-8 aspect-video md:aspect-auto'
  },
  {
    title: 'Google Cybersecurity',
    type: 'Professional Certification',
    images: [
      '/images/certificates/google-cybersecurity.jpg'
    ],
    description: 'Comprehensive professional certification by Google validating expertise in threat analysis, network security, vulnerability mitigation, and automation using Python & Bash.',
    gridSpan: 'md:col-span-4 aspect-[4/5]'
  },
  {
    title: 'Cisco Ethical Hacker',
    type: 'Professional Certification',
    images: [
      '/images/certificates/cisco-hacker.png'
    ],
    description: 'Verified competency from Cisco Networking Academy in system penetration testing, vulnerability exploitation, and end-to-end ethical hacking methodologies.',
    gridSpan: 'md:col-span-4 aspect-[4/5]'
  },
  {
    title: 'Academic & Industrial Conferences',
    type: 'Event Participation',
    images: [
      '/images/certificates/seminar-ai-ui.jpeg',
      '/images/certificates/pkkmb-unj.jpeg'
    ],
    description: 'Active engagement in prominent academic and industrial events, including the Artificial Intelligence for Industrial Applications workshop at the University of Indonesia and university symposiums.',
    gridSpan: 'md:col-span-8 aspect-video md:aspect-auto'
  }
]

const activeItem = ref<number | null>(null)
const activeImageIndex = ref<number>(0)

const currentArchive = computed(() => {
  return activeItem.value !== null ? archiveItems[activeItem.value] : null
})

const openLightbox = (index: number) => {
  activeItem.value = index
  activeImageIndex.value = 0
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
  useNuxtApp().$lenis?.stop()
}

const closeLightbox = () => {
  activeItem.value = null
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
  useNuxtApp().$lenis?.start()
}

const nextImage = () => {
  if (!currentArchive.value) return
  const currentImages = currentArchive.value.images
  if (currentImages.length <= 1) return

  activeImageIndex.value = activeImageIndex.value === currentImages.length - 1 ? 0 : activeImageIndex.value + 1
}

const prevImage = () => {
  if (!currentArchive.value) return
  const currentImages = currentArchive.value.images
  if (currentImages.length <= 1) return

  activeImageIndex.value = activeImageIndex.value === 0 ? currentImages.length - 1 : activeImageIndex.value - 1
}

const handleKeydown = (e: KeyboardEvent) => {
  if (activeItem.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
  useNuxtApp().$lenis?.start()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.img-swap-enter-active,
.img-swap-leave-active {
  transition: all 0.3s ease-in-out;
}
.img-swap-enter-from {
  opacity: 0;
  transform: scale(0.98);
}
.img-swap-leave-to {
  opacity: 0;
  transform: scale(1.02);
}
</style>