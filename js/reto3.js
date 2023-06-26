"use strict";
class Electrodomestico {
    constructor(newPrecioBase, newColor, newConsumoEnergetico, newPeso) {
        this.precioBase = 100;
        this.color = "blanco";
        this.consumoEnergetico = "F";
        this.peso = 5;
        this.precioBase = newPrecioBase;
        this.color = this.comprobarColor(newColor);
        this.consumoEnergetico = this.comprobarConsumoEnergetico(newConsumoEnergetico);
        this.peso = newPeso;
    }
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(consumo) {
        let consumoLetra = ["A", "B", "C", "D", "E", "F"];
        let consumoValido = consumoLetra.find((c) => c.toUpperCase() == consumo.toUpperCase());
        return consumoValido ? consumoValido : "F";
    }
    comprobarColor(color) {
        let colores = ["blanco", "negro", "rojo", "azul", "gris"];
        let colorValido = colores.find((c) => c.toLowerCase() == color.toLowerCase());
        return colorValido ? colorValido : "blanco";
    }
    precioFinal() {
        let consumo = this.calcularConsumo();
        let peso = this.calcularPeso();
        return this.precioBase + consumo + peso;
    }
    calcularConsumo() {
        switch (this.consumoEnergetico.toUpperCase()) {
            case "A":
                return 100;
            case "B":
                return 80;
            case "C":
                return 60;
            case "D":
                return 50;
            case "E":
                return 30;
            case "F":
                return 10;
            default:
                return 10;
        }
    }
    calcularPeso() {
        if (this.peso >= 0 && this.peso < 20) {
            return 10;
        }
        else if (this.peso >= 20 && this.peso < 50) {
            return 50;
        }
        else if (this.peso >= 50 && this.peso < 80) {
            return 80;
        }
        else {
            return 100;
        }
    }
}
class Lavadora extends Electrodomestico {
    constructor(carga = 5, precioBase = 100, color = "blanco", consumoEnergetico = "F", peso = 5) {
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }
    getCarga() {
        return this.carga;
    }
    precioFinal() {
        let precioBase = super.precioFinal();
        if (this.carga > 30) {
            return precioBase + 50;
        }
        else {
            return precioBase;
        }
    }
}
class Television extends Electrodomestico {
    constructor(resolucion = 20, es4K = false, precioBase = 100, color = "blanco", consumoEnergetico = "F", peso = 5) {
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.es4K = es4K;
    }
    getResolucion() {
        return this.resolucion;
    }
    getEs4K() {
        return this.es4K;
    }
    precioFinal() {
        let precioBase = super.precioFinal();
        if (this.resolucion > 40) {
            precioBase += precioBase * 0.3;
        }
        if (this.es4K) {
            precioBase += 50;
        }
        return precioBase;
    }
}
class Main {
    static main() {
        let electrodomesticos = new Array(10);
        electrodomesticos[0] = new Television(40, true);
        electrodomesticos[1] = new Lavadora(8);
        electrodomesticos[2] = new Television(35, false);
        electrodomesticos[3] = new Lavadora(30);
        electrodomesticos[4] = new Television(50, true);
        electrodomesticos[5] = new Lavadora(55);
        electrodomesticos[6] = new Television(24, false);
        electrodomesticos[7] = new Lavadora(15);
        electrodomesticos[8] = new Television(60, false);
        electrodomesticos[9] = new Lavadora(12);
        let precioElectrodomesticos = 0;
        let precioTelevisores = 0;
        let precioLavadoras = 0;
        for (let electrodomestico of electrodomesticos) {
            let precioFinal = electrodomestico.precioFinal();
            precioElectrodomesticos += precioFinal;
            if (electrodomestico instanceof Television) {
                precioTelevisores += precioFinal;
            }
            else if (electrodomestico instanceof Lavadora) {
                precioLavadoras += precioFinal;
            }
        }
        console.log("Precio electrodomésticos: " + precioElectrodomesticos);
        console.log("Precio televisiones: " + precioTelevisores);
        console.log("Precio lavadoras: " + precioLavadoras);
    }
}
Main.main();
