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