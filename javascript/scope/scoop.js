// Learning scope
function addFive(number) {
    const someVariable = "you can't see me outside this function"

    console.log(someVariable)

    return number += 5
}

addFive(10)
// someVariable er ikke tilgjengelig utenfor funksjonen.
/* console.log(someVariable) */
console.log(addFive(5))


/* friendsAtYourParty er etablert utenfor loopen og er derfor også tilgjengelig utenfor den. */
let friendsAtYourParty = 0

for (let i = 0; i < 10; i++) {
    friendsAtYourParty++
}

console.log(friendsAtYourParty)

/* Funksjoner kan skrives nedenfor der de blir kalt, fordi de automatisk blir flyttet til toppen når koden kjøres. Men det er kun funksjoner dette virker for. */