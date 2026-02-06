//Encapsulation
class bankAccount{
    #balance
    constructor(owner, balance){
        this.owner = owner
        this.#balance = balance
        document.write(`${this.owner} your account balance is : ${this.#balance} <br>`)
}

    deposit(amount){
        if(amount > 0){
        this.#balance += amount
        document.write(`Your balance after deposit is : ${this.#balance} <br>`)
        }
    }
    withdraw(amount){
        if(amount > 500 && amount < this.#balance){
        this.#balance -= amount
        document.write(`Your balance after withdrawl is : ${this.#balance}`)
        }
    }
}
let acc = new bankAccount('Ali' , 20000)
acc.deposit(3000)
acc.withdraw(1500)