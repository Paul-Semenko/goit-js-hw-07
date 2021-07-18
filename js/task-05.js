const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);
const inputResult = document.querySelector('h1');
console.log(inputResult);


inputEl.addEventListener('input', (updateValue) => {
    updateValue.currentTarget.value.trim() === '' ?
        outputEl.textContent = 'незнакомец' : outputEl.textContent = updateValue.currentTarget.value

})