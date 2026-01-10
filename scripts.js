document.addEventListener('DOMContentLoaded', () => {

  /* ======================
     CARRUSEL DE VIDEOS
  ====================== */

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
  const modalVideo = document.querySelector('.modalVideo');
  const closeBtn = document.querySelector('.close-modal');
  let lastBackgroundVideo = null;
  let lastBackgroundWasPlaying = false;

  if (modalVideo) {
    try {
      modalVideo.setAttribute('controlsList', 'nofullscreen nodownload');
      modalVideo.setAttribute('playsinline', '');
      modalVideo.setAttribute('webkit-playsinline', '');
      modalVideo.disablePictureInPicture = true;
      modalVideo.addEventListener('dblclick', (ev) => ev.preventDefault());
    } catch (e) {}
  }

  slides.forEach(slide => {
    const video = slide.querySelector('video');
    if (!video) return;

    try { if (typeof video.volume === 'number' && video.volume === 1) video.volume = 0.5; } catch (e) {}
    try { video.setAttribute('playsinline', ''); video.setAttribute('webkit-playsinline', ''); } catch (e) {}

    video.addEventListener('click', (e) => {
      if (e.target !== video) return;
      try {
        if (video.paused) video.play(); else video.pause();
      } catch (err) {}
    });

    const expandBtn = slide.querySelector('.expand-btn');
    if (expandBtn) {
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const source = video.querySelector('source');
        const src = source ? source.src : video.src;
        if (!modal || !modalVideo) return;

        lastBackgroundVideo = video;
        lastBackgroundWasPlaying = !video.paused && !video.ended;
        try { video.pause(); } catch (e) {}

        modal.classList.add('active');

        try { document.body.classList.add('no-scroll'); } catch (e) {}
        modalVideo.src = src;

        try { modalVideo.volume = (typeof video.volume === 'number' ? video.volume : 0.5); } catch (e) {}
        modalVideo.play();
      });
    }
  });

  function closeModal() {
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.src = '';
    }
    if (modal) modal.classList.remove('active');
    try { document.body.classList.remove('no-scroll'); } catch (e) {}

    if (lastBackgroundVideo) {
      try { lastBackgroundVideo.currentTime = 0; } catch (e) {}
      if (lastBackgroundWasPlaying) {
        try { lastBackgroundVideo.play(); } catch (e) {}
      }
    }
    lastBackgroundVideo = null;
    lastBackgroundWasPlaying = false;
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') closeModal();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  }

  /* ======================
     SISTEMA DE MAIL
  ====================== */

  const mailLink = document.getElementById('mail-link');
  if (!mailLink) return;

  const email = 'info@indigotalenthub.com';
  const subject = encodeURIComponent('Contacto desde la web');
  const body = encodeURIComponent('Hola Juan,\n\n');

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile → mail app nativa
    mailLink.href = `mailto:${email}?subject=${subject}&body=${body}`;
  } else {
    // Desktop → Gmail web
    mailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    mailLink.target = '_blank';
    mailLink.rel = 'noopener noreferrer';
  }

    /* ======================
     EMAIL SENDING 
  ====================== */
  (function(){
  emailjs.init("CdLb5SWx4R2_52mgO");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_6y83n3o", "template_zzy4zi3", this)
    .then(() => {
      alert("✅ Mensaje enviado correctamente!");
      form.reset(); // limpia el formulario
    })
    .catch(err => {
      console.error("❌ Error:", err);
      alert("Hubo un error al enviar el mensaje, intentá de nuevo.");
    });
});

});