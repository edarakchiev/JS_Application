const section = document.getElementById('registerPage')
section.remove();

export async function showRegisterPage(ctx) {
    ctx.showSection(section)
}