const form = document.querySelector('#button');
let card_1 = document.querySelector('.main-bucket');
let card_2 = document.querySelector('.card-2');
form.addEventListener('click', hide);
function hide(e) {
        e.preventDefault();
        card_1.classList.add("hide");
        card_2.classList.remove('hide');
}
