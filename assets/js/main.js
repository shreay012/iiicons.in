(function () {
  var page = document.querySelector('.page');
  var wrapper = document.querySelector('.scale-wrapper');

  function scalePage() {
    if (!page || !wrapper) return;
    var scale = Math.min(window.innerWidth / 1440, 1);
    page.style.transform = 'scale(' + scale + ')';
    wrapper.style.height = (page.offsetHeight * scale) + 'px';
  }

  window.addEventListener('resize', scalePage);
  window.addEventListener('load', scalePage);
  document.addEventListener('DOMContentLoaded', scalePage);

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sec-carousel').forEach(function (sec) {
      var track = sec.querySelector('.track');
      var prev = sec.querySelector('.nav-arrow.prev');
      var next = sec.querySelector('.nav-arrow.next');
      if (!track) return;
      var step = 262; // card width + gap
      if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step, behavior: 'smooth' }); });
      if (next) next.addEventListener('click', function () { track.scrollBy({ left: step, behavior: 'smooth' }); });
    });
  });
})();
