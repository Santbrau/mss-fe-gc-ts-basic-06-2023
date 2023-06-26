"use strict";
class Password {
    constructor(newLongitud) {
        this.longitud = 8;
        this.longitud = newLongitud;
        this.contraseña = this.generarContraseña();
    }
    generarContraseña() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseña = '';
        for (let i = 0; i < this.longitud; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            contraseña += caracteres.charAt(randomIndex);
        }
        return contraseña;
    }
    obtenerContraseña() {
        return this.contraseña;
    }
}
let password = new Password(8);
console.log(password.obtenerContraseña());
