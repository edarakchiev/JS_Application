function attachEvents() {
    document.getElementById('refresh').addEventListener('click', onRefresh)
    document.getElementById('submit').addEventListener('click', onSubmit)
}

async function onRefresh() {
    const allMessages = document.getElementById('messages')
    allMessages.textContent = ''
    const data = await getAllMessages()
    let messagesList = []
    for (let me of data) {
        messagesList.push(`${me.author}: ${me.content}`)
    }
    allMessages.textContent = messagesList.join('\n')
}


async function getAllMessages() {
    const url = 'http://localhost:3030/jsonstore/messenger'
    const request = await fetch(url)
    const data = await request.json()
    const result = Object.values(data)
    return result
}

async function onSubmit() {
    let authorInput = document.querySelector('input[name="author"]')
    let contentInput = document.querySelector('input[name="content"]')
    let author = authorInput.value
    let content = contentInput.value
    const messageData = {author, content}
    contentInput.value = ''
    await sentMessages(messageData)


}

async function sentMessages(data) {
    const url = 'http://localhost:3030/jsonstore/messenger'

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const request = await fetch(url, options)
        if (request.ok === false) {
            throw new Error(request.statusText)
        }
    } catch (error) {
        alert(error.message)
    }
    await request.json()

}

attachEvents();
