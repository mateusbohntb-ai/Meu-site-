  function setActive(el) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      el.classList.add('active');
    }

    function toggleMenu() {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('menu-icon');
      menu.classList.toggle('open');
      icon.className = menu.classList.contains('open') ? 'bi bi-x-lg' : 'bi bi-list';
    }

    function closeMobileMenu() {
      document.getElementById('mobile-menu').classList.remove('open');
      document.getElementById('menu-icon').className = 'bi bi-list';
    }

    // Scroll spy for nav
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });

    // Fade-up animation on scroll
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(el => observer.observe(el));