//str.indexOF

//str.indexOf(substr, pos)

// let str = "Widget with id"

// console.log(str.indexOf('Widget'))
// console.log(str.indexOf('widget'))
// console.log(str.indexOf('id'))
// console.log(str.indexOf('id', 2))


let str = "As sly as a fox, as strong as an ox"

let target = 'as'

let pos = 0 
while(true){
    let foundPos = str.indexOf(target, pos);
    if(foundPos == -1) break; 

    console.log(`Found at ${foundPos}`)
    pos = foundPos + 1
}

//startWith wndsWith

console.log("Widget".startsWith("Wid"))
console.log("Widget".endsWith("get"))

//get a substring 

let string = "stringify"
console.log(string.slice(0,5)) //start at 0 but nt including 5
console.log(string.slice(0,1)) //start at 0 but not inclding 1
console.log(string.slice(-4,-1)) //start at 4th form right but not inclding the last
console.log(string.slice(2)) //start from 2 tillt the end 

console.log(string.substring(2,6)) //start from 2 tillt the end 
console.log(string.substring(6,2)) //start from 2 tillt the end 

console.log(string.substr(2,4)) //start from 2 tillt the end 
console.log(string.substr(-4,2)) //start from 2 tillt the end 

