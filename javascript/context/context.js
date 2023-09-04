// Her er konteksten "me"
const me = {
    name: {
        first: "Brian",
        last: "Holt",
    },
    location: {
        streetNumber: 500,
        street: "Fakestreet",
        city: "Seattle",
        state: "WA",
        zipCode: 55555,
        country: "USA",
    },
    getAddress() {
        return `${this.name.first} ${this.name.last} 
        ${this.location.streetNumber}
        ${this.location.street}
        ${this.location.city}, ${this.location.state}
        ${this.location.zipCode}
        ${this.location.country}`
    },
}

console.log(me.getAddress())

const pulledOutGetAddress = me.getAddress.bind(me)

console.log(pulledOutGetAddress())

// Window som kontekst, den mest globale konteksten
console.log(this === window)
console.log(this.scrollY)
console.log(window.scrollY)