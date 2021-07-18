const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);
const resultEl = document.querySelector('#text');
console.log(resultEl);

inputEl.addEventListener('input', increaseFont);

function increaseFont(e) {

    resultEl.style.fontSize = e.currentTarget.value + 'px';
}