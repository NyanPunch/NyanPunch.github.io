const sectionsContainer = document.querySelector('.sections-container');
const navLinks = document.querySelectorAll('.nav-links a');
let currentSection = 0;

function goToSection(index) {
    currentSection = index;
    sectionsContainer.style.transform = `translateX(-${index * 100}vw)`;
}

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        goToSection(index);
    });
});

// 키보드 네비게이션 추가
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentSection < navLinks.length - 1) {
        goToSection(currentSection + 1);
    } else if (e.key === 'ArrowLeft' && currentSection > 0) {
        goToSection(currentSection - 1);
    }
});

// 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = '#fff';
        nav.style.color = '#333';
    } else {
        nav.style.background = '#333';
        nav.style.color = '#fff';
    }
});

// 폼 제출 처리
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('메시지가 전송되었습니다. 감사합니다!');
    this.reset();
});

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    if (currentSection > 0) {
        goToSection(currentSection - 1);
    }
});

rightArrow.addEventListener('click', () => {
    if (currentSection < navLinks.length - 1) {
        goToSection(currentSection + 1);
    }
});

function updateArrowVisibility() {
    leftArrow.style.display = currentSection === 0 ? 'none' : 'block';
    rightArrow.style.display = currentSection === navLinks.length - 1 ? 'none' : 'block';
}

function goToSection(index) {
    currentSection = index;
    sectionsContainer.style.transform = `translateX(-${index * 100}vw)`;
    updateArrowVisibility();
}

// 초기 화살표 가시성 설정
updateArrowVisibility();
