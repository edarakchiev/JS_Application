import { deleteItem, getAll, getById } from "../api/data.js"
import { html } from "../lib.js"
import { getUserData } from "../util.js"

const detailsTemplate = (card, onDelete, isOwner) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${card.title}</h1>
            <div>
                <img src=${card.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${card.description}</p>
            <h4>Date: ${card.date}</h4>
            <h4>Author: ${card.author}</h4>

            ${isOwner ? html`
            <div class="buttons">
                <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                <a class="btn-edit" href="/edit/${card._id}">Edit</a>
                <a class="btn-like" href="#">Like</a>
            </div>` : ''}
            
            <p class="likes">Likes: 0</p>
        </div>
    </div>
</section>`


export async function detailsPage(ctx) {
    const card = await getById(ctx.params.id)
    const userData = await getUserData()
    const isOwner = userData && userData.id == card._ownerId
    ctx.render(detailsTemplate(card, onDelete, isOwner))

    async function onDelete() {
        const choice = confirm('Are you sure?')
        if (choice) {
            await deleteItem(ctx.params.id)
            ctx.page.redirect('/profile')
        }
    }
}