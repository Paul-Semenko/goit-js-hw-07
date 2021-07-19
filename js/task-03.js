const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const listElem = document.querySelector('#gallery');



const galleryEl = images.map(element => {
    const galleryImg = `<li class="gallery-item"><img src="${element.url}" alt="${element.alt}" width="520" height="350"></li>`;
    return galleryImg;
});
listElem.insertAdjacentHTML("beforeend", galleryEl.join(' '));
listElem.setAttribute("style", "list-style:none; display: flex; justify-content: space-between;")