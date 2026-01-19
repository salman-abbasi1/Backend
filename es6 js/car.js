class Car {
    constructor(name,city,id){
        this.name = name
        this.city = city
        this.id = id
    }

    owner_name(){
        console.log(`Owner Name : ${this.name} `)
    }

    owner_city(){
        console.log(`Owner City : ${this.city} `)
    }

    owner_id(){
        console.log(`Owner ID : ${this.id} `)
    }
}

let owner1 = new Car('Ali', 'Karachi', 'BAB-128')
let owner2 = new Car('Zayn', 'Lahore', 'ABC-276')
owner1.owner_name()
owner1.owner_city()
owner1.owner_id()
owner2.owner_name()
owner2.owner_city()
owner2.owner_id()