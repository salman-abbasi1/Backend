// Rest Opr
function add(name,...arg){
    let sum = 0
    for(data of arg){
        sum += data
    }
    console.log(sum)
}
add('ali',30 , 20, 25, 55,90)

//Spread Opr

let arr1 = ['ali','hamza','zain']
let arr2 = [1,3,5]
let arr3 = ['hasan' , ...arr1 , ...arr2]

for(value of arr3){
    document.write(value , '<br>')
}
console.log(arr3)

let obj1 = {
    name : 1
}

let obj2 = {
    id : 2
}

let obj3 = {...obj1 , ...obj2}
console.log(obj3)

//Logical OR "||"

let std = {
    id : 1,
    name : 'Hamza',
    email : ''
}
console.log(std.email || '@gmail.com')  // It changes when there is 
                                        // not any value or null or undefined

//Nullish Coalecing "??"

let std2={
    id : 2,
    name : 'Zayn',
    email : 
}
console.log(std2?.email )

//Optional Chaning "?."

