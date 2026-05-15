<template>
  <section id="work" class="grid grid-cols-1 md:grid-cols-12 grid-line-x min-h-screen relative z-20 bg-cc-bg">
    <div class="md:col-span-3 grid-line-y p-6 md:p-12 flex flex-col justify-start">
      <span class="font-serif italic text-6xl md:text-[8rem] font-light text-cc-border tracking-tighter reveal-text text-highlight word-hover-target">(03)</span>
    </div>
    <div class="md:col-span-9 p-6 md:p-12 md:py-32">
      <h2 class="font-serif italic text-4xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[0.9] mb-16 max-w-4xl text-cc-muted reveal-text cursor-default inline-block">
        <span class="scramble-target scramble-scroll text-highlight word-hover-target block" data-text="The kind of work we do for our partners.">The kind of work we do for our partners.</span>
        <span class="text-cc-text font-sans not-italic font-medium text-2xl md:text-3xl tracking-tight block mt-8 md:ml-16 word-hover-target">
          Web, mobile, desktop, and systems engineering. We cover the full technical spectrum so you don't have to split tasks across freelancers.
        </span>
      </h2>

      <div class="grid-line-x w-full h-[1px] mt-8 mb-16"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:ml-16">
        <div v-for="(project, index) in projects" :key="index" class="project-card-container reveal-text" :class="{'md:mt-32': index % 2 !== 0}">
          <div class="aspect-[4/5] bg-cc-border overflow-hidden group relative mb-6 rounded-md">
            <div class="absolute inset-0 bg-[#0a0a0a] transition-transform duration-700 group-hover:scale-105"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 z-10">
              <button class="bg-cc-text text-cc-bg px-8 py-3 rounded-full font-medium tracking-widest uppercase text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-cc-muted cursor-pointer">
                View Repository
              </button>
            </div>
          </div>
          <h3 class="text-3xl font-medium tracking-tight mb-2 cursor-default word-hover-target">{{ project.title }}</h3>
          <div class="flex justify-between items-center border-b border-cc-border pb-4 mb-4">
            <span class="text-cc-muted text-sm uppercase tracking-widest cursor-default word-hover-target">{{ project.role }}</span>
            <span class="text-cc-muted text-sm uppercase tracking-widest cursor-default word-hover-target">{{ project.platform }}</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="text-xs font-medium px-3 py-1 border border-cc-border rounded-full text-cc-muted uppercase tracking-widest cursor-default word-hover-target bg-cc-bg">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { title: 'EcoServe', role: 'Fullstack', platform: 'PWA', stack: ['Next.js', 'Go Fiber', 'Supabase'] },
  { title: 'GameStore Reverse Engineering', role: 'Security', platform: 'Desktop', stack: ['Ghidra', 'C++', 'Agile'] },
  { title: 'Top-Down Stealth Engine', role: 'Game Dev', platform: 'Web', stack: ['TypeScript', 'Canvas API'] },
  { title: 'Nexora Core', role: 'Backend', platform: 'System', stack: ['Go', 'PostgreSQL', 'Docker'] }
]
</script>