const section = document.getElementById('homePage')
section.remove();

export async function showHomePage(ctx) {
    ctx.showSection(section)
}