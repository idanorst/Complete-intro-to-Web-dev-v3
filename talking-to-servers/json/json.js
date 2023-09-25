const responseFromServer = `
    {
        "name": "Luna", 
        "age": 10, 
        "breed": "Havanese", 
        "location": 
            {
                "city": "Seattle", 
                "state": "WA"
            }
    }`

console.log(responseFromServer)

const responseObject = JSON.parse(responseFromServer)

console.log(responseObject.name)
console.log(responseObject.location.city)
console.log(responseObject)

const dog = {
    name: "Luna", 
    age: 10, 
    breed: "Havanese", 
    location: {
        city: "Seattle",
        state: "WA"
    }
}

console.log(JSON.stringify(dog))

const el = document.getElementById("code-block")
el.innerText = JSON.stringify(dog, null, 2)