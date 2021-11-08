async function solution() {
    const main = document.getElementById('main')
    main.addEventListener("click", reveal)
    const data = Object.values(await getList())

    for (let el of data){
        const parentDiv = document.createElement('div')
        parentDiv.className = "accordion"

        let divEl = document.createElement('div')
        divEl.className = "head"
        const spanEl = document.createElement('span')
        spanEl.textContent = el.title

        const btn = document.createElement('button')
        btn.className = 'button'
        btn.id = el._id
        btn.textContent = 'More'

        //

        const extraDiv = document.createElement('div')
        extraDiv.className = 'extra'
        // extraDiv.style.display = ''
        const para = document.createElement('p')
        para.id = el.id
        // para.textContent = 'content.content aslkdj askljdaslkmasklmdf  dhadhamsmc'


        divEl.appendChild(spanEl)
        divEl.appendChild(btn)
        parentDiv.appendChild(divEl)
        main.appendChild(parentDiv)
        main.appendChild(divEl)

        // extraDiv.appendChild(para)
        parentDiv.appendChild(extraDiv)

    }
    async function reveal(e){

        const parent = e.target.parentElement
        const btn = parent.querySelector('button')
        let content = await getDetails(btn.id)
        // const extra = parent.querySelector('.extra p')
        const extra = document.getElementById(btn.id)
        if (btn.textContent === 'More' && btn.className === 'button'){
            btn.textContent = 'Less'
            extra.textContent = content.content
            // extra.style.display = 'block'
        } else {
            btn.textContent = 'More'
            // extra.style.display = 'none'
        }
    }

}

async function getList(){
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const response = await fetch(url)
    return await response.json()
}
async function getDetails(id){
    const url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id
    const response = await fetch(url)
    return await response.json()
}
solution()