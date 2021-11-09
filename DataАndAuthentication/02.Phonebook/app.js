function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad)
    document.getElementById('btnCreate').addEventListener('click', onCreate)
}
const ulElement = document.getElementById('phonebook')
ulElement.addEventListener('click', onDelete)

async function onLoad() {
    ulElement.innerHTML = ''

    let result = await loadPhones()
    for (let el of result) {
        const liElement = document.createElement('li')
        liElement.textContent = `${el.person}: ${el.phone}`
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'delete'
        deleteBtn.id = el._id
        liElement.appendChild(deleteBtn)
        ulElement.appendChild(liElement)
    }
}

async function onDelete(event) {
    const parent = event.target.parentElement
    const id = event.target.id
    if (event.target.tagName === 'BUTTON') {
        result = await deletePhone(id)
        parent.remove()
    }
}

async function onCreate() {
    const personInput = document.getElementById('person')
    const phoneInput = document.getElementById('phone')

    const person = personInput.value
    const phone = phoneInput.value

    const data = {person, phone}
    await create(data)
    personInput.value = ''
    phoneInput.value = ''
    onLoad()

}

async function create(data) {
    const url = 'http://localhost:3030/jsonstore/phonebook'
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url, options)
        if (response.ok === false) {
            throw new Error(response.statusText)
        }
        const result = await response.json()
        return result
    } catch (error) {
        alert(error.message)
    }
}

async function loadPhones() {
    const url = 'http://localhost:3030/jsonstore/phonebook'
    const response = await fetch(url)
    const data = await response.json()
    const result = Object.values(data)
    return result
}

async function deletePhone(id) {
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id
    const options = {
        method: 'delete'
    }
    const response = await fetch(url, options)
    const result = await response.json()
    return result
}

attachEvents();