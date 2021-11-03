function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts)
    document.getElementById('btnViewPost').addEventListener('click', display)
}

async function display() {
    let postTitle = document.getElementById('post-title')
    postTitle.textContent = 'Loading...'
    let postBody = document.getElementById('post-body')
    postBody.textContent=''
    let commentsForPost = document.getElementById('post-comments')
    commentsForPost.innerHTML=''


    const id = document.getElementById('posts').value
    let [post, comments] = await Promise.all([getPostById(id), getCommentsById(id)])
     postTitle.textContent= post.title
    postBody.textContent = post.body

    comments.forEach(c => {
        let liEl = document.createElement('li')
        liEl.textContent = c.text
        commentsForPost.appendChild(liEl)
    })


}


async function getAllPosts(){
    const posts = document.getElementById('posts')
    const url = 'http://localhost:3030/jsonstore/blog/posts'
    const request = await fetch(url)
    const data = await request.json()

    Object.values(data).forEach(post => {
        let option = document.createElement('option')
        option.value = post.id
        option.textContent = post.title
        posts.appendChild(option)
    })
}
async function getPostById(id){
    const url = `http://localhost:3030/jsonstore/blog/posts/` + id
    const request = await fetch(url)
    const data = await request.json()
    return data
}

async function getCommentsById(id){
    const url = `http://localhost:3030/jsonstore/blog/comments`
    const request = await fetch(url)
    const data = await request.json()
    let filteredComments = Object.values(data).filter(c => c.postId === id)
    return filteredComments
}


attachEvents();