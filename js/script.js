const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const listElement = document.querySelector('div.scroll');

const beforeButton = document.querySelector('.prev');
const afterButton = document.querySelector('.next');

let activeImage = 0;


createImage(images, listElement, activeImage);

beforeButton.addEventListener("click", () => {

    activeImage == 0 ? activeImage = images.length : 0;

    activeImage -= 1;

    createImage(images, listElement, activeImage);
});

afterButton.addEventListener("click", () => {

    activeImage == images.length - 1 ? activeImage = -1 : 0;

    activeImage += 1;

    createImage(images, listElement, activeImage);
});


// ==== Functions ====

function createImage(image, output, activeImage) {
    output.innerHTML += `
    <div>
        <img src="${image[activeImage].image}" alt="${image[activeImage].title} game">
        <div class="info">
            <h2>${image[activeImage].title}</h2>
            <p>${image[activeImage].text}</p>
        </div>
    </div>`
}


