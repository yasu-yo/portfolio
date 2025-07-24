document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  targets.forEach(target => observer.observe(target));
});

const images = ['img/header2.jpg', 'img/header3.jpg'];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.querySelector('.hero-header').style.backgroundImage = `url('${images[index]}')`;
}, 6000);
