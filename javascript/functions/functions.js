// Learning functions
function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I'm extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"))
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"))


const myHomeCity = "Oslo"
const myHomeState = "Oslo"
const myHomeCountry = "Norway"

function logOutYourHome(city, state, country) {
    console.log(`You are from ${city}, ${state} ${country}`)
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry)

/* Ulike måter å skrive funksjoner på */
function bark() {
    console.log("woof")
}

const meow = function () {
    console.log("meeeeeeeow")
}

// the => is just = > put together, the font just combines them to one glyph
const chirp = () => {
    console.log("chirp chirp")
}

bark()
meow()
chirp()