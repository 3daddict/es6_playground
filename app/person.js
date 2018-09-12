import addToDom from './add_to_dom';

class Person {
    constructor(name){
        this.name = name;
    }

    talk(msg) {
        addToDom('h1', `${this.name} says: ${msg}`);
    }

    greet() {
        this.talk(`Hi my name is ${this.name}`);
    }
}

class SuperPerson extends Person {
    constructor(name, superPower){
        super(name); //super is the parent constructor
        this.superPower = superPower;
    }
    saySuperPower(){
        this.talk(`My super power is ${this,this.superPower}`);
    }
}

export default SuperPerson;