import {e, showView} from "./dom.js";

const section = document.getElementById('movie-details')
section.remove()

export function showDetails(movieId){
    showView(section)
    getMovie(movieId)

}


async function getMovie(id) {
    section.replaceChildren(e('p', {}, 'Loading'))

    const response = await fetch('http://localhost:3030/data/movies/' + id)
    const data = await response.json()

    section.replaceChildren(createDetails(data))
}

function createDetails(movie) {
    const controls = e('div', {className: 'col-md-4 text-center'},
    e('h3', {className: 'my-3'}, 'Movie Description'),
    e('p', {}, movie.description)
    )

    const element = e('div', {className: 'container'},
    e('div', {className: 'row bg-light text-dark'},
    e('h1', {}, `Movie title: ${movie.title}`),
    e('div', {className: 'col-md-8'},
    e('img', {className:'img-thumbnail', src: movie.img, alt: 'Movie'})
    ),
    controls
    )
    )
    return element
}