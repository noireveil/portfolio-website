<template>
  <div class="min-h-screen bg-cc-bg text-cc-text font-sans selection:bg-cc-text selection:text-cc-bg">
    <Navbar />

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const wrapTextNodes = (el: HTMLElement) => {
  if (el.dataset.wrapped === 'true') return;
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

onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-clientX', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-clientY', `${e.clientY}px`);
  });

  document.querySelectorAll('.word-hover-target').forEach((el) => {
    wrapTextNodes(el as HTMLElement)
  });
})
</script>