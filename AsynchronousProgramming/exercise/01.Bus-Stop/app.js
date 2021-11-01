async function getInfo() {
    let stopId = document.getElementById('stopId').value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    let stopName = document.getElementById('stopName')
    let buses = document.getElementById('buses')


    try {
        stopName.textContent = 'Loading...'
        buses.innerHTML = ''
        const response = await fetch(url)
        if (response.status !== 200){
            throw new Error('Error')
        }
        const data = await response.json()

        stopName.textContent = data.name

        Object.entries(data.buses).forEach(b => {
            let bus = document.createElement('li')
            bus.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
            buses.appendChild(bus)
        })
    } catch (error){
        stopName.textContent = 'Error'
    }

}