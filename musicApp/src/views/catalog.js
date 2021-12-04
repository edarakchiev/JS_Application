import { getAll } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const catalogTemplate = (cards, isLogged) => html`
<section id="catalogPage">
    <h1>All Albums</h1>
    ${cards.length == 0 
    ? html`<p>No Albums in Catalog!</p>`
    : isLogged ? cards.map(cardTemplateLogged) : cards.map(cardTemplateNoLogged)}  
</section>`

const cardTemplateLogged = (card) => html`
<div class="card-box">
    <img src=${card.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">${card.name}</p>
            <p class="artist">Artist: ${card.artist}</p>
            <p class="genre">Genre: ${card.genre}</p>
            <p class="price">Price: $${card.price}</p>
            <p class="date">Release Date: ${card.releaseDate}</p>
        </div> 
        <div class="btn-group">
        <a href="/details/${card._id}" id="details">Details</a>
        </div>
    </div>
</div>`


const cardTemplateNoLogged = (card) => html`
<div class="card-box">
    <img src=${card.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">${card.name}</p>
            <p class="artist">Artist: ${card.artist}</p>
            <p class="genre">Genre: ${card.genre}</p>
            <p class="price">Price: $${card.price}</p>
            <p class="date">Release Date: ${card.releaseDate}</p>
        </div>
    </div>
</div>`


export async function catalogPage(ctx) {
    const userData = await getUserData()    
    const cards = await getAll()
    let isLogged = false
    if (userData) {
        isLogged = true
    }
    ctx.render(catalogTemplate(cards, isLogged))
}