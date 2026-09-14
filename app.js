const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

// Progressive enhancement: without JavaScript all 23 lessons stay visible.
function setModuleOpen(module, open) {
  module.dataset.open = String(open);
  module.querySelector('.t-acc-head').setAttribute('aria-expanded', String(open));
  const panel = module.querySelector('.t-acc-panel');
  panel.inert = !open;
  panel.setAttribute('aria-hidden', String(!open));
  module.querySelector('.module-action').textContent = open ? 'Ocultar aulas' : 'Ver aulas';
}

document.querySelectorAll('.t-acc').forEach((module) => {
  setModuleOpen(module, false);
  module.querySelector('.t-acc-head').addEventListener('click', () => {
    setModuleOpen(module, module.dataset.open !== 'true');
  });
});

// Transitions.dev texts reveal: one entrance, then the content remains visible.
const revealBlocks = document.querySelectorAll('[data-reveal]');
function showText(block) {
  block.classList.remove('is-hiding', 'is-shown');
  void block.offsetHeight;
  block.classList.add('is-shown');
}
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        showText(target);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.12 });
  revealBlocks.forEach((block) => {
    block.classList.remove('is-shown');
    observer.observe(block);
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      observer.disconnect();
      revealBlocks.forEach((block) => block.classList.add('is-shown'));
    }
  });
}

document.getElementById('play-lesson').addEventListener('click', (event) => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const player = document.createElement('iframe');
  player.src = 'https://www.youtube-nocookie.com/embed/H2Y10woE4OQ?autoplay=1&rel=0';
  player.title = 'Aula grátis — English Bootcamp';
  player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  player.allowFullscreen = true;
  player.referrerPolicy = 'strict-origin-when-cross-origin';
  document.getElementById('video-shell').replaceChildren(player);
  player.focus();
});
