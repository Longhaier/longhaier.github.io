(function () {
  'use strict';
  // The mobile navigation uses native <details> and works without JavaScript.
  // JS only closes it after a user selects a link or presses Escape.
  var mobile = document.querySelector('.site-mobile-nav');
  if (mobile) {
    mobile.addEventListener('click', function (event) {
      if (event.target.closest('a')) mobile.open = false;
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobile.open) {
        mobile.open = false;
        var summary = mobile.querySelector('summary');
        if (summary) summary.focus();
      }
    });
  }

  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    function toggleBackToTop() {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      backToTop.classList.toggle('back-to-top-show', y > 260);
    }
    window.addEventListener('scroll', toggleBackToTop, {passive:true});
    toggleBackToTop();
  }
}());
