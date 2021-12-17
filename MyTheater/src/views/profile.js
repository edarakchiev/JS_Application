import { getAll, getProfileItem } from "../api/data.js"
import { html } from "../lib.js"
import { getUserData } from "../util.js"

const profileTemplate = (cards, userData) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${userData.email}</h2>
    </div>
    <div class="board">
        <!--If there are event-->


        <!--If there are no event-->
        ${cards.length == 0 ?
        html`<div class="no-events">
            <p>This user has no events yet!</p>
        </div>`
        : cards.map(cardTemplate)}

        
    </div>
</section>`

const cardTemplate = (card) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src=${card.imageUrl}>
        <h2>${card.title}</h2>
        <h6>${card.date}</h6>
        <a href="/details/${card._id}" class="details-button">Details</a>
    </div>
</div>`

export async function profilePage(ctx) {
    const userData = await getUserData()
    const cards = await getProfileItem(userData.id)
    ctx.render(profileTemplate(cards, userData))
}