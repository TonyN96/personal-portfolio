const toggleModalBg = () => {
    document.querySelector('.modal-bg')
    .classList.toggle('modal-bg-hidden');
}

const toggleModal = () => {
    document.querySelector('.modal')
    .classList.toggle('modal-hidden');
}

document.querySelector('#portfolio-item-1')
.addEventListener('click', () => {
    toggleModalBg();
    toggleModal();
} );

document.querySelector('#close-modal')
.addEventListener('click', () => {
    toggleModalBg();
    toggleModal();
});