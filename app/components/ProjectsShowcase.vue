<template>
  <section id="work" class="grid grid-cols-1 md:grid-cols-12 grid-line-x min-h-screen relative z-20 bg-cc-bg">
    <div class="md:col-span-3 grid-line-y p-6 md:p-12 flex flex-col justify-start">
      <span class="font-serif italic text-6xl md:text-[8rem] font-light text-cc-border tracking-tighter reveal-text text-highlight word-hover-target">(03)</span>
    </div>
    <div class="md:col-span-9 p-6 md:p-12 md:py-32">
      <h2 class="font-serif italic text-4xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[0.9] mb-16 max-w-4xl text-cc-muted reveal-text cursor-default inline-block">
        <span class="scramble-target scramble-scroll text-highlight word-hover-target block whitespace-nowrap" data-text="Selected Artifacts.">Selected Artifacts.</span>
        <span class="text-cc-text font-sans not-italic font-medium text-2xl md:text-3xl tracking-tight block mt-8 md:ml-16 word-hover-target">
          A curated collective of digital systems, architectures, and core engines. Built with deliberate intent to function reliably and solve the problem at hand.
        </span>
      </h2>

      <div class="grid-line-x w-full h-[1px] mt-8 mb-16"></div>

      <div class="flex flex-col border-t border-cc-border md:ml-16 reveal-text">
        <a v-for="(project, index) in projects" :key="index" :href="project.repo" target="_blank" class="project-row group border-b border-cc-border py-8 md:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden transition-colors duration-500 hover:bg-[#050505]">

          <div class="flex flex-col gap-2 z-10 w-full lg:w-4/12 transform transition-transform duration-500 group-hover:translate-x-4">
            <h3 class="text-3xl md:text-4xl font-medium tracking-tight text-cc-text group-hover:text-white transition-colors duration-300">{{ project.title }}</h3>
            <p class="text-cc-muted text-sm uppercase tracking-widest opacity-80">{{ project.category }}</p>
          </div>

          <div class="flex flex-col gap-3 z-10 w-full lg:w-4/12 transform transition-transform duration-500 group-hover:translate-x-2">
             <span class="text-cc-muted text-[10px] uppercase tracking-widest opacity-50">Core Responsibility</span>
             <div class="flex flex-wrap gap-x-4 gap-y-1">
               <span v-for="role in project.roles" :key="role" class="text-sm font-medium text-cc-muted group-hover:text-cc-text transition-colors duration-300">
                 {{ role }}
               </span>
             </div>
          </div>

          <div class="flex flex-col lg:items-end gap-6 z-10 w-full lg:w-4/12">
            <div class="flex flex-wrap lg:justify-end gap-2">
              <span v-for="tech in project.stack" :key="tech" class="text-[10px] font-medium px-3 py-1.5 border border-cc-border rounded-full text-cc-muted uppercase tracking-widest bg-cc-bg group-hover:border-white/20 group-hover:text-white transition-all duration-300">
                {{ tech }}
              </span>
            </div>
            <div class="flex items-center gap-3 pr-4 text-cc-muted group-hover:text-white transition-colors duration-300">
              <span class="text-xs uppercase tracking-widest font-medium">Inspect Source</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </div>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'EcoServe',
    category: 'Progressive Web App',
    roles: ['Business Analyst', 'Tech Lead'],
    stack: ['Next.js', 'Go Fiber', 'Supabase'],
    repo: 'https://github.com/noireveil/ecoserve-frontend'
  },
  {
    title: 'GameStore Infrastructure',
    category: 'Monolithic Backend API',
    roles: ['Backend Engineer', 'System Architect', 'Tech Lead'],
    stack: ['Laravel', 'PHP', 'Sanctum API', 'MySQL'],
    repo: 'https://github.com/deodaniel/wesbite-bl'
  },
  {
    title: 'Nexora Learn',
    category: 'EdTech Platform',
    roles: ['Product Manager', 'Business Analyst', 'Tech Lead'],
    stack: ['Next.js', 'TensorFlow.js', 'Gamification'],
    repo: 'https://github.com/noireveil/nexora-learn'
  },
  {
    title: 'NoireStore Ecosystem',
    category: 'Digital Asset Marketplace',
    roles: ['Fullstack Developer'],
    stack: ['AdonisJS', 'TypeScript', 'Edge Templates'],
    repo: 'https://github.com/noireveil/noirestore-adonis'
  },
  {
    title: 'Apexio',
    category: 'Project Workspace Engine',
    roles: ['Fullstack Developer'],
    stack: ['Laravel', 'Livewire', 'Bootstrap'],
    repo: 'https://github.com/noireveil/Apexio'
  },
  {
    title: 'Mind Tracker AI',
    category: 'Autonomous Telegram Bot',
    roles: ['Backend Engineer'],
    stack: ['Go', 'Gemini AI', 'Supabase'],
    repo: 'https://github.com/noireveil/mind-tracker-bot-go'
  },
  {
    title: 'Billiards 2D',
    category: 'Desktop Physics Simulation',
    roles: ['Game Developer'],
    stack: ['Java', 'AWT Swing', 'Physics Engine'],
    repo: 'https://github.com/nand-o/Billiards-2D'
  }
]
</script>