class Animal {
    constructor(especie, edad, color, saludo) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.saludo = saludo;
    }
    verInfo = () => {
        console.log(
            `soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
        );
    };
    saludar = () => {
        console.log(`${this.saludo}`);
    };
}

    const perro = new Animal('perro', 5, 'brown', 'ladrar');
    const gato = new Animal('gato', 4, 'black', 'maullar');
    const pajaro = new Animal('pajaro', 2, 'green', 'cantar');

    perro.verInfo();
    perro.saludar();
    gato.verInfo();
    gato.saludar();
    pajaro.verInfo();
    pajaro.saludar();

// Herencia

class Perro extends Animal {
    constructor(especie, edad, color, saludo, raza) {
        super(especie, edad, color, saludo);
        this.raza = raza;
    }
}

const chihuahua = new Perro('perro', 6, 'cafe', 'ladrad', 'chihuahua');
console.log(chihuahua.raza);
chihuahua.saludar();



// Metodos estaticos

class Fruta {
    constructor(fruta, color, sabor) {
        this.fruta = fruta;
        this.color = color;
        this.sabor = null
    }
    static hola(){
        return console.log('saludo de frutas')
    };

    // aqui remplazar con Getter & Setter
    modificarSabor = () => {
        this.sabor = 'Sabor Modificato'
        console.log(`la ${this.fruta} esta ${this.sabor}` )
    }
}

    Fruta.hola()
    const manzana = new Fruta('manzana', 'roja', 'dulce');
    const pera = new Fruta('pera', 'verde', 'dulce');
    manzana.modificarSabor()


// getter & setter

    // Getters and setters work in pairs.
    // A getter returns the current value of the variable
    // and its corresponding setter changes the value
    // of the variable to the one it defines.

class Instrumento {
    constructor(instrumento, cuerdas){
        this._instrumento = instrumento
        this._numeroCuerdas = null
    }

    set cuerdas(cuerdas) {
        this._numeroCuerdas = cuerdas
    }
    get cuerdas() {
        return this._numeroCuerdas
    }
}

    const guitarra = new Instrumento('guitarra', 6)
    guitarra.cuerdas = 7

    console.log('guitarra::', guitarra)
    console.log('numero cuerdas',guitarra.cuerdas) 
    


// classes con funcion
function Hero(name, level) {
    this.name = name;
    this.level = level;
}
Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
};

    const heroe = new Hero('heroe', 25);
    console.log(heroe);
    console.log(heroe.greet());

function Mage(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

    const mago = new Mage('MAGO', 22, 'Fuego');
    console.log(mago);



// https://www.javaguides.net/2019/04/javascript-class-getters-and-setters.html
class User {
    constructor(firstName, lastName, emailId) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._emailId = emailId;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }
    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }
    get lastName() {
        return this._lastName;
    }

    set emailId(emailId) {
        this._emailId = emailId;
    }
    get emailId() {
        return this._emailId;
    }
}

let user = new User('emiaj', 'soir', 'asdf@gmail.com');

    console.table(user)

    user.firstName = 'Ram';
    console.log(user.firstName);

    // change last name
    user.lastName = 'Stark';
    console.log(user.lastName);

    console.log('After changing attributes of User object');
    console.table(user)
