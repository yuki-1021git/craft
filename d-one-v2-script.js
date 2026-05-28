// ========================================
// D-ONE Site Script
// ========================================

// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const spNav = document.getElementById('spNav');

if (hamburger && spNav) {
  hamburger.addEventListener('click', () => {
    spNav.classList.toggle('open');
  });

  document.querySelectorAll('.sp-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      spNav.classList.remove('open');
    });
  });
}

// スクロールアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// フォーム送信
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('お問い合わせを受け付けました。\n担当者よりご連絡いたします。');
    form.reset();
  });
}

// ヘッダーのスクロール時挙動（軽量）
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (header) {
    if (currentScroll > 100) {
      header.style.boxShadow = '0 1px 20px rgba(0,0,0,0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
  lastScroll = currentScroll;
});
