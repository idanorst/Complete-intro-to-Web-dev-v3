const timesToRepeat = 10
const character = '🐕'

// some loop that takes that character and repeats it that many times

// with a while loop
let number = 0
let answer = ''
while (number < timesToRepeat) {
    answer += character
    number++
}

/* console.log(answer) */
// "🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶"

// with a for loop
let answer2 = ''
for (let i = 0; i < timesToRepeat; i++) {
    answer2 += character
}

/* console.log(answer2) */

console.log(''.padStart(10, character))