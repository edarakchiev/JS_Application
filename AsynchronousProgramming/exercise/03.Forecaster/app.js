function attachEvents() {
    let getBtn = document.getElementById('submit')
    getBtn.addEventListener('click', forecast)
}
attachEvents()


async function forecast(){
    const symbol = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    const location = document.getElementById('location')
    const divForecast = document.getElementById('forecast')
    const divToday = document.getElementById('current')
    const divUpcoming = document.getElementById('upcoming')
    try {
        const url = `http://localhost:3030/jsonstore/forecaster/locations`
        const request = await fetch(url)
        const data = await request.json()
        let city = Object.values(data).filter(c => c.name === location.value)[0]

        const [today, threeDays] = await Promise.all([getTodayWeather(city.code), getThreeDayWeather(city.code)])
        divForecast.style.display = 'block'


        //today
        let divForecasts = document.createElement('div')
        divForecasts.className = 'forecasts'
        let spanSymbol = document.createElement('span')
        spanSymbol.className = ("condition symbol")
        spanSymbol.innerHTML = `${symbol[today.forecast.condition]}`
        let spanCondition = document.createElement('span')
        spanCondition.className = 'condition'
        let spanCity = document.createElement('span')
        spanCity.className = 'forecast-data'
        spanCity.textContent = today.name
        let spanDegrees = document.createElement('span')
        spanDegrees.className = 'forecast-data'
        spanDegrees.innerHTML = `${today.forecast.low}${symbol["Degrees"]}/${today.forecast.high}${symbol["Degrees"]}`
        let spanCond = document.createElement('span')
        spanCond.className = 'forecast-data'
        spanCond.textContent = today.forecast.condition
        divToday.appendChild(divForecasts)
        divForecasts.appendChild(spanSymbol)
        divForecasts.appendChild(spanCondition)
        spanCondition.appendChild(spanCity)
        spanCondition.appendChild(spanDegrees)
        spanCondition.appendChild(spanCond)

        //upcoming
        let divForecastUpcoming = document.createElement('div')
        divForecastUpcoming.className = 'forecast-info'
        let spanUpcoming = document.createElement('span')
        spanUpcoming.className = 'upcoming'
        for (let i = 0; i < 3; i++) {
            let spanUpcomingSymbol = document.createElement('span')
            spanUpcomingSymbol.innerHTML = symbol[threeDays.forecast[i].condition]

            let spanUpcomingDegree = document.createElement('span')
            spanUpcomingDegree.innerHTML = `${threeDays.forecast[i].low}${symbol["Degrees"]}/${threeDays.forecast[i].high}${symbol["Degrees"]}`
            let spanUpcomingCond = document.createElement('span')
            spanUpcomingCond.textContent = threeDays.forecast[i].condition

            spanUpcoming.appendChild(spanUpcomingSymbol)
            spanUpcoming.appendChild(spanUpcomingDegree)
            spanUpcoming.appendChild(spanUpcomingCond)
            divForecastUpcoming.appendChild(spanUpcoming)
            divUpcoming.appendChild(divForecastUpcoming)

        }
    } catch (error){
        location.value = "Error"
    }

}

async function getTodayWeather(code){
    try {
        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`
        const request = await fetch(url)
        return await request.json()
    }catch (error){
        return error
    }


}

async function getThreeDayWeather(code){
    try {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
        const request = await fetch(url)
        return await request.json()
    }catch (error){
        return error
    }

}