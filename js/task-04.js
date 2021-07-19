const counterValue = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('button');
decrementBtn.classList.add('button-decrement');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
incrementBtn.classList.add('button-increment')
const valueEl = document.querySelector('#value');




decrementBtn.addEventListener('click', function() {
    console.log('кликнули на дикремент!');
    counterValue.decrement();


    valueEl.textContent = counterValue.value;
});
incrementBtn.addEventListener('click', function() {
    console.log('кликнули на инкремент!')
    counterValue.increment();


    valueEl.textContent = counterValue.value;


});