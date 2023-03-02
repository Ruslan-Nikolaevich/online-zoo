const wrapperSlider = document.querySelector('.wrapperSlider');
const leftButtonPets = document.querySelector('.leftButtonPets');
const rightButtonPets = document.querySelector('.rightButtonPets');
const imgPetsFoto = document.querySelectorAll('.imgPets');
const food = document.querySelectorAll('.food');

const animals = {
1:{foto:'pandas',namePets:'giant Pandas',placeOfResidence:'Native to Southwest China',food:'iconFoodBanana'},
2:{foto:'eagles',namePets:'Eagles',placeOfResidence:'Native to South America',food:'iconMeat'},
3:{foto:'gorillas',namePets:'Gorillas',placeOfResidence:'Native to Congo',food:'iconFoodBanana'},
4:{foto:'twoToed',namePets:'Two-toed Sloth',placeOfResidence:'Mesoamerica, South America',food:'iconFoodBanana'},
5:{foto:'cheetahs',namePets:'Cheetahs',placeOfResidence:'Native to Africa',food:'iconMeat'},
6:{foto:'penguins',namePets:'Penguins',placeOfResidence:'Native to Antarctica',food:'iconMeat'},
};

let mas = [1,2,3,4,5,6];

function shuffle(mas) {
    mas.sort(() => Math.random() - 0.5);
  }
animals[1].foto
function randomCardsPets() {
    shuffle(mas);
    for (let i = 0; i < mas.length; i++) {
        imgPetsFoto[i].classList.add(animals[mas[i]].foto);
        namePets[i].innerHTML = animals[mas[i]].namePets;
        placeOfResidence[i].innerHTML = animals[mas[i]].placeOfResidence;  
        food[i].classList.add(animals[mas[i]].food);
    }
   
}

function deletePetsCard() {
    imgPetsFoto.forEach((e) => {
         e.classList.remove('pandas','eagles','gorillas','twoToed','cheetahs','penguins');
       
    })
    food.forEach(e => {
        e.classList.remove('iconMeat','iconFoodBanana');
    });

}


leftButtonPets.addEventListener('click', () => {
    // wrapperSlider.classList.add('to-right');
    wrapperSlider.style.left = '-100%'
   
    wrapperSlider.addEventListener('transitionend', function () {
        deletePetsCard();
        wrapperSlider.style.transition = '0s' 
        // wrapperSlider.style.left = '+100%'
        // wrapperSlider.style.transition = '0.5s'
        wrapperSlider.style.left = '0%'  
        randomCardsPets();
    })
    wrapperSlider.style.transition = '0.5s' 
    
});

rightButtonPets.addEventListener('click', () => {
    // wrapperSlider.classList.add('to-right');
    wrapperSlider.style.left = '+100%'
   
    wrapperSlider.addEventListener('transitionend', function () {
        deletePetsCard();
        wrapperSlider.style.transition = '0s' 
        // wrapperSlider.style.left = '+100%'
        // wrapperSlider.style.transition = '0.5s'
        wrapperSlider.style.left = '0%'  
         randomCardsPets();
    })
    wrapperSlider.style.transition = '0.5s' 
});


