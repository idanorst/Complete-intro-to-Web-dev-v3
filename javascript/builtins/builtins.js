// splitte opp setninger
let string = "hi my name is Brian"
string = string.substring(3, 13)

console.log(string)

// endre store og små bokstaver
const sentence = "ThIs HaS wEiRd CaSiNg On It"

const lowerCaseSentence = sentence.toLowerCase()
console.log(lowerCaseSentence)

// runde av et tall
const number = 5.1
const roundedNumber = Math.floor(number)
console.log(roundedNumber)

const number2 = 5.99
const ceilNumber = Math.ceil(number2)
console.log(ceilNumber)

// Sjekke om en string inneholder en annen string
const testStringOne = "The quick brown fox jumps over the lazy dog"
const testStringTwo = "Mirror, mirror on the wall, don't say it cause I know I'm cute"
const stringToLookFor = "cute"

console.log(testStringOne.includes(stringToLookFor))
console.log(testStringTwo.includes(stringToLookFor))

// vite hvor mange millisekunder som har gått siden 1. januar 1970?
console.log(Date.now())