const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantTacosRightNow: true,
    numberOfTacosWanted: 100,
}

console.log(person)
console.log(person.name)
console.log(person["name"]) // samme som linja over; anbefaler å bruke den andre

// Objekter brukt sammen med funksjoner
const person1 = {
    name: "Angie",
    ageRange: "25-35",
}

const person2 = {
    name: "Francesca",
    ageRange: "65-75",
}

function suggestMusic(person) {
    if (person.ageRange === "25-35") {
        console.log("We think you will like Daft Punk.")
    } else if (person.ageRange === "65-75") {
        console.log("You are obviously going to like Johnny Cash.")
    } else {
        console.log("Uh, maybe try David Bowie? Everyone likes David Bowie, right?" )
    }
}

suggestMusic(person1)
suggestMusic(person2)

// Objekter kan ha egne funksjoner
const dog = {
    name: "Luna",
    speak() {
        console.log("Woof, woof")
    }
}

dog.speak()

// Objekter kan ha nøstede objekter inni seg
const me = {
    name: {
        first: "Brian", 
        last: "Holt",
    },
    location: {
        city: "Seattle",
        state: "WA",
        country: "USA",
    },
}

console.log(me.name.first)
console.log(me.location.state)

console.log(null || string)