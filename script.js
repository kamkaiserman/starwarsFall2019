import { films } from './films.js'
import { people } from './people.js'

let mainArea = document.querySelector('main')

/* films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)
}); */

people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img')
    let birthday = document.createElement('p')
    let mass = document.createElement('p')
    let hair = document.createElement('p')


    personDiv.setAttribute('class', 'charDivs')
    pic.setAttribute('class', 'picDivs')

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    pic.textContent = person.pic
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    gender.textContent = `Gender: ${person.gender}`
    hair.textContent = `Hair Color: ${person.hair_color}`
    mass.textContent = `Weight: ${person.mass}`
    birthday.textContent = `Birth Year: ${person.birth_year}`


    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)
    personDiv.appendChild(hair)
    personDiv.appendChild(mass)
    personDiv.appendChild(birthday)


    mainArea.appendChild(personDiv)
});

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

const allDivs = Array.from(document.querySelectorAll('div'))
console.log(allDivs)
const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
maleButton.textContent = 'Misogyny HAS WON'

maleButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
    otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: grid;")
    })
    headline.setAttribute("style", "color: rgba(255, 255, 255, 0.1)")
    window.scrollTo(0, 435);
})

let femaleButton = document.createElement('button')
femaleButton.textContent = 'LET THE WOMEN VOTE'

femaleButton.addEventListener('click', () => {
    otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: grid;")
    })
    headline.setAttribute("style", "color: rgba(255, 255, 255, 0.1)")
    window.scrollTo(0, 435);
})

let otherButton = document.createElement('button')
otherButton.textContent = 'THE A.I. IS EVOLVING'

otherButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: none;")
    })
    otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: grid;")
    })
    headline.setAttribute("style", "color: rgba(255, 255, 255, 0.1)")
    window.scrollTo(0, 435);
})

mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(otherButton)

const otherCharacters = people.filter(person => person.gender != 'male' && person.gender != 'female')
const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')

console.log(maleCharacters)
console.log(femaleCharacters)