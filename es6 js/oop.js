class Car{
    drive(){
        console.log('this is drive method')
    }
    stop(){
        console.log('this is stop method')

    }
    constructor(){
        console.log('this is construstor method')
    }
    static staticMethod(){
        console.log('this is static method')
    }
}
let obj= new Car() //instance
let obj1= new Car() //instance
obj.drive()
obj.stop()
Car.staticMethod()