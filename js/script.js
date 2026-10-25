document.getElementById('tahun').textContent = new Date().getFullYear();
var kurangGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Efek mengetik (ubah kata-katanya di daftarKata)
var kataEl = document.getElementById('kata');
var daftarKata = ['lulusan Sistem Informasi', 'administrator basis data bersertifikat'];
if (kataEl && !kurangGerak) {
  var k = 0, h = 0, hapus = false;
  (function ketik() {
    var kata = daftarKata[k];
    kataEl.textContent = kata.slice(0, h);
    var jeda = hapus ? 35 : 80;
    if (!hapus && h === kata.length) { hapus = true; jeda = 1600; }
    else if (hapus && h === 0) { hapus = false; k = (k + 1) % daftarKata.length; jeda = 400; }
    else { h += hapus ? -1 : 1; }
    setTimeout(ketik, jeda);
  })();
}

// Muncul perlahan saat di-scroll
var target = document.querySelectorAll('section.blok h2, section.blok .isi > *, .fakta, .marquee');
if ('IntersectionObserver' in window && !kurangGerak) {
  var io = new IntersectionObserver(function (entri) {
    entri.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('tampil'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  target.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 3) * 70 + 'ms';
    io.observe(el);
  });
}

// Menandai menu yang sedang aktif
var tautan = document.querySelectorAll('.pil a[href^="#"]');
var peta = {};
tautan.forEach(function (a) { peta[a.getAttribute('href').slice(1)] = a; });
if ('IntersectionObserver' in window) {
  var so = new IntersectionObserver(function (entri) {
    entri.forEach(function (e) {
      if (e.isIntersecting && peta[e.target.id]) {
        tautan.forEach(function (a) { a.removeAttribute('aria-current'); });
        peta[e.target.id].setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(peta).forEach(function (id) {
    var el = document.getElementById(id);
    if (el && id !== 'atas') so.observe(el);
  });
}
