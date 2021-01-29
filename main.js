const user = 'TonyN96';
const token = 'c2642147e07136ae17240f2e3209d1ed100478dc';
const creds = `${user}:${token}`;
const auth = btoa(creds);

const options = {
    mode: 'cors',
    headers: {
        Authorization: 'Basic ' + auth,
    },
};

var modalBg = document.getElementsByClassName('modal-bg');
var modal = document.getElementsByClassName('modal');
var modalContents = document.getElementsByClassName('modal-contents');
var portfolioItem = document.getElementsByClassName("portfolio-item");
var close = document.getElementsByClassName("close-modal")

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
    const response = await fetch("https://api.github.com/repos/TonyN96/" + repoName, options);
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
    const response = await fetch(repo.languages_url, options);
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
    const response = await fetch(repo.languages_url, options);
    var languagesContainer = modalContents[x].getElementsByTagName("ul")[0];
    if (response.status != 404) {
        const languagesJSON = await response.json();
        const languages = Object.getOwnPropertyNames(languagesJSON);
        for (let i = 0; i < languages.length; i++) {
            languagesContainer.innerHTML += `<li>${languages[i]}</i>`;
        }
    }
    const githubLink = modalContents[x].getElementsByClassName("github-link")[0];
    githubLink.innerHTML = `<a target="_blank" href="${repo.html_url}">View Code <i class="fab fa-github"></i></a>`;
}

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

