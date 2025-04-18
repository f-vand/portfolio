 // theme toggle (unchanged)
 const toggle = document.getElementById('theme-switch');
 const saved  = localStorage.getItem('theme');
 const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
 const initial = saved || (prefersDark ? 'dark' : 'light');
 document.documentElement.setAttribute('data-theme', initial);
 toggle.checked = (initial === 'light');
 toggle.addEventListener('change', () => {
   const theme = toggle.checked ? 'light' : 'dark';
   document.documentElement.setAttribute('data-theme', theme);
   localStorage.setItem('theme', theme);
 });

 const slides = Array.from(document.querySelectorAll('.carousel__slide'));
    const prev   = document.querySelector('.carousel__arrow--left');
    const next   = document.querySelector('.carousel__arrow--right');
    let current  = 2;
    const gap    = 270;

    function renderCarousel() {
      const N    = slides.length;
      const half = Math.floor(N/2);
      slides.forEach((slide,i) => {
        const raw    = i - current;
        const offset = ((raw + N + half) % N) - half;
        const absOff = Math.abs(offset);

        let z, angle, opacity;
        if (offset === 0) {
          z = 200; angle = 0;    opacity = 1;
        } else if (absOff === 1) {
          z =   0; angle = offset * 25; opacity = 1;
        } else {
          z = -200; angle = offset * 25; opacity = 0.6;
        }

        slide.style.transform = `
          translateX(${offset * gap}px)
          translateZ(${z}px)
          rotateY(${angle}deg)
        `;
        slide.style.zIndex  = 100 - absOff;
        slide.style.opacity = opacity;
      });
    }

    prev.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      renderCarousel();
    });
    next.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      renderCarousel();
    });

    renderCarousel();

    // auto‑advance every 7s
    setInterval(() => {
      current = (current + 1) % slides.length;
      renderCarousel();
    }, 7000);

    const tSlides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const tDots   = Array.from(document.querySelectorAll('.testimonial-dots .dot'));
    let tIndex = 0;
  
    function showTestimonial(i) {
      tSlides.forEach((s, idx) => s.classList.toggle('active', idx === i));
      tDots  .forEach((d, idx) => d.classList.toggle('active', idx === i));
      tIndex = i;
    }
  
    // auto‑rotate every 4s
    setInterval(() => {
      showTestimonial((tIndex + 1) % tSlides.length);
    }, 4000);
  
    // allow clicking dots
    tDots.forEach(dot => {
      dot.addEventListener('click', () => showTestimonial(Number(dot.dataset.index)));
    });