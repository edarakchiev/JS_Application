function solve() {

    let busStation = document.querySelector('#info span')
    let departBtn = document.getElementById('depart')
    let arriveBtn = document.getElementById('arrive')

    let station = {
        next: 'depot'
    }

    async function depart() {
        departBtn.disabled = true
        const url = `http://localhost:3030/jsonstore/bus/schedule/${station.next}`

        const response = await fetch(url)
        station = await response.json()

        busStation.textContent = `Next stop ${station.name}`

        arriveBtn.disabled = false

    }



    function arrive() {
        busStation.textContent = `Arriving at ${station.name}`
        departBtn.disabled = false
        arriveBtn.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();