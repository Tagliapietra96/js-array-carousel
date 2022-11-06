const imgsList = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const mainContainerEl = document.querySelector('section.container');
const rootEl = document.documentElement
const rootStyles = rootEl.style;
const prevBtnEl = document.getElementById('prev-btn');
const nextBtnEl = document.getElementById('next-btn');

let lastIndex = imgsList.length - 1;
let currentIndex = 0
let cssImgsNumber = rootStyles.setProperty('--imgs-number', imgsList.length)

nextBtnEl.addEventListener('click', function () {
    let currentImg = document.querySelector(`section > img:nth-child(${currentIndex + 1})`);
    currentImg.classList.remove('active');

    let currentCard = document.querySelector(`#scroll-container > div:nth-child(${currentIndex + 1})`);
    currentCard.classList.remove('active');

    currentIndex++;

    if (currentIndex > lastIndex) {
        currentIndex = 0;
    }

    let nextImg = document.querySelector(`section > img:nth-child(${currentIndex + 1})`);
    nextImg.classList.add('active');

    let nextCard = document.querySelector(`#scroll-container > div:nth-child(${currentIndex + 1})`);
    nextCard.classList.add('active');
});

prevBtnEl.addEventListener('click', function(){
    let currentImg = document.querySelector(`section > img:nth-child(${currentIndex + 1})`);
    currentImg.classList.remove('active');

    let currentCard = document.querySelector(`#scroll-container > div:nth-child(${currentIndex + 1})`);
    currentCard.classList.remove('active');

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = lastIndex;
    }

    let nextImg = document.querySelector(`section > img:nth-child(${currentIndex + 1})`);
    nextImg.classList.add('active');

    let nextCard = document.querySelector(`#scroll-container > div:nth-child(${currentIndex + 1})`);
    nextCard.classList.add('active');
});

