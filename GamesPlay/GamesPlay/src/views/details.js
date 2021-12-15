import { deleteItem, getById } from "../api/data.js"
import { html } from "../lib.js"
import { getUserData } from "../util.js"

const detailsTemplate = (game, isOwner, onDelete) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>
        <p class="text">${game.summary}</p>
        ${isOwner ? html`
        <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>`: ''}
    </div>`


export async function detailsPage(ctx) {
    const userData = await getUserData()
    const game = await getById(ctx.params.id)
    const isOwner = userData && userData.id == game._ownerId
    console.log(userData)
    ctx.render(detailsTemplate(game, isOwner, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure ?')
        if (choice) {
            await deleteItem(ctx.params.id)
            ctx.page.redirect('/')
        }
    }
}