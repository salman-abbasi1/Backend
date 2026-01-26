class Car{
drive(){
    document.write('This is Drive Method <br> <br>')
 }
stop(){
document.write('This is Stop Method <br> <br>')
}
}

class electicCar extends Car{       //inheritance
    drive(){
        super.drive()
        document.write('This is drive method of electric car  <br>') //method overiding & polymorphism
    }
}
let tesla = new electicCar()
tesla.drive()
tesla.stop()