import { deleteItem } from "../api/data.js"


export async function deleteBook(ctx) {
    const choice = confirm('Are you sure?')
    if (choice) {
        await deleteItem(ctx.params.id)
        ctx.page.redirect('/')
    }
}