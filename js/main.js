const track = document.getElementById('slidesWrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const slider = document.querySelector('.slider');

let index = 0;
const maxIndex = () => Math.max(0, slides.length - (innerWidth >= 992 ? 3 : innerWidth >= 768 ? 2 : 1));

function move() {
    track.style.transform = `translateX(-${index * slides[0].offsetWidth}px)`;
}

function next() {
    index = index < maxIndex() ? index + 1 : 0;
    move();
}

let autoTimer = setInterval(next, 4000);

function restartAutoPlay() {
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 4000);
}

nextBtn.onclick = () => { next(); restartAutoPlay(); };
prevBtn.onclick = () => { if (index > 0) { index--; move(); restartAutoPlay(); } };

slider.onmouseenter = () => clearInterval(autoTimer);
slider.onmouseleave = restartAutoPlay;

addEventListener('resize', move);

move();





const deadline = new Date(2026, 10, 30, 23, 59, 59);
const timer = document.getElementById('timer1');

setInterval(() => {
    const diff = deadline - new Date();

    if (diff <= 0) {
        timer.textContent = 'Время истекло';
        return;
    }

    const s = Math.floor(diff / 1000);
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;

    timer.textContent = `${d}д ${h}ч ${m}м ${sec}с`;
}, 1000);



document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами.');
    const modal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
    if (modal) modal.hide();
    this.reset();
});