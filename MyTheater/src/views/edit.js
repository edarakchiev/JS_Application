import { editItem, getById, } from "../api/data.js"
import { html } from "../lib.js"

const editTemplate = (onSubmit, card) => html`
<section id="editPage">
    <form @submit=${onSubmit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" .value=${card.title}>
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${card.date}>
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" .value=${card.author}>
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description" placeholder="Description" .value=${card.description}></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${card.imageUrl}>
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`


export async function editPage(ctx) {
    const card = await getById(ctx.params.id)

    ctx.render(editTemplate(onSubmit, card))

    async function onSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        const title = formData.get('title')
        const date = formData.get('date')
        const author = formData.get('author')
        const description = formData.get('description')
        const imageUrl = formData.get('imageUrl')

        if (title == '' || date == '' || author == '' || description == '' || imageUrl == '') {
            return alert('All fields are required!')
        }

        await editItem(ctx.params.id, { title, date, author, description, imageUrl })
        ctx.page.redirect('/details/' + ctx.params.id)
    }
}