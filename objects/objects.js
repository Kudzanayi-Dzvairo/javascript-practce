// let obj = new Object()
// obj = {} //object literal

// user = {
//     name: "tamuka",
//     isBlack: true,
//     age: 30,
//     hometown: "Harare",
//     origin: "Chigondo",
//     parents: ["godfrey", "mabel"],
//     address: {
//         street: "509 W 161st",
//         apt: "3A",
//         city: "New York",
//         country: "USA"
//     },
//     mood: ""
// }

// user.greet = () => {
//     console.log("Sei sei rasta")
// }

// user.bday = () => {
//     user.age++
//     console.log(`Happy Birthday, you are ${user.age} years old now`)
// }

//constructior operator new

function Person(name) {
    this.name = name;
    this.isAdmin = true 
}

let person = new Person("Tamuka")