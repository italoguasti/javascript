// Classe pessoa
class Person {
    // Construtor instanciado toda vez que uma classe Pessoa é criada
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Método da classe
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }

    // Método estatíco da classe
    static speak() {
        console.log('Hello world!')
    }
}

// New classe Person
const person = new Person('Jane', 'Doe', 40);

console.log(person);

// Maneira como acessar o método estático
Person.speak();

// Herança na Prog. Orientada a Objetos

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

// A classe Dog herda a classe Animal
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // Além de utilizar o método speak ela pode sobrescreve-lo
    speak() {
        console.log(`${this.name} barked!`);
    }
}

const animal = new Animal("Simba");
const dog = new Dog("Bob");

animal.speak();
dog.speak();
