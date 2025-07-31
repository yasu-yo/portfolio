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
    threshold: 0.05 // 画面に少しでも入ったらすぐ表示
  });

  targets.forEach(target => observer.observe(target));
});

const images = [
  'img/header2.jpg', 
  'img/header3.jpg'];
let index = 0;

// ヘッダー画像の自動切り替え
const headerImages = [
  'img/header2.jpg', // 緑の道
  'img/header.jpg',  // 青空
  'img/header3.jpg'  // 夕焼け
];

let currentHeader = 0;
const heroHeader = document.querySelector('.hero-header');

// 画像プリロード
window.addEventListener('load', () => {
  headerImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});

function changeHeaderImage() {
  currentHeader = (currentHeader + 1) % headerImages.length;
  heroHeader.style.backgroundImage = `url('${headerImages[currentHeader]}')`;
}


setInterval(changeHeaderImage, 3500);

document.addEventListener('DOMContentLoaded', () => {
  heroHeader.style.backgroundImage = `url('${headerImages[0]}')`;
});
