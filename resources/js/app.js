import './bootstrap';
import '~resources/scss/app.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

//Codice per modale conferma eliminazione

const removeElements = document.querySelectorAll('.remove');
const modalElement = document.getElementById('modal');
const closeElements = document.querySelectorAll('.close');
//const confirmElements = document.querySelectorAll('.confirm');

// removeElements.forEach(removeElement => {

//     removeElement.addEventListener('click', function(){
//         modalElement.classList.add('visible');
//     });
// });


// for(let i = 0; i < closeElements.length; i++){

//     const closeElement = closeElements[i];

//     closeElement.addEventListener('click', function(){
    
//         modalElement.classList.remove('visible');
//     });
// }