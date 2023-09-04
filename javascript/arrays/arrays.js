const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

console.log(daysOfTheWeek)
console.log(daysOfTheWeek[0])
console.log(daysOfTheWeek[1])
console.log(daysOfTheWeek[6])

// Det er mange metoder som ligger tilhører arrayer
const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17]
console.log(primeNumbers.length)
console.log(primeNumbers.join(" | "))

// Legge til elementer i en array
const courses = [
    { teacher: "Will Sentence", course: "JavaScript: The Hard Parts" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React" },
    { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
    { teacher: "Scott Moss", course: "Intro to Node.js" },
]

console.log(courses)

courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSSS" })

console.log(courses)

courses[2] = { teacher: "Brian Holt", course: "Complete Intro to Databases" }

console.log(courses)

console.log(courses.length)

courses.unshift()
console.log(courses)

// Iterere over en array
const cities = [
    "Seattle",
    "San Fransisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
]

// metode 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i])
}

// metode 2
cities.forEach(function (city) {
    console.log(city)
})