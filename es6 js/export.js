// export {Pc,add}  //another way of exporting

export class Pc{
    #cpuOn(){
        console.log("CPU is turning on")
    }
    #monitorDisplay(){
        console.log("Monitor is turning on")
    }
    showInterface(){
        this.#cpuOn()
        this.#monitorDisplay()
        console.log("Welcome to Windows")
    }
}

export function add(a,b){
    console.log(`${a} + ${b} = ${a+b} `)
}