class Password {
    longitud: number = 8;
    contraseña: string;

    constructor (newLongitud:number) {
        this.longitud = newLongitud;
        this.contraseña = this.generarContraseña();
    }

    generarContraseña(): string {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let contraseña = '';
        for (let i = 0; i < this.longitud; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            contraseña += caracteres.charAt(randomIndex);
        }
        return contraseña;
    }

    obtenerContraseña(): string {
        return this.contraseña;
    }
}

let password = new Password (8);
console.log(password.obtenerContraseña());