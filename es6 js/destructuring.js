//Array Destructuring
let arr = ['zayn', 'zayn@gmail.com', 18, 'Karachi']

let [a,b,c,d] = arr  // any name could be given in array destructuring

console.log(`Name: ${a} Email: ${b}Age: ${c} City: ${d}`)
document.write(`Name: ${a} <br> Email: ${b} <br> Age: ${c} <br> City: ${d}`)


//Object Destructuring

let obj = {
    id : 1,
    name : 'ali',
    email : 'ali@gmail.com',
    age : 20,
    city : 'Karachi'
}

let {id,name,email, ...x} = obj  // in object destructuring the the name
                                // should be the as in object

console.log(id,name,email,x)