<template>
  <section id="contact" class="grid grid-cols-1 md:grid-cols-12 grid-line-x min-h-screen relative z-20 bg-[#0a0a0a]">
    <div class="md:col-span-3 grid-line-y p-6 md:p-12 flex flex-col justify-start">
      <span class="font-serif italic text-6xl md:text-[8rem] font-light text-cc-border tracking-tighter reveal-text text-highlight word-hover-target">(06)</span>
    </div>
    <div class="md:col-span-9 p-6 md:p-12 md:py-32 flex flex-col justify-center">
      <h2 class="font-serif italic text-4xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[0.9] mb-16 text-cc-muted reveal-text cursor-default">
        <span class="scramble-target scramble-scroll text-highlight word-hover-target block" data-text="Initiate contact.">Initiate contact.</span>
        <span class="text-cc-text font-sans not-italic font-medium word-hover-target block mt-6 md:ml-16">Let's build something exceptional.</span>
      </h2>

      <div class="grid-line-x w-full h-[1px] mt-8 mb-16"></div>

      <div class="flex flex-col gap-12 max-w-4xl md:ml-16 reveal-text">
        <form class="flex flex-col gap-12" @submit.prevent>
          <div class="flex flex-col md:flex-row gap-12">
            <div class="flex flex-col gap-4 w-full relative group">
              <label class="text-xs uppercase tracking-widest text-cc-muted word-hover-target">Name</label>
              <input type="text" class="bg-transparent border-none outline-none text-cc-text text-xl md:text-2xl pb-4 word-hover-target" placeholder="John Doe" />
              <div class="grid-line-x absolute bottom-0 left-0 w-full h-[1px]"></div>
            </div>
            <div class="flex flex-col gap-4 w-full relative group">
              <label class="text-xs uppercase tracking-widest text-cc-muted word-hover-target">Email</label>
              <input type="email" class="bg-transparent border-none outline-none text-cc-text text-xl md:text-2xl pb-4 word-hover-target" placeholder="john@example.com" />
              <div class="grid-line-x absolute bottom-0 left-0 w-full h-[1px]"></div>
            </div>
          </div>
          <div class="flex flex-col gap-4 w-full relative group">
            <label class="text-xs uppercase tracking-widest text-cc-muted word-hover-target">Message</label>
            <textarea class="bg-transparent border-none outline-none text-cc-text text-xl md:text-2xl pb-4 resize-none h-32 word-hover-target" placeholder="Tell me about your project..."></textarea>
            <div class="grid-line-x absolute bottom-0 left-0 w-full h-[1px]"></div>
          </div>
          <button class="group relative inline-flex items-center gap-6 text-sm md:text-lg uppercase tracking-widest font-medium overflow-hidden word-hover-target w-max mt-8 cursor-pointer">
            <span class="relative z-10 text-cc-text">Transmit Message</span>
            <div class="w-12 h-[1px] bg-cc-text transition-all duration-500 group-hover:w-24 group-hover:bg-cc-muted"></div>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>