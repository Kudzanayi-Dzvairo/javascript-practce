function logMessage() {
  console.log("this is a function");
}

// logMessage()
// logMessage()

//local variablea 

function local() {
    let message = "this is local homie"
    console.log(message)
}
// local()
// console.log(message)

//global 

let name = 'Kudzanayi'

function global() {
    name = 'Tamuka'
    let greeting = `Hello ${name}`
    console.log(greeting)
}

// console.log(name)
// global()
// console.log(name)

function parameters(name="Kudzanayi", age=31){
    console.log(`My name is ${name} and I'm ${age} years old`)
}

// parameters()


//