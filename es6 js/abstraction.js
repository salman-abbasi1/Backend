//Abstraction
class Pc{
    #cpuOn(){
        console.log("CPU is turning on")
    }
    #monitorDisplay(){
        console.log("Monitor is turning on")
    }
    showInterface(){
        this.#cpuOn()
        this.#monitorDisplay()
        document.write("Welcome to Windows")
    }
}
let pc = new Pc()
pc.showInterface()