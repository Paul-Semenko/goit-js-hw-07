'use strict'
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listTitle = document.querySelector('#ingredients');
ingredients.forEach(function(ingredient) {
    const listEl = document.createElement('li');
    listEl.innerHTML = ingredient;
    listTitle.appendChild(listEl);
});