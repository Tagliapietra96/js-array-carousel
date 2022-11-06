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

let cssImgsNumber = rootStyles.setProperty('--imgs-number', imgsList.length)


