alert("PopUP есть!!! перегрузите страницу !!! все будет")
const styleLinkNavigation = document.querySelectorAll('.styleLinkNavigation');
const styleDesigned = document.querySelector('.styleDesigned');
const cardsPets = document.querySelectorAll('.cardsPets');
const contentDescriptionPets = document.querySelectorAll('.contentDescriptionPets');
const popUpDescriptionPets = document.querySelectorAll('.popUpDescriptionPets');
const namePets = document.querySelectorAll('.namePets');
const placeOfResidence = document.querySelectorAll('.placeOfResidence');
const imgPets = document.querySelectorAll('.imgPets');
const wrapperBurgerMenu = document.querySelector('.wrapperBurgerMenu');
const burgermenu = document.querySelector('.burgermenu');
const closeBurgerMenu = document.querySelector('.closeBurgerMenu');
const blockingContent = document.querySelector('.blockingContent');

const wrapperCardTestimonials = document.querySelectorAll('.wrapperCardTestimonials');
const wrapperCardTestimonialsPopUP = document.querySelector('.wrapperCardTestimonialsPopUP');
const closePopUpTestimonials = document.querySelector('.closePopUpTestimonials');
const styleTextNamePiplPopUP = document.querySelector('.styleTextNamePiplPopUP');
const styleTextNamePipl = document.querySelectorAll('.styleTextNamePipl');
function removeActive() {
    styleLinkNavigation.forEach(elem => {
        elem.classList.remove('activeNavigation');
    });
    styleDesigned.classList.remove('activeNavigation');
}


styleLinkNavigation.forEach(elem => {
    elem.addEventListener('click', () => {
        removeActive();
        elem.classList.add('activeNavigation');
       

        console.log('click');
    })
});

styleDesigned.addEventListener('click', () => {
    removeActive();
    styleDesigned.classList.add('activeNavigation');

});

for (let index = 0; index < cardsPets.length; index++) {
    cardsPets[index].addEventListener('mouseover', () => {
      
        contentDescriptionPets[index].style.top = '-60px';
        namePets[index].style.color = 'white';
        placeOfResidence[index].style.color = 'white';
        popUpDescriptionPets[index].style.top = '0%'
        
    });
    cardsPets[index].addEventListener('mouseout', () => {
      
        contentDescriptionPets[index].style.top = '0px';
        namePets[index].style.color = 'black';
        placeOfResidence[index].style.color = 'black';
        popUpDescriptionPets[index].style.top = '150%'
    });
}




//burger menu
wrapperBurgerMenu.addEventListener('click', () => {
    wrapperBurgerMenu.style.display = 'none';
    burgermenu.style.left = '0%';
    blockingContent.style.display = 'block';
});

closeBurgerMenu.addEventListener('click', () => {
    wrapperBurgerMenu.style.display = 'block';
    burgermenu.style.left = '-100%';
    blockingContent.style.display = 'none';
});
blockingContent.addEventListener('click', () => {
    wrapperBurgerMenu.style.display = 'block';
    burgermenu.style.left = '-100%';
    blockingContent.style.display = 'none';
    wrapperCardTestimonialsPopUP.style.display = 'none';
})

//end burger menu
//start popUPTestimonials

if (window.screen.width <= 999) {
    for (let i = 0; i < wrapperCardTestimonials.length; i++) {
        wrapperCardTestimonials[i].addEventListener('click', () => {
            styleTextNamePiplPopUP.innerHTML = styleTextNamePipl[i].innerHTML;
    
            console.log(styleTextNamePipl[i].innerHTML);
        })
       
        
    }
    wrapperCardTestimonials.forEach(elem => {
        elem.addEventListener('click', ()=> {
            wrapperCardTestimonialsPopUP.style.display = 'block';
            blockingContent.style.display = 'block';
            
        })
       
    })
    
    closePopUpTestimonials.addEventListener('click', () => {
        wrapperCardTestimonialsPopUP.style.display = 'none';
        blockingContent.style.display = 'none';
    
    });

}

//end popUPTestimonials
