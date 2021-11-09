const resultTable = document.querySelector('#results tbody')
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', loadStudents)




function createRow(firstName, lastName, facultyNumber, grade) {
    const trElement = document.createElement('tr')
    trElement.innerHTML = `<th>${firstName}</th>
<th>${lastName}</th>
<th>${facultyNumber}</th>
<th>${grade}</th>`
    return trElement
}

async function loadStudents(e){
    e.preventDefault()
    console.log('here')
    let studentData = await getStudents()
    console.log(studentData)
    for (let el of studentData){
        let row = createRow(el.firstName, el.lastName, el.facultyNumber, el.grade)
        resultTable.appendChild(row)
    }
}

async function getStudents() {
    const url = 'http://localhost:3030/jsonstore/collections/students'
    const response = await fetch(url)
    const data = await response.json()
    return Object.values(data)
}

async function createStudent() {
    const url = 'http://localhost:3030/jsonstore/collections/students'
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
        const data = await response.json()
        return data
    }catch (err){
        alert(err.message)
    }
}

