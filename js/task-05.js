const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

const inputResult = document.querySelector('h1');



inputEl.addEventListener('input', (updateValue) => {
    updateValue.currentTarget.value.trim() === '' ?
        outputEl.textContent = 'незнакомец' : outputEl.textContent = updateValue.currentTarget.value

})