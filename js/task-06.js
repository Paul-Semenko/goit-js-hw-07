const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
inputEl.addEventListener('blur', onInput);

function onInput() {
    if (inputEl.value.length === +inputEl.dataset.length) {
        inputValidation('valid', 'invalid');

    } else {
        inputValidation('invalid', 'valid');
    }
}
const inputValidation = (add, remove) => {
    inputEl.classList.remove(remove);
    inputEl.classList.add(add);
}