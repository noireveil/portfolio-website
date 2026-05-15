<template>
  <div class="main-container relative w-full h-full bg-cc-bg">

    <div class="preloader fixed inset-0 z-[99999] flex items-center justify-center bg-[#000000]">
       <svg viewBox="0 0 200 200" class="preloader-clock w-28 h-28 origin-center drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
         <g class="clock-casing fill-black stroke-cc-text stroke-[1.5]">
            <path d="M100,2 L112,12 L108,22 L92,22 L88,12 Z" />
            <circle cx="100" cy="12" r="6" class="fill-none" />
            <circle cx="100" cy="110" r="88" />
            <circle cx="100" cy="110" r="82" class="fill-none stroke-cc-text stroke-[0.5] opacity-50" />
            <circle cx="100" cy="110" r="3" fill="white" stroke="none" />
         </g>

         <g class="clock-face fill-none stroke-white">
            <circle cx="100" cy="110" r="55" class="stroke-[1]" />
            <circle cx="100" cy="110" r="45" class="stroke-[0.5] opacity-50" />

            <g class="clock-numerals fill-white font-serif font-medium origin-center" style="font-size: 16px;" stroke="none">
                <text x="100" y="48" text-anchor="middle">XII</text>
                <text x="117" y="53" text-anchor="middle" transform="rotate(30 100 110)">I</text>
                <text x="131" y="65" text-anchor="middle" transform="rotate(60 100 110)">II</text>
                <text x="168" y="115" text-anchor="middle">III</text>
                <text x="131" y="165" text-anchor="middle" transform="rotate(-60 100 110)">IV</text>
                <text x="117" y="177" text-anchor="middle" transform="rotate(-30 100 110)">V</text>
                <text x="100" y="182" text-anchor="middle">VI</text>
                <text x="83" y="177" text-anchor="middle" transform="rotate(30 100 110)">VII</text>
                <text x="69" y="165" text-anchor="middle" transform="rotate(60 100 110)">VIII</text>
                <text x="32" y="115" text-anchor="middle">IX</text>
                <text x="69" y="65" text-anchor="middle" transform="rotate(-60 100 110)">X</text>
                <text x="83" y="53" text-anchor="middle" transform="rotate(-30 100 110)">XI</text>
            </g>

            <g class="clock-markings stroke-[1]">
                <line x1="100" y1="88" x2="100" y2="78" /> <line x1="122" y1="110" x2="132" y2="110" /> <line x1="100" y1="132" x2="100" y2="142" /> <line x1="78" y1="110" x2="68" y2="110" />  </g>

            <g class="central-star fill-white opacity-80" stroke="none">
                <path d="M100,85 L103,103 L120,105 L103,107 L100,125 L97,107 L80,105 L97,103 Z" />
                <path d="M100,95 L105,100 L115,95 L105,105 L115,115 L105,110 L100,115 L95,110 L85,115 L95,105 L85,95 L95,100 Z" class="opacity-40" />
            </g>

            <g class="clock-hands">
               <line x1="100" y1="110" x2="100" y2="75" class="short-hand stroke-[4] stroke-white drop-shadow-[0_0_3px_#fff]" stroke-linecap="round" />
               <line x1="100" y1="110" x2="100" y2="55" class="long-hand stroke-[2] stroke-white drop-shadow-[0_0_3px_#fff]" stroke-linecap="round" />
               <circle cx="100" cy="110" r="2.5" fill="black" stroke="white" stroke-width="1" />
            </g>
         </g>
       </svg>
    </div>

    <Transition name="fade">
      <div v-if="isNavigatingToWorks" class="fixed inset-0 z-[99999] bg-[#000000] flex items-center justify-center">
         <svg viewBox="0 0 200 200" class="preloader-nav-clock w-28 h-28 origin-center drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
           <g class="fill-black stroke-cc-text stroke-[1.5]">
              <path d="M100,2 L112,12 L108,22 L92,22 L88,12 Z" />
              <circle cx="100" cy="12" r="6" class="fill-none" />
              <circle cx="100" cy="110" r="88" />
              <circle cx="100" cy="110" r="82" class="fill-none stroke-cc-text stroke-[0.5] opacity-50" />
              <circle cx="100" cy="110" r="3" fill="white" stroke="none" />
           </g>

           <g class="fill-none stroke-white">
              <circle cx="100" cy="110" r="55" class="stroke-[1]" />
              <circle cx="100" cy="110" r="45" class="stroke-[0.5] opacity-50" />

              <g class="fill-white font-serif font-medium origin-center" style="font-size: 16px;" stroke="none">
                  <text x="100" y="48" text-anchor="middle">XII</text>
                  <text x="117" y="53" text-anchor="middle" transform="rotate(30 100 110)">I</text>
                  <text x="131" y="65" text-anchor="middle" transform="rotate(60 100 110)">II</text>
                  <text x="168" y="115" text-anchor="middle">III</text>
                  <text x="131" y="165" text-anchor="middle" transform="rotate(-60 100 110)">IV</text>
                  <text x="117" y="177" text-anchor="middle" transform="rotate(-30 100 110)">V</text>
                  <text x="100" y="182" text-anchor="middle">VI</text>
                  <text x="83" y="177" text-anchor="middle" transform="rotate(30 100 110)">VII</text>
                  <text x="69" y="165" text-anchor="middle" transform="rotate(60 100 110)">VIII</text>
                  <text x="32" y="115" text-anchor="middle">IX</text>
                  <text x="69" y="65" text-anchor="middle" transform="rotate(-60 100 110)">X</text>
                  <text x="83" y="53" text-anchor="middle" transform="rotate(-30 100 110)">XI</text>
              </g>

              <g class="stroke-[1]">
                  <line x1="100" y1="88" x2="100" y2="78" /> <line x1="122" y1="110" x2="132" y2="110" /> <line x1="100" y1="132" x2="100" y2="142" /> <line x1="78" y1="110" x2="68" y2="110" />  </g>

              <g class="fill-white opacity-80" stroke="none">
                  <path d="M100,85 L103,103 L120,105 L103,107 L100,125 L97,107 L80,105 L97,103 Z" />
                  <path d="M100,95 L105,100 L115,95 L105,105 L115,115 L105,110 L100,115 L95,110 L85,115 L95,105 L85,95 L95,100 Z" class="opacity-40" />
              </g>

              <g class="nav-clock-hands">
                 <line x1="100" y1="110" x2="100" y2="75" class="nav-short-hand stroke-[4] stroke-white drop-shadow-[0_0_3px_#fff]" stroke-linecap="round" />
                 <line x1="100" y1="110" x2="100" y2="55" class="nav-long-hand stroke-[2] stroke-white drop-shadow-[0_0_3px_#fff]" stroke-linecap="round" />
                 <circle cx="100" cy="110" r="2.5" fill="black" stroke="white" stroke-width="1" />
              </g>
           </g>
         </svg>
      </div>
    </Transition>

    <section class="hero-section h-screen w-full relative flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-24 grid-line-x overflow-hidden bg-cc-bg z-20">

      <div class="hero-gallery absolute inset-0 pointer-events-none z-0">
         <div class="cascade-img absolute top-[27%] right-[20%] w-72 md:w-[22rem] aspect-[4/3] bg-[#1a1a1a] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[2deg] z-0">
            <img src="~/assets/images/hero/image2.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 2" />
         </div>
         <div class="cascade-img absolute top-[12%] right-[38%] w-44 md:w-52 aspect-[3/4] bg-[#111] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[-12deg] z-10">
            <img src="~/assets/images/hero/image1.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 1" />
         </div>
         <div class="cascade-img absolute top-[10%] right-[8%] w-40 md:w-48 aspect-square bg-[#1a1a1a] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[18deg] z-10">
            <img src="~/assets/images/hero/image10.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 10" />
         </div>
         <div class="cascade-img absolute top-[62%] right-[38%] w-48 md:w-56 aspect-[3/4] bg-[#0a0a0a] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[-15deg] z-10">
            <img src="~/assets/images/hero/image3.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 3" />
         </div>
         <div class="cascade-img absolute top-[62%] right-[5%] w-44 md:w-52 aspect-[3/4] bg-[#1f1f1f] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[20deg] z-10">
            <img src="~/assets/images/hero/image6.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 6" />
         </div>
         <div class="cascade-img absolute top-[30%] right-[44%] w-44 md:w-52 aspect-[3/4] bg-[#1a1a1a] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[-6deg] z-20">
            <img src="~/assets/images/hero/image13.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 13" />
         </div>
         <div class="cascade-img absolute top-[28%] right-[3%] w-44 md:w-52 aspect-[3/4] bg-[#141414] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[12deg] z-20">
            <img src="~/assets/images/hero/image4.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 4" />
         </div>
         <div class="cascade-img absolute top-[5%] right-[22%] w-40 md:w-48 aspect-square bg-[#1a1a1a] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[5deg] z-20">
            <img src="~/assets/images/hero/image12.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 12" />
         </div>
         <div class="cascade-img absolute top-[58%] right-[22%] w-48 md:w-56 aspect-[3/4] bg-[#1f1f1f] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[-5deg] z-20">
            <img src="~/assets/images/hero/image7.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 7" />
         </div>
         <div class="cascade-img absolute top-[20%] right-[30%] w-40 md:w-48 aspect-square bg-[#111] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[10deg] z-30">
            <img src="~/assets/images/hero/image11.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 11" />
         </div>
         <div class="cascade-img absolute top-[25%] right-[12%] w-40 md:w-48 aspect-square bg-[#1f1f1f] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[-12deg] z-30">
            <img src="~/assets/images/hero/image8.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 8" />
         </div>
         <div class="cascade-img absolute top-[48%] right-[32%] w-48 md:w-56 aspect-square bg-[#1f1f1f] border border-cc-border shadow-2xl overflow-hidden rounded-md rotate-[-6deg] z-40">
            <img src="~/assets/images/hero/image5.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 5" />
         </div>
         <div class="cascade-img absolute top-[50%] right-[12%] w-48 md:w-56 aspect-square bg-[#0a0a0a] border border-cc-border shadow-2xl overflow-hidden rounded-md z-40">
            <img src="~/assets/images/hero/image9.jpeg" class="w-full h-full object-cover opacity-[0.40]" alt="Gallery 9" />
         </div>
      </div>

      <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        <div class="md:col-span-1 flex items-end">
          <div class="mr-3 mb-[3px] opacity-0 status-dot w-[2px] h-4 relative overflow-visible">
             <div class="absolute inset-0 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse"></div>
          </div>
          <span class="text-[10px] md:text-xs text-cc-muted uppercase tracking-[0.2em] mb-1 status-text opacity-0 leading-relaxed whitespace-nowrap">Open for<br/>projects</span>
        </div>

        <div class="md:col-span-11 lg:col-span-10">
          <h1 class="text-4xl md:text-6xl lg:text-[7rem] font-medium tracking-tighter leading-[1.1] mb-2 md:mb-4 text-cc-text cursor-default overflow-visible">
            <span class="scramble-target scramble-hero text-highlight word-hover-target block whitespace-nowrap" data-text="Deliberate Software">Deliberate Software</span>
          </h1>
          <h1 class="font-serif italic text-4xl md:text-6xl lg:text-[7rem] font-light tracking-tighter leading-[1.1] mb-8 md:mb-12 text-cc-muted cursor-default md:ml-12 overflow-visible">
            <span class="scramble-target scramble-hero text-highlight word-hover-target block whitespace-nowrap" data-text="built on the right foundations.">built on the right foundations.</span>
          </h1>

          <div class="flex flex-col gap-2 max-w-3xl md:ml-12 mb-12">
            <p class="fade-up-element text-cc-muted text-lg md:text-xl leading-relaxed opacity-0 word-hover-target cursor-default">
              Web, mobile, and desktop held to the same standard. Solutions shaped by the problem, not the other way around. Complexity is easy. Building something that feels simple is the hard part.
            </p>
          </div>

          <NuxtLink to="#contact" class="fade-up-element group relative inline-flex items-center gap-6 text-sm md:text-lg uppercase tracking-widest font-medium overflow-hidden opacity-0 word-hover-target md:ml-12 pointer-events-auto">
            <span class="relative z-10 text-cc-text">Discuss a Project</span>
            <div class="w-12 h-[1px] bg-cc-text transition-all duration-500 group-hover:w-24 group-hover:bg-cc-muted"></div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-12 grid-line-x bg-cc-bg z-20 relative overflow-hidden">
       <div class="marquee-container flex items-center">
          <div class="marquee-track flex items-center pr-16 gap-16 text-xl md:text-2xl font-medium tracking-widest uppercase text-cc-muted opacity-80 word-hover-target whitespace-nowrap">
             <template v-for="tech in techStack" :key="tech.name">
                <div class="flex items-center gap-4">
                   <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.icon}.svg`" class="w-6 h-6 invert" :alt="tech.name" />
                   <span>{{ tech.name }}</span>
                </div>
             </template>
          </div>
          <div class="marquee-track flex items-center pr-16 gap-16 text-xl md:text-2xl font-medium tracking-widest uppercase text-cc-muted opacity-80 word-hover-target whitespace-nowrap" aria-hidden="true">
            <template v-for="tech in techStack" :key="tech.name + '-copy'">
                <div class="flex items-center gap-4">
                   <img :src="`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${tech.icon}.svg`" class="w-6 h-6 invert" :alt="tech.name" />
                   <span>{{ tech.name }}</span>
                </div>
             </template>
          </div>
       </div>
    </section>

    <section id="about" class="grid grid-cols-1 md:grid-cols-12 grid-line-x min-h-screen relative z-10 bg-cc-bg">
      <div class="md:col-span-3 grid-line-y p-6 md:p-12 flex flex-col justify-start">
        <span class="font-serif italic text-6xl md:text-[8rem] font-light text-cc-border tracking-tighter reveal-text text-highlight word-hover-target">(01)</span>
      </div>
      <div class="md:col-span-9 p-6 md:p-12 md:py-32 flex flex-col justify-center">
        <h2 class="font-serif italic text-4xl md:text-7xl lg:text-[6rem] font-light tracking-tighter leading-[1.1] mb-16 text-cc-muted reveal-text cursor-default">
          <span class="scramble-target scramble-scroll text-highlight word-hover-target block whitespace-nowrap" data-text="Execution matters.">Execution matters.</span>
          <span class="text-cc-text font-sans not-italic font-medium word-hover-target block mt-6 md:ml-16">Software that works as intended.</span>
        </h2>

        <div class="grid-line-x w-full h-[1px] mt-8 mb-16 relative z-30"></div>

        <div class="grid grid-cols-1 gap-8 max-w-4xl md:ml-16">
          <div class="flex flex-col gap-6 reveal-text">
            <h3 class="text-sm uppercase tracking-widest text-cc-muted cursor-default word-hover-target text-highlight mb-4">Background</h3>
            <p class="text-cc-text text-2xl md:text-4xl font-medium tracking-tight leading-snug cursor-default word-hover-target">
              Dedicated to writing software that does exactly what it should, for as long as it should.
            </p>
            <p class="text-cc-muted text-xl md:text-2xl leading-relaxed cursor-default word-hover-target mt-4">
              Currently a Computer Science student at the State University of Jakarta, focusing on <strong class="text-cc-text font-medium text-highlight">TypeScript</strong> and <strong class="text-cc-text font-medium text-highlight">Go</strong>. My objective is to build digital systems across web, mobile, and desktop environments that are reliable, efficient, and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>

    <TechStack id="tech" />
    <ProjectsShowcase id="work" />
    <CertificatesGallery id="certificates" />
    <TimelineSection id="timeline" />
    <ContactSection id="contact" />

    <FooterSection />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp, useRouter } from '#imports'

let ctx: any
const isNavigatingToWorks = ref(false)

const techStack = [
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Go', icon: 'go' },
  { name: 'Vue', icon: 'vuedotjs' },
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'Nuxt', icon: 'nuxtdotjs' },
  { name: 'NestJS', icon: 'nestjs' },
  { name: 'Gin', icon: 'gin' },
  { name: 'React Native', icon: 'react' },
  { name: 'Electron', icon: 'electron' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Git', icon: 'git' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Podman', icon: 'podman' }
]

const wrapTextNodes = (el: HTMLElement) => {
  if (el.dataset.wrapped === 'true') return;
  if (el.dataset.animating === 'true') return;
  if (el.closest('nav') || el.closest('.fixed')) return;

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null)
  const nodes: any[] = []
  let node
  while ((node = walker.nextNode())) {
    if (node.nodeValue && node.nodeValue.trim() !== '') nodes.push(node)
  }
  nodes.forEach(n => {
    const words = n.nodeValue.split(/(\s+)/)
    const fragment = document.createDocumentFragment()
    words.forEach((word: string) => {
      if (word.trim() === '') {
        fragment.appendChild(document.createTextNode(word))
      } else {
        const span = document.createElement('span')
        span.className = 'hover-word'
        span.textContent = word
        fragment.appendChild(span)
      }
    })
    n.parentNode.replaceChild(fragment, n)
  })
  el.dataset.wrapped = 'true'
}

const runScrambleEffect = (element: HTMLElement) => {
  if (element.dataset.animating === 'true') return
  element.dataset.animating = 'true'

  const originalText = element.getAttribute('data-text') || element.innerText
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|:<>?~'
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
      element.dataset.wrapped = 'false'

      requestAnimationFrame(() => {
        wrapTextNodes(element)
      })
    }
    iteration += 0.3
  }, 10)
}

onMounted(() => {
  const { $gsap, $ScrollTrigger, $router } = useNuxtApp()

  setTimeout(() => {
    document.querySelectorAll('.word-hover-target').forEach((el) => {
      if(!el.classList.contains('scramble-target')) {
        wrapTextNodes(el as HTMLElement)
      }
    });
  }, 100);

  window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-clientX', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-clientY', `${e.clientY}px`);
  });

  window.addEventListener('trigger-works-navigation', () => {
    isNavigatingToWorks.value = true

    setTimeout(() => {
       $gsap.fromTo('.nav-long-hand', { rotation: 0, svgOrigin: "100 110" }, {
          rotation: 4320,
          duration: 1.5,
          ease: 'power2.inOut',
          force3D: true,
          svgOrigin: "100 110"
       });
       $gsap.fromTo('.nav-short-hand', { rotation: 0, svgOrigin: "100 110" }, {
          rotation: 360,
          duration: 1.5,
          ease: 'power2.inOut',
          force3D: true,
          svgOrigin: "100 110",
          onComplete: () => {
            $gsap.to('.preloader-nav-clock', {
               scale: 40,
               opacity: 0,
               duration: 0.8,
               ease: 'power4.in',
               force3D: true,
               onComplete: () => {
                 const workSection = document.querySelector('#work') as HTMLElement | null;
                 if (workSection) {
                    useNuxtApp().$lenis?.scrollTo(workSection, { duration: 1.5 })
                 } else {
                    $router.push('/#work')
                 }
                 setTimeout(() => isNavigatingToWorks.value = false, 500)
               }
            })
          }
        })
    }, 100)
  })

  ctx = $gsap.context(() => {
    const masterTl = $gsap.timeline()

    masterTl.fromTo('.long-hand', {
      rotation: 0,
      svgOrigin: "100 110"
    }, {
      rotation: 4320,
      duration: 1.5,
      ease: 'power2.inOut',
      force3D: true,
      svgOrigin: "100 110"
    })
    .fromTo('.short-hand', {
      rotation: 0,
      svgOrigin: "100 110"
    }, {
      rotation: 360,
      duration: 1.5,
      ease: 'power2.inOut',
      force3D: true,
      svgOrigin: "100 110"
    }, "<")
    .to('.preloader-clock', {
      scale: 40,
      opacity: 0,
      duration: 1,
      ease: 'power4.in',
      force3D: true
    }, "-=0.2")
    .to('.preloader', {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
      onComplete: () => {
        document.querySelector('.preloader')?.remove()

        setTimeout(() => {
          document.querySelectorAll('.scramble-hero').forEach((el) => {
            runScrambleEffect(el as HTMLElement)
          })
        }, 100)

        document.querySelectorAll('.scramble-scroll').forEach((el) => {
          $ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            onEnter: () => runScrambleEffect(el as HTMLElement),
            onEnterBack: () => runScrambleEffect(el as HTMLElement),
          })
        })
      }
    }, '-=0.5')

    .from('.cascade-img', {
      y: -1200,
      rotation: () => Math.random() * 40 - 20,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power3.out',
      onComplete: () => {
        $gsap.utils.toArray('.cascade-img').forEach((img: any) => {
          $gsap.to(img, {
            y: "+=random(-15, 15)",
            x: "+=random(-10, 10)",
            rotation: "+=random(-4, 4)",
            duration: "random(5, 8)",
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            force3D: true
          })
        })
      }
    }, '-=0.2')

    .to('.fade-up-element', {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=1')
    .to('.status-dot, .status-text, .nav-element', {
      opacity: 1,
      duration: 1
    }, '-=0.8')

    const revealElements = document.querySelectorAll('.reveal-text, .fade-up-element')
    revealElements.forEach((el) => {
      $gsap.fromTo(el as HTMLElement,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })

    $gsap.to('.marquee-track', {
      xPercent: -100, repeat: -1, duration: 40, ease: 'none'
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
  window.removeEventListener('trigger-works-navigation', () => {})
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>