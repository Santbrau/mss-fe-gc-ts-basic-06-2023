"use strict";
const defSexo = "H";
class Persona {
    constructor(newNombre, newEdad, newDNI, newSexo, newPeso, newAltura) {
        this.nombre = "";
        this.edad = 0;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
        this.nombre = newNombre;
        this.edad = newEdad;
        this.DNI = newDNI;
        this.sexo = newSexo;
        this.peso = newPeso;
        this.altura = newAltura;
    }
}
let persona1 = new Persona("Dolores", 80, "123456789A", "M", 75, 160);
console.log(persona1);
let persona2 = new Persona("Angustias", 83, "123456789B", "M", 75, 166);
console.log(persona2);
let persona3 = new Persona("Milagros", 78, "123456789C", "M", 75, 159);
console.log(persona3);
