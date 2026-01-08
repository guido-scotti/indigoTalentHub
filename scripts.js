document.addEventListener('DOMContentLoaded', () => {

  /* ======================
     CARRUSEL DE VIDEOS
  ====================== */

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  const slides = document.querySelectorAll('.video-slide');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const video = slide.querySelector('video');

      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  showSlide(current);

  /* ======================
     MODAL DE VIDEO
  ====================== */

  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('video-ampliado');
  const closeBtn = document.querySelector('.close-modal');

  let lastBackgroundVideo = null;

  slides.forEach(slide => {
    const video = slide.querySelector('video');
    if (!video) return;

    // permitir inline (desktop + mobile)
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    video.addEventListener('click', () => {

      // 📱 MOBILE → abrir modal directamente
      if (isMobile) {
        openModal(video);
        return;
      }

      // 🖥 DESKTOP → play / pause inline
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });

  });

  function openModal(video) {
    const source = video.querySelector('source');
    const src = source ? source.src : video.src;

    lastBackgroundVideo = video;
    video.pause();

    modal.classList.add('active');
    document.body.classList.add('no-scroll');

    modalVideo.src = src;
    modalVideo.currentTime = 0;
    modalVideo.play();
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');

    modalVideo.pause();
    modalVideo.src = '';

    lastBackgroundVideo = null;
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

});