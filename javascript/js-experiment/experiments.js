console.log("hello from experiment")

const monthlyRent = 500

const yearlyRent = monthlyRent * 12
console.log(yearlyRent)

/* STRINGS */
/* Kan bruke backslash '\' for å fortelle at det neste tegnet skal være med i stringen.s */
const myLine = 'don\'t do that'
console.log(myLine)

/* String concatination */
const firstName = 'Brian'
const lastName = 'Holt'

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?"
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`

console.log(sentence)
console.log(sentenceWithTemplate)

/* CONTROL FLOW */
const skyIsBlue = true

if (skyIsBlue) {
    console.log("The sky is blue!")
} else {
    console.log("The sky is _ not blue?")
}

// if you see three linkes, it's just three = in a row, ===, the font just combines them into one big character
if (2 + 2 === 4) {
    console.log(
        "Oh thank god, the fundamental principles of mathematics still hold true."
    )
} else {
    console.log("Uh, panic?")
}

/* else ifs */
const friendsAtYourParty = 1

if (friendsAtYourParty === 0){
    console.log("Cool, now I have a lot of nachos to myself.")
} else if (friendsAtYourParty <= 4) {
    console.log("Perfect amount to play some Mario Kart.")
} else {
    console.log("Wooooo turn on the dance music!")
}