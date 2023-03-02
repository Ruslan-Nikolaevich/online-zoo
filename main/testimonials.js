const wrapperSliderTestimonials = document.querySelector('.wrapperSliderTestimonials');
const buttonSliderTestimonials = document.getElementById('buttonSliderTestimonials');

let start = 0;
let current = 0;
let temp = 0;
let final = 99;
let left1600 = -2080;
let left1000 = -2575;
let right = 0;
let direct = '';


let dataInput = buttonSliderTestimonials.value;
//console.log(buttonSliderTestimonials.value);
buttonSliderTestimonials.oninput = () => {
    direction(buttonSliderTestimonials.value);
    // wrapperSliderTestimonials.addEventListener('transitionend',() => {
    //     direction(buttonSliderTestimonials.value);
    // });
    console.log(window.screen.width);
   
    
};

function direction(data) { // определяем направления движения ползунка
    temp = final-data;
    if (+start < +data) {
        start = data;
        direct = 'right';
        if (window.screen.width > 1599) {
            left1600 = left1600 + 297;
            wrapperSliderTestimonials.style.left = `${left1600}px`;
        }
        if (window.screen.width > 639 && window.screen.width <= 1599) {
            left1000 = left1000 + 323;
            wrapperSliderTestimonials.style.left = `${left1000}px`;
        }
        
        console.log(direct);
    }
    if (+start > +data) {
        start = data;
        direct = 'left';
        if (window.screen.width > 1599) {
            left1600 = left1600 - 297;
            wrapperSliderTestimonials.style.left = `${left1600}px`;
        }
        if (window.screen.width > 639 && window.screen.width <= 1599) {
            left1000 = left1000 - 323;
            wrapperSliderTestimonials.style.left = `${left1000}px`;
        }
        
        console.log(direct);
    }

}
