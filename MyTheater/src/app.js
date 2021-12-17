import {page, render} from './lib.js'
import {logout} from './api/data.js'
import { homePage } from './views/home.js'
import { getUserData } from './util.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import { createPage } from './views/create.js'
import { detailsPage } from './views/details.js'
import { editPage } from './views/edit.js'
import { profilePage } from './views/profile.js'


const root = document.getElementById('content')
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext)
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/profile', profilePage)

page.start()
updateUserNav()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav
    next()
}

function updateUserNav() {
    const userData = getUserData()
    if (userData) {
        [...document.querySelectorAll('.user')].forEach(el => el.style.display = 'inline-block'),
        [...document.querySelectorAll('.guest')].forEach(el => el.style.display = 'none')
    } else {
        [...document.querySelectorAll('.user')].forEach(el => el.style.display = 'none'),
        [...document.querySelectorAll('.guest')].forEach(el => el.style.display = 'inline-block')
    }
}

async function onLogout() {
    await logout()
    updateUserNav()
    page.redirect('/')
}