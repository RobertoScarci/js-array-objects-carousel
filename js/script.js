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

const slidesWrapperEl = document.querySelector('div.scroll');

let activeIndex = 0;

images.forEach((element, index) => {
    const classesForActiveSlide = (index === activeIndex) ? 'active' : '';
    slidesWrapperEl.innerHTML += generateNewSlide(element.image, element.title, element.text, index, classesForActiveSlide);

})

document.querySelector('.prev').addEventListener('click', function(){
    if (--activeIndex < 0) activeIndex = images.length - 1;
    changeToSlide(activeIndex);
})

document.querySelector('.next').addEventListener('click', function(){
    if (++activeIndex >= images.length) activeIndex = 0;
    changeToSlide(activeIndex);
})


// ==== Functions ====

function generateNewSlide(imgSrc, title, description, index, classesToAdd ){
    return `<div class="my-carousel-item ${classesToAdd}" carousel-item="${index}">
        <img class="img-fluid" src="${imgSrc}" alt="${title}'s picture">
        <div class="item-description px-3">
            <h2>
                ${title}
            </h2>
            <p>
                ${description}
            </p>
        </div>
    </div>`;
}

function changeToSlide(newIndex){
    document.querySelector('div.my-carousel-item.active').classList.remove('active');

    document.querySelector('div.my-carousel-item[carousel-item="' + newIndex +'"]').classList.add('active');
}


