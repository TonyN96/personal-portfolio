var modalBg = document.getElementById('modal-bg');
var modal = document.getElementById('modal');
var modalContents = document.getElementsByClassName('modal-contents');
var portfolioItem = document.getElementsByClassName("portfolio-item");
var closeModalBtn = document.getElementsByClassName("close-modal");
var portfolioItems = [].slice.call(portfolioItem);
var closeModalBtns = [].slice.call(closeModalBtn);

var repos = ["fitness-tracker-js", "fitness-tracker-java", "personal-portfolio"]

window.onload = loadRepos(repos);

function loadRepos(repos) {
    let count = 0;
    for (let i = 0; i < repos.length; i++) {
        getRepo(repos[i], i);
        count++;
    }
}

async function getRepo(repoName, x) {
    const response = await fetch("https://api.github.com/repos/TonyN96/" + repoName);
    if (response.status != 404) {
        const repo = await response.json();
        renderRepo(repo, x)
        renderModals(repo, x)
    }
}

async function renderRepo(repo, x) {
    var title = portfolioItem[x].getElementsByTagName("h4")[0];
    title.innerHTML = repo.name;
    var description = portfolioItem[x].getElementsByTagName("p")[0];
    description.innerHTML = repo.description;
    const response = await fetch(repo.languages_url);
    var languagesContainer = portfolioItem[x].getElementsByTagName("ul")[0];
    if (response.status != 404) {
        const languagesJSON = await response.json();
        const languages = Object.getOwnPropertyNames(languagesJSON);
        for (let i = 0; i < languages.length; i++) {
            languagesContainer.innerHTML += `<li>${languages[i]}</i>`;
        }
    }
}

async function renderModals(repo, x) {
    var title = modalContents[x].getElementsByTagName("h4")[0];
    title.innerHTML = repo.name;
    var description = modalContents[x].getElementsByTagName("p")[0];
    description.innerHTML = repo.description;
    const response = await fetch(repo.languages_url);
    var languagesContainer = modalContents[x].getElementsByTagName("ul")[0];
    if (response.status != 404) {
        const languagesJSON = await response.json();
        const languages = Object.getOwnPropertyNames(languagesJSON);
        for (let i = 0; i < languages.length; i++) {
            languagesContainer.innerHTML += `<li>${languages[i]}</i>`;
        }
    }
    const modalLinks = modalContents[x].getElementsByTagName("ul")[1];
    modalLinks.innerHTML += `<li><a target="_blank" href="${repo.html_url}"><i class="fab fa-github"></i> Code</a></li>`;
    if (repo.homepage != "") {
        modalLinks.innerHTML += `<li><a target="_blank" href="${repo.homepage}"><i class="fas fa-link"></i> Live</a></li>`;
    }
}

function displayModal(item) {
    modalBg.style.display = "block";
    modal.style.display = "flex";
    let index = portfolioItems.indexOf(item);
    modalContents[index].style.display = "block";
}

function hideModal(item) {
    modalBg.style.display = "none";
    modal.style.display = "none";
    let index = closeModalBtns.indexOf(item);
    modalContents[index].style.display = "none";
}

