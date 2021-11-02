async function attachEvents() {
    const location = document.getElementById('location').value

    const url = `http://localhost:3030/jsonstore/forecaster/locations`
    const response = await fetch(url)
    const data = await response.json()
    let code = data[2].code

    const [t, u] = await Promise.all([today(code), upcoming(code)])

    const submitBtn = document.getElementById('submit')
    submitBtn.addEventListener('click', submit)
    const forecastDiv = document.getElementById('forecast')
    const currentForecast = document.getElementById('current')
    const upcomingForecast = document.getElementById('upcoming')
    const symbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    function submit() {
        console.log(Object.entries(data))

        forecastDiv.style.display = ''
        let divElToday = document.createElement('div')
        divElToday.innerHTML = `<div class="forecasts"><span class="condition symbol">${symbols[t.forecast.condition]}</span>><span class="condition"><span class="forecast-data">${t.name}</span><span class="forecast-data">${t.forecast.low}${symbols['Degrees']}/${t.forecast.high}${symbols['Degrees']}</span><span class="forecast-data">${t.forecast.condition}</span></span></div>`
        currentForecast.appendChild(divElToday)

        let divElUpcoming = document.createElement('div')
        divElUpcoming.innerHTML = `<div class="forecast-info">
<span class="upcoming">
<span class="symbol">${symbols[u.forecast[0].condition]}</span>
<span class="forecast-data">${u.forecast[0].low}${symbols['Degrees']}/${u.forecast[0].high}${symbols['Degrees']}</span>
<span class="forecast-data">${u.forecast[0].condition}</span>
</span>

<span class="upcoming">
<span class="symbol">${symbols[u.forecast[1].condition]}</span>
<span class="forecast-data">${u.forecast[1].low}${symbols['Degrees']}/${u.forecast[1].high}${symbols['Degrees']}</span>
<span class="forecast-data">${u.forecast[1].condition}</span>
</span>

<span class="upcoming">
<span class="symbol">${symbols[u.forecast[2].condition]}</span>
<span class="forecast-data">${u.forecast[2].low}${symbols['Degrees']}/${u.forecast[2].high}${symbols['Degrees']}</span>
<span class="forecast-data">${u.forecast[2].condition}</span>
</span>

</div>`

        upcomingForecast.appendChild(divElUpcoming)


    }
}

async function today(code) {
    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`
    const responseToday = await fetch(urlToday)
    const dataToday = await responseToday.json()
    return dataToday

}

async function upcoming(code) {
    const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
    const responseUpcoming = await fetch(urlUpcoming)
    const dataUpcoming = await responseUpcoming.json()
    return dataUpcoming
}


attachEvents()