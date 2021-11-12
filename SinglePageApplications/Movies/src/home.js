import {e, showView} from "./dom.js";

const section = document.getElementById('home-page')
const catalog = document.querySelector('.card-deck.d-flex.justify-content-center')
section.querySelector('#createLink').addEventListener('click', (event)=>{
    event.preventDefault()
    showCreate()
})
section.remove()

export function showHome(){
    showView(section)
    getMovies()
}

async function getMovies(){
    const response = await fetch('http://localhost:3030/data/movies')
    const data = await response.json()
    
    catalog.replaceChildren(...data.map(createMovieCard))
}

function createMovieCard(movie) {
    const element = e('div', {className: 'card mb-4'})
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
            alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a href="#/details/6lOxMFSMkML09wux6sAF">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div>
    `
    return element
}
