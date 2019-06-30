// let array = new Array();
// let arr = [];

// console.log(vegetables[0])
// console.log(vegetables[1])
// console.log(vegetables[2])


// console.log(vegetables)
// console.log(vegetables.length)

// let dinner = ["sadza"]

// let lunch = dinner

// lunch.push('muriwo')

//loops 

// let vegetables = ['spinach', 'muriwo', 'kovo']

// for(let i=0; i < vegetables.length; i++) {
//     console.log(vegetables[i])
// }

// for(let veggies of vegetables){
//     console.log(veggies)
// }

let arr = ["I", "go", "home"]

delete arr[1]

arr[1] = "come"

// console.log(arr)

//arr.spice(index[, deleteCount.ele1....eleN])

let array = ["I", "study", "Javascript"]

// array.splice(1,1)

array.splice(0,3, "Lets", "dance")
// console.log(array)

let array2 = ["I", "study", "Javascript", "right", "now"]

// let removed = array2.splice(0,2);

array2.splice(2,0, "a", "complex", "language", "called")

// console.log(removed)

// console.log(array2)

//slice 

//arr.slice(start, end) 

let str = "test"
let arr1 = ["t","e","s","t"]

// console.log(str.slice(1,3))
// console.log(arr1.slice(1,3))


//arr.concat(arg1, arg2)

let ex = [1,2]
let ex1 = [3,4]
let ex2 = [5,6]

// console.log(ex.concat(ex1, ex2))

//forEach 

let turtles = ["donatello", "micheangelo", "rafael", "leaonardo"]

// turtles.forEach((turtle, index) => {
//     console.log(`${turtle} is the number ${index+1} turtle `)
// })

//searching an array 
// arr.indexOf(item, from) looks for item starting from index 0
// arr.lastIndexOf(item,from) looks for item starting from index -1
// arr.includes(item,from) looks for item from start and returns true if item is found 

// console.log(turtles.indexOf("donatello"))
// console.log(turtles.includes("donatello"))

//find and findIndex, filter

let users = [
    {id:1, name: "Kudzanayi"},
    {id:2, name: "Tamuka"},
    {id:3, name: "Dzvairo"}
]

// users.find(name => {
//    if(name.id == 2){
//        console.log(name.name)
//    }
// })

// users.filter(user => {
//     if(user.name.includes("a")){
//         console.log(user.name)
//     }
// })

//map 

// users.map(user => {
//     console.log(user.id)
// })

//split and join  str.spilt(delim)

let names = "Rutendo, Farai, Oswald, Mabel, Godfrey, Kudzanayi"

let dzvairo = names.split(', ')


for(let name of dzvairo) {
    console.log(`A message to ${name}. Big up yourself!`)
}

//split turns string to array and join turns array into string

zimre = dzvairo.join(' -> ')

console.log(zimre)

//reduce

let numbers = [1, 2, 3, 4, 5]

let result = numbers.reduce((sum, current) =>{
     sum + current
    })

console.log(result)

//destructuring

let name = "kudzanayi dzvairo".split(" ")

let [firstName, lastName] = name 

console.log(firstName, lastName)