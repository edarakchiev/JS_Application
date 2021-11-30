import {page, render} from './lib.js'
import { allMemesPage } from './views/allMemes.js'
import { catalogPage } from './views/catalog.js'
import { createPage } from './views/create.js'
import { detailsPage } from './views/details.js'
import { loginPage } from './views/loginPage.js'
import { myProfilePage } from './views/myProfile.js'
import { registerPage } from './views/register.js'

const root = document.getElementById('container')


page(decorateContext)
page('/', catalogPage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/all-memes', allMemesPage)
page('/my-profile', myProfilePage)

page.start()

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    next()
}