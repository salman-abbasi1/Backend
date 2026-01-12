var name= "aptech"
document.writeln(name , '<br>')

let name1= "aptech sfc"
document.writeln(name1 , '<br>')

const name2= "aptech malir"
document.writeln(name2 , '<br>')

// block scope 

{
    const age=30
    document.write(age, '<br>') //it will not work outside

    let name1="ali"
    document.writeln(name1 , '<br>') //it will not work outside

    var id = 12 //global scope variable
}
document.writeln(id , '<br>') 

// simple functon / invoke function 


calc()
function calc(){
let a = 3
let b = 2
let c = 5
let d = 5
 document.write ( a + b , '<br>', c + d , '<br>') 
}

// function with parameters and argument

function students(name){
    document.writeln(name, '<br>')
}
students ("ali")
students ("zain")
students ("hamza")

// function with return 

function calculate(num1,num2){
    document.writeln(num1+num2, '<br>')
    return num1 + num2
}

let result = calculate(15,15)

function hello(){
    document.writeln(result)
}
hello()