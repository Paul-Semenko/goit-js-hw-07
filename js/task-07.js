const inputEl = document.querySelector('#font-size-control');

const resultEl = document.querySelector('#text');


inputEl.addEventListener('input', increaseFont);

function increaseFont(e) {

    resultEl.style.fontSize = e.currentTarget.value + 'px';
}