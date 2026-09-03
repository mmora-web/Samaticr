/**
 * Samati — Script principal
 * Navegación, scroll, validación de formulario e interacciones
 */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Elementos del DOM
     ---------------------------------------------------------- */
  const header = document.getElementById('header');
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelectorAll('.nav__link');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  const currentYearEl = document.getElementById('currentYear');

  const sections = document.querySelectorAll('section[id]');

  /* ----------------------------------------------------------
     Año dinámico en footer
     ---------------------------------------------------------- */
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------
     Navbar — scroll y estado activo
     ---------------------------------------------------------- */
  function handleHeaderScroll() {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  function setActiveNavLink() {
    const scrollPos = window.scrollY + header.offsetHeight + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', function () {
    handleHeaderScroll();
    setActiveNavLink();
  });

  handleHeaderScroll();

  /* ----------------------------------------------------------
     Zoom en scroll — fondos de sección (despliegue)
     ---------------------------------------------------------- */
  const scrollZoomSections = document.querySelectorAll('.hero, .about, .team');
  let scrollZoomTicking = false;
  const scrollZoomMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const SCROLL_ZOOM_MAX = 1.38;
  const SCROLL_ZOOM_MIN = 1;
  const SCROLL_ZOOM_RANGE = SCROLL_ZOOM_MAX - SCROLL_ZOOM_MIN;
  const SCROLL_ZOOM_EASE = 1.65;
  const SCROLL_ZOOM_DEPLOY_TAIL = 0.45;

  function easeScrollZoom(progress) {
    return 1 - Math.pow(1 - progress, SCROLL_ZOOM_EASE);
  }

  function getScrollZoomProgress(section) {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const deployDistance = vh * (1 + SCROLL_ZOOM_DEPLOY_TAIL);

    if (rect.top >= vh) {
      return 0;
    }

    if (rect.bottom <= 0) {
      return 1;
    }

    if (section.classList.contains('hero')) {
      const heroDeployDistance = Math.max(section.offsetHeight * 0.8, vh * 0.55);
      return Math.min(1, Math.max(0, window.scrollY / heroDeployDistance));
    }

    return Math.min(1, Math.max(0, (vh - rect.top) / deployDistance));
  }

  function getScrollZoomScale(section) {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect.top >= vh) {
      return SCROLL_ZOOM_MAX;
    }

    if (rect.bottom <= 0) {
      return SCROLL_ZOOM_MIN;
    }

    const progress = getScrollZoomProgress(section);
    return SCROLL_ZOOM_MAX - easeScrollZoom(progress) * SCROLL_ZOOM_RANGE;
  }

  const revealedSections = new WeakSet();

  function revealSectionContent(section) {
    if (revealedSections.has(section)) return;
    revealedSections.add(section);

    section.querySelectorAll('.section-reveal, .about__reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  function updateScrollZoom() {
    if (scrollZoomMotionQuery.matches) {
      scrollZoomTicking = false;
      return;
    }

    scrollZoomSections.forEach(function (section) {
      const media = section.querySelector('[class*="__bg-media"]');
      if (media) {
        media.style.transform = 'scale(' + getScrollZoomScale(section).toFixed(4) + ')';
      }

      if (getScrollZoomProgress(section) > 0.04) {
        revealSectionContent(section);
      }
    });

    scrollZoomTicking = false;
  }

  function requestScrollZoomUpdate() {
    if (!scrollZoomTicking) {
      scrollZoomTicking = true;
      requestAnimationFrame(updateScrollZoom);
    }
  }

  if (scrollZoomSections.length) {
    function runHeroIntroDeploy() {
      const hero = document.querySelector('.hero');
      const media = hero && hero.querySelector('.hero__bg-media');
      if (!hero || scrollZoomMotionQuery.matches) return;

      if (window.scrollY > 20) {
        revealSectionContent(hero);
        return;
      }

      if (!media) return;

      revealSectionContent(hero);

      media.style.transform = 'scale(' + SCROLL_ZOOM_MAX + ')';
      media.style.transition = 'transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)';

      requestAnimationFrame(function () {
        media.style.transform = 'scale(' + SCROLL_ZOOM_MIN + ')';
      });

      window.setTimeout(function () {
        media.style.transition = '';
        updateScrollZoom();
      }, 1900);
    }

    window.addEventListener('scroll', requestScrollZoomUpdate, { passive: true });
    window.addEventListener('resize', requestScrollZoomUpdate);
    updateScrollZoom();

    if (scrollZoomMotionQuery.matches) {
      scrollZoomSections.forEach(function (section) {
        revealSectionContent(section);
      });
    } else {
      runHeroIntroDeploy();
    }
  }

  /* ----------------------------------------------------------
     Menú hamburguesa (mobile)
     ---------------------------------------------------------- */
  function toggleNav() {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeNav() {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeNav();
    }
  });

  /* ----------------------------------------------------------
     Scroll suave para enlaces internos
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----------------------------------------------------------
     Validación del formulario de contacto
     ---------------------------------------------------------- */
  const formFields = {
    nombre: {
      el: document.getElementById('nombre'),
      errorEl: document.getElementById('error-nombre'),
      validate: function (value) {
        if (!value.trim()) return 'El nombre completo es obligatorio.';
        if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
        return '';
      }
    },
    email: {
      el: document.getElementById('email'),
      errorEl: document.getElementById('error-email'),
      validate: function (value) {
        if (!value.trim()) return 'El correo electrónico es obligatorio.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Ingresa un correo electrónico válido.';
        return '';
      }
    },
    telefono: {
      el: document.getElementById('telefono'),
      errorEl: document.getElementById('error-telefono'),
      validate: function (value) {
        if (!value.trim()) return 'El teléfono es obligatorio.';
        const phoneRegex = /^[\d\s\-+().]{7,20}$/;
        if (!phoneRegex.test(value.trim())) return 'Ingresa un número de teléfono válido.';
        return '';
      }
    },
    asunto: {
      el: document.getElementById('asunto'),
      errorEl: document.getElementById('error-asunto'),
      validate: function (value) {
        if (!value.trim()) return 'El asunto es obligatorio.';
        return '';
      }
    },
    mensaje: {
      el: document.getElementById('mensaje'),
      errorEl: document.getElementById('error-mensaje'),
      validate: function (value) {
        if (!value.trim()) return 'El mensaje es obligatorio.';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
        return '';
      }
    }
  };

  function showFieldError(field, message) {
    field.el.classList.add('error');
    field.errorEl.textContent = message;
  }

  function clearFieldError(field) {
    field.el.classList.remove('error');
    field.errorEl.textContent = '';
  }

  function showFormFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.className = 'form__feedback show form__feedback--' + type;
  }

  function hideFormFeedback() {
    formFeedback.className = 'form__feedback';
    formFeedback.textContent = '';
  }

  Object.keys(formFields).forEach(function (key) {
    const field = formFields[key];
    field.el.addEventListener('input', function () {
      clearFieldError(field);
      hideFormFeedback();
    });

    field.el.addEventListener('blur', function () {
      const error = field.validate(field.el.value);
      if (error) {
        showFieldError(field, error);
      }
    });
  });

  function validateForm() {
    let isValid = true;

    Object.keys(formFields).forEach(function (key) {
      const field = formFields[key];
      const error = field.validate(field.el.value);

      if (error) {
        showFieldError(field, error);
        isValid = false;
      } else {
        clearFieldError(field);
      }
    });

    return isValid;
  }

  /**
   * Simula el envío del formulario.
   * Para conectar un backend real, reemplaza esta función con una
   * llamada fetch() a tu API, por ejemplo:
   *
   * fetch('/api/contact', {
   *   method: 'POST',
   *   headers: { 'Content-Type': 'application/json' },
   *   body: JSON.stringify(formData)
   * })
   */
  function simulateFormSubmit(formData) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log('Datos del formulario (simulación):', formData);
        resolve({ success: true });
      }, 1500);
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      hideFormFeedback();

      if (!validateForm()) {
        showFormFeedback('Por favor, corrige los errores en el formulario.', 'error');
        const firstError = contactForm.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      const formData = {
        nombre: formFields.nombre.el.value.trim(),
        email: formFields.email.el.value.trim(),
        telefono: formFields.telefono.el.value.trim(),
        asunto: formFields.asunto.el.value.trim(),
        mensaje: formFields.mensaje.el.value.trim()
      };

      simulateFormSubmit(formData)
        .then(function () {
          showFormFeedback(
            '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
            'success'
          );
          contactForm.reset();
        })
        .catch(function () {
          showFormFeedback(
            'Ocurrió un error al enviar el mensaje. Intenta de nuevo más tarde.',
            'error'
          );
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar mensaje';
        });
    });
  }

  /* ----------------------------------------------------------
     Animación de entrada para tarjetas (Intersection Observer)
     ---------------------------------------------------------- */
  const animatedElements = document.querySelectorAll('.service-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animatedElements.forEach(function (el, index) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease ' + (index % 3) * 0.1 + 's, transform 0.5s ease ' + (index % 3) * 0.1 + 's';
      observer.observe(el);
    });
  }

  document.querySelectorAll('.team-card__img').forEach(function (img) {
    img.addEventListener('error', function () {
      this.remove();
    });
  });

  /* ----------------------------------------------------------
     Carrusel — Equipo de trabajo (3 visibles, táctil)
     ---------------------------------------------------------- */
  const teamTrack = document.getElementById('teamTrack');
  const teamCarousel = document.getElementById('teamCarousel');

  if (teamTrack && teamCarousel) {
    const teamCards = teamTrack.querySelectorAll('.team-card');
    let teamIndex = 0;
    let teamDragStartX = 0;
    let teamDragDelta = 0;
    let teamIsDragging = false;
    let teamAutoTimer = null;
    const TEAM_INTERVAL_MS = 10000;
    const TEAM_SWIPE_RATIO = 0.18;
    const teamMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    function getTeamVisibleCount() {
      const styles = window.getComputedStyle(teamCarousel);
      return parseInt(styles.getPropertyValue('--team-visible'), 10) || 3;
    }

    function getTeamMaxIndex() {
      return Math.max(0, teamCards.length - getTeamVisibleCount());
    }

    function getTeamStep() {
      const card = teamCards[0];
      if (!card) return teamCarousel.offsetWidth / getTeamVisibleCount();
      const trackStyle = window.getComputedStyle(teamTrack);
      const gap = parseFloat(trackStyle.columnGap || trackStyle.gap) || 14;
      return card.offsetWidth + gap;
    }

    function updateTeamCarousel(animate, dragOffset) {
      dragOffset = dragOffset || 0;
      const offset = -(teamIndex * getTeamStep()) + dragOffset;
      teamTrack.style.transition = animate === false || teamIsDragging
        ? 'none'
        : 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
      teamTrack.style.transform = 'translateX(' + offset + 'px)';

      if (animate === false && !teamIsDragging) {
        teamTrack.offsetHeight;
        teamTrack.style.transition = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
      }
    }

    function teamGoNext() {
      const maxIndex = getTeamMaxIndex();
      teamIndex = teamIndex >= maxIndex ? 0 : teamIndex + 1;
      updateTeamCarousel(true);
    }

    function teamGoPrev() {
      const maxIndex = getTeamMaxIndex();
      teamIndex = teamIndex <= 0 ? maxIndex : teamIndex - 1;
      updateTeamCarousel(true);
    }

    function stopTeamAutoAdvance() {
      if (teamAutoTimer) {
        window.clearInterval(teamAutoTimer);
        teamAutoTimer = null;
      }
    }

    function startTeamAutoAdvance() {
      stopTeamAutoAdvance();
      if (teamMotionQuery.matches || teamCards.length <= getTeamVisibleCount()) return;
      teamAutoTimer = window.setInterval(teamGoNext, TEAM_INTERVAL_MS);
    }

    function finishTeamDrag() {
      if (!teamIsDragging) return;

      teamIsDragging = false;
      teamCarousel.classList.remove('is-dragging');
      const threshold = getTeamStep() * TEAM_SWIPE_RATIO;

      if (teamDragDelta < -threshold) {
        teamGoNext();
      } else if (teamDragDelta > threshold) {
        teamGoPrev();
      } else {
        updateTeamCarousel(true);
      }

      teamDragDelta = 0;
      startTeamAutoAdvance();
    }

    teamCarousel.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;

      teamIsDragging = true;
      teamDragStartX = e.clientX;
      teamDragDelta = 0;
      teamCarousel.classList.add('is-dragging');
      teamCarousel.setPointerCapture(e.pointerId);
      stopTeamAutoAdvance();
      updateTeamCarousel(false, 0);
    });

    teamCarousel.addEventListener('pointermove', function (e) {
      if (!teamIsDragging) return;

      teamDragDelta = e.clientX - teamDragStartX;
      updateTeamCarousel(false, teamDragDelta);
    });

    teamCarousel.addEventListener('pointerup', finishTeamDrag);
    teamCarousel.addEventListener('pointercancel', finishTeamDrag);

    teamCarousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stopTeamAutoAdvance();
        teamGoNext();
        startTeamAutoAdvance();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stopTeamAutoAdvance();
        teamGoPrev();
        startTeamAutoAdvance();
      }
    });

    updateTeamCarousel(false);

    window.addEventListener('resize', function () {
      if (teamIndex > getTeamMaxIndex()) {
        teamIndex = getTeamMaxIndex();
      }
      updateTeamCarousel(false);
    });

    startTeamAutoAdvance();
  }

})();
