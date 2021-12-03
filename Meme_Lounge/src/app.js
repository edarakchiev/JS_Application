import { logout } from './api/data.js'
import { page, render} from './lib.js'
import { getUserData } from './util.js'
import { allMemesPage } from './views/allMemes.js'
import { createPage } from './views/create.js'
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js'
import { myProfilePage } from './views/myProfile.js'
import { registerPage } from './views/register.js'

const root = document.querySelector('main')
document.getElementById('logoutBtn').addEventListener('click', onLogout)


page(decorateContext)
page('/', homePage)
page('/all-memes', allMemesPage)
page('/login', loginPage)
page('/register', registerPage)
page('/my-profile', myProfilePage)
page('/create', createPage)

page.start()
updateUserNav()

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav
    next()
}

function updateUserNav(){
    const userData = getUserData()
    if (userData){
        document.querySelector('.user').style.display = 'block'
        document.querySelector('.guest').style.display = 'none'
        document.querySelector('div.user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = 'block'
    }
}

async function onLogout(){
    console.log('logout')
    await logout()
    page.redirect('/')
}