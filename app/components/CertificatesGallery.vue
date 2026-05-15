<template>
  <section id="certificates" class="grid grid-cols-1 md:grid-cols-12 grid-line-x min-h-screen bg-[#050505] relative z-20">
    <div class="md:col-span-3 grid-line-y border-cc-border p-6 md:p-12 flex flex-col justify-start">
      <span class="font-serif italic text-6xl md:text-[8rem] font-light text-cc-border tracking-tighter reveal-text text-highlight word-hover-target">(04)</span>
    </div>
    <div class="md:col-span-9 p-6 md:p-12 md:py-32 flex flex-col justify-center">
      <h2 class="font-serif italic text-4xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[0.9] mb-16 text-cc-muted reveal-text cursor-default inline-block">
        <span class="scramble-target scramble-scroll text-highlight word-hover-target block" data-text="Credentials & Archives.">Credentials & Archives.</span>
        <span class="text-cc-text font-sans not-italic font-medium text-2xl md:text-3xl tracking-tight block mt-6 md:ml-16 word-hover-target">
          Certifications, visual documentation, and project galleries.
        </span>
      </h2>

      <div class="grid-line-x w-full h-[1px] mt-8 mb-16"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:ml-16">
        <div v-for="i in 6" :key="i" class="reveal-text group relative aspect-square bg-[#111] border border-cc-border overflow-hidden rounded-md cursor-pointer">
           <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           <img :src="`https://via.placeholder.com/600x600/1a1a1a/444?text=Archive+${i}`" class="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Archive Image" />
           <div class="absolute bottom-0 left-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
             <span class="text-xs uppercase tracking-widest text-cc-muted mb-1 block word-hover-target">Certificate</span>
             <h4 class="text-lg font-medium text-cc-text word-hover-target">Document Title 0{{ i }}</h4>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>