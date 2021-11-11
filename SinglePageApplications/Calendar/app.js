let allSections = document.querySelectorAll('section')
for (let section of allSections){
    section.style.display = 'none'
}
const yearsSection = document.getElementById('years')
yearsSection.style.display = ''

const dateCalendar = document.querySelectorAll('.days')
let firstRow = dateCalendar[0]
let secondRow = dateCalendar[1]

const year2020 = document.getElementById('year-2020')
const year2021 = document.getElementById('year-2021')
const year2022 = document.getElementById('year-2022')
const year2023 = document.getElementById('year-2023')

const jan2020 = document.getElementById('month-2020-1')
const feb2020 = document.getElementById('month-2020-2')
const mar2020 = document.getElementById('month-2020-3')
const apr2020 = document.getElementById('month-2020-4')
const may2020 = document.getElementById('month-2020-5')
const jun2020 = document.getElementById('month-2020-6')
const jul2020 = document.getElementById('month-2020-7')
const aug2020 = document.getElementById('month-2020-8')
const sept2020 = document.getElementById('month-2020-9')
const oct2020 = document.getElementById('month-2020-10')
const nov2020 = document.getElementById('month-2020-11')
const dec2020 = document.getElementById('month-2020-12')

const jan2021 = document.getElementById('month-2021-1')
const feb2021 = document.getElementById('month-2021-2')
const mar2021 = document.getElementById('month-2021-3')
const apr2021 = document.getElementById('month-2021-4')
const may2021 = document.getElementById('month-2021-5')
const jun2021 = document.getElementById('month-2021-6')
const jul2021 = document.getElementById('month-2021-7')
const aug2021 = document.getElementById('month-2021-8')
const sept2021 = document.getElementById('month-2021-9')
const oct2021 = document.getElementById('month-2021-10')
const nov2021= document.getElementById('month-2021-11')
const dec2021= document.getElementById('month-2021-12')

const jan2022 = document.getElementById('month-2022-1')
const feb2022 = document.getElementById('month-2022-2')
const mar2022 = document.getElementById('month-2022-3')
const apr2022 = document.getElementById('month-2022-4')
const may2022 = document.getElementById('month-2022-5')
const jun2022 = document.getElementById('month-2022-6')
const jul2022 = document.getElementById('month-2022-7')
const aug2022 = document.getElementById('month-2022-8')
const sept2022 = document.getElementById('month-2022-9')
const oct2022 = document.getElementById('month-2022-10')
const nov2022 = document.getElementById('month-2022-11')
const dec2022 = document.getElementById('month-2022-12')

const jan2023 = document.getElementById('month-2023-1')
const feb2023 = document.getElementById('month-2023-2')
const mar2023 = document.getElementById('month-2023-3')
const apr2023 = document.getElementById('month-2023-4')
const may2023 = document.getElementById('month-2023-5')
const jun2023 = document.getElementById('month-2023-6')
const jul2023 = document.getElementById('month-2023-7')
const aug2023 = document.getElementById('month-2023-8')
const sept2023 = document.getElementById('month-2023-9')
const oct2023 = document.getElementById('month-2023-10')
const nov2023 = document.getElementById('month-2023-11')
const dec2023 = document.getElementById('month-2023-12')

firstRow.addEventListener('click', onClickYear)
secondRow.addEventListener('click', onClickYear)

const years = {
    '2020': show2020,
    '2021': show2021,
    '2022': show2022,
    '2023': show2023,
}

const months = {
    'Jan': showJanuary,
    'Feb': showFebruary,
    'Mar': showMarch,
    'Apr': showApril,
    'May': showMay,
    'Jun': showJune,
    'Jul': showJuly,
    'Aug': showAugust,
    'Sept': showSeptember,
    'Oct': showOctober,
    'Nov': showNovember,
    'Dec': showDecember
}

function onClickYear(event) {
    let content = event.target.textContent.trim()
    const year = years[content]
    year()
    yearsSection.style.display = 'none'
}

function onClickMonth(event) {
    let content = event.target.textContent.trim()
    const month = months[content]
    month(content)

}

function show2020(){
    year2020.style.display = ''
    year2020.querySelector('tbody').addEventListener('click', onClickMonth)
}
function show2021(){
    year2021.style.display = ''
}
function show2022(){
    year2022.style.display = ''
}
function show2023(){
    year2023.style.display = ''
}

function showJanuary(){
    year2020.style.display = 'none'
    jan2020.style.display = ''
}
function showFebruary(){
    year2020.style.display = 'none'
    feb2020.style.display = ''
}
function showMarch(){
    year2020.style.display = 'none'
    mar2020.style.display = ''
}
function showApril(){
    year2020.style.display = 'none'
    apr2020.style.display = ''
}
function showMay(){
    year2020.style.display = 'none'
    may2020.style.display = ''
}
function showJune(){
    year2020.style.display = 'none'
    jun2020.style.display = ''
}
function showJuly(){
    year2020.style.display = 'none'
    jul2020.style.display = ''
}
function showAugust(){
    year2020.style.display = 'none'
    aug2020.style.display = ''
}
function showSeptember(){
    year2020.style.display = 'none'
    sept2020.style.display = ''
}
function showOctober(){
    year2020.style.display = 'none'
    oct2020.style.display = ''
}
function showNovember(){
    year2020.style.display = 'none'
    nov2020.style.display = ''
}
function showDecember(){
    year2020.style.display = 'none'
    dec2020.style.display = ''
}