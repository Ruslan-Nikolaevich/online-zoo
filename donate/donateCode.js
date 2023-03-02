
// const styleLinkNavigation = document.querySelectorAll('.styleLinkNavigation');
// const styleDesigned = document.querySelector('.styleDesigned');
// const cardsPets = document.querySelectorAll('.cardsPets');
// const contentDescriptionPets = document.querySelectorAll('.contentDescriptionPets');
// const popUpDescriptionPets = document.querySelectorAll('.popUpDescriptionPets');
// const namePets = document.querySelectorAll('.namePets');
// const placeOfResidence = document.querySelectorAll('.placeOfResidence');
// const imgPets = document.querySelectorAll('.imgPets');

const styleTextCostDonate = document.querySelectorAll('.styleTextCostDonate');
const dot = document.querySelectorAll('.dot');
const wrapperCircle = document.querySelectorAll('.wrapperCircle');
const anotherAmount = document.getElementById('anotherAmount');


function deleteActiveDonate() {
    styleTextCostDonate.forEach(elem => {
        elem.classList.remove('activeCostDonate');
    });
}
function deleteActiveDot() {
    wrapperCircle.forEach(elem => {
        elem.style.display = 'none';
    });
}

for (let i = 0; i < dot.length; i++) {
   dot[i].addEventListener('click', () => {
    deleteActiveDot();
    deleteActiveDonate();
    wrapperCircle[i].style.display = 'block';
    styleTextCostDonate[i].classList.add('activeCostDonate');
    anotherAmount.value = styleTextCostDonate[i].innerHTML;
   })
    
}
anotherAmount.oninput = () => {
   for (let i = 0; i < styleTextCostDonate.length; i++) {
    if (+(styleTextCostDonate[i].innerHTML) == +(anotherAmount.value)) {
        deleteActiveDot();
        deleteActiveDonate();
        wrapperCircle[i].style.display = 'block';
        styleTextCostDonate[i].classList.add('activeCostDonate');
    }
   }
};







// function removeActive() {
//     styleLinkNavigation.forEach(elem => {
//         elem.classList.remove('activeNavigation');
//     });
//     styleDesigned.classList.remove('activeNavigation');
// }


// styleLinkNavigation.forEach(elem => {
//     elem.addEventListener('click', () => {
//         removeActive();
//         elem.classList.add('activeNavigation');
       

//         console.log('click');
//     })
// });

// styleDesigned.addEventListener('click', () => {
//     removeActive();
//     styleDesigned.classList.add('activeNavigation');

// });

// for (let index = 0; index < cardsPets.length; index++) {
//     cardsPets[index].addEventListener('mouseover', () => {
      
//         contentDescriptionPets[index].style.top = '-60px';
//         namePets[index].style.color = 'white';
//         placeOfResidence[index].style.color = 'white';
//         popUpDescriptionPets[index].style.top = '0%'
        
//     });
//     cardsPets[index].addEventListener('mouseout', () => {
      
//         contentDescriptionPets[index].style.top = '0px';
//         namePets[index].style.color = 'black';
//         placeOfResidence[index].style.color = 'black';
//         popUpDescriptionPets[index].style.top = '150%'
//     });
// }