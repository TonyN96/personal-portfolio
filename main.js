var modalBg = document.getElementsByClassName('modal-bg');
var modal = document.getElementsByClassName('modal');
var modalContents = document.getElementsByClassName('modal-contents');
var portfolioItem = document.getElementsByClassName("portfolio-item");
var close = document.getElementsByClassName("close-modal");

function openModal() {
    modalBg[0].style.display = "block";
    modal[0].style.display = "flex";
}

function closeModal() {
    modalBg[0].style.display = "none";
    modal[0].style.display = "none";
}

portfolioItem[0].onclick = function() {
    openModal();
    modalContents[0].style.display = "block";
}

portfolioItem[1].onclick = function() {
    openModal();
    modalContents[1].style.display = "block";
}

portfolioItem[2].onclick = function() {
    openModal();
    modalContents[2].style.display = "block";
}

close[0].onclick = function() {
    closeModal();
    modalContents[0].style.display = "none";
}

close[1].onclick = function() {
    closeModal();
    modalContents[1].style.display = "none";
}

close[2].onclick = function() {
    closeModal();
    modalContents[2].style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalContents) {
        modalBg.style.display = "none";
        modal.style.display = "none";
        modalContents.style.display = "none";
    }
}