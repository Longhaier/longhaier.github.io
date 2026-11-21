(function () {
  'use strict';
  var menu = document.getElementById('headerMenu');
  var nav = document.getElementById('headerNav');

  if (menu && nav) {
    function setMenu(open) {
      nav.classList.toggle('is-open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
    }
    menu.addEventListener('click', function (event) {
      event.stopPropagation();
      setMenu(menu.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && event.target !== menu) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { setMenu(false); menu.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 800) setMenu(false);
    });
  }

  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    function toggleBackToTop() {
      var top = window.pageYOffset || document.documentElement.scrollTop || 0;
      backToTop.classList.toggle('back-to-top-show', top > 260);
    }
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();
  }

  if (window.smoothScroll && typeof window.smoothScroll.init === 'function') {
    window.smoothScroll.init({ speed: 450, easing: 'easeInOutCubic', offset: 20 });
  }
}());
