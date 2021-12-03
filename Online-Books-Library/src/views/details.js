import { getById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isOwner) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <div class="actions">
        ${isOwner ? html`
        <a class="button" href="/edit/${book._id}">Edit</a>
        <a class="button" href="/delete/${book._id}">Delete</a>`
        : ''}
        

        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        <!-- <a class="button" href="#">Like</a> -->

        <!-- ( for Guests and Users )  -->
        <!-- <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: 0</span>
        </div> -->
        <!-- Bonus -->
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>`

export async function detailsPage(ctx) {
    const book = await getById(ctx.params.id)
    const userData = await getUserData()
    const isOwner = userData && userData.id == book._ownerId

    ctx.render(detailsTemplate(book, isOwner))
}