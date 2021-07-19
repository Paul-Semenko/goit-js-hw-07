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
const ingredientItem = ingredients.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.textContent = ingredient;
    return listEl

});
listTitle.append(...ingredientItem)