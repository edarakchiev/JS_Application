async function lockedProfile() {
    const main = document.getElementById('main')
    main.addEventListener('click', onToggle)
    main.innerHTML = ''

    const url = `http://localhost:3030/jsonstore/advanced/profiles`
    const response = await fetch(url)
    const data = await response.json()
    let result = Object.entries(data)


    for (let el of result) {
        let [num, info] = el
        let profileDiv = document.createElement('div')
        profileDiv.innerHTML = `<div class="profile">
<img src="./iconProfile2.png" class="userIcon" />
<label>Lock</label>
<input type="radio" name="user1Locked" value="lock" checked>
<label>Unlock</label>
<input type="radio" name="user1Locked" value="unlock"><br>
<hr>
<label>Username</label>
<input type="text" name="user1Username" value="${info.username}" disabled readonly />
<div id="user1HiddenFields">
<hr>
<label>Email:</label>
<input type="email" name="user1Email" value="${info.email}" disabled readonly />
<label>Age:</label>
<input type="email" name="user1Age" value="${info.age}" disabled readonly />
</div>
<button>Show more</button>
</div>`
        main.appendChild(profileDiv)
    }
}

function onToggle(e) {
    let profile = e.target.parentElement
    let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked
    if (e.target.tagName === 'BUTTON' && isActive) {
        let hiddenField = Array.from(profile.querySelectorAll('div'))
            .find(d => d.id.includes('HiddenFields'))
        if (e.target.textContent === "Show more") {
            e.target.textContent = "Hide it"
            hiddenField.style.display = 'inline'
        } else {
            e.target.textContent = "Show more"
            hiddenField.style.display = ''
        }
    }
}

