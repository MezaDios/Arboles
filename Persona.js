class Persona {

    constructor(nombre, edad)
    {
        this.nombre = nombre
        this.edad = edad
        this.padre = null
    }

    setNombre = nombre => {
        this.nombre = nombre
    }

    setEdad = edad => {
        this.edad = edad
    }

    setPadre = padre => {
        this.padre = padre
    }

    getNombre = () => {
        return this.nombre
    }

    getEdad = () => {
        return this.edad
    }

    getPadre = () => {
        return this.padre
    }
}

var p1 = new Persona("Ismael", 20)
var p2 = new Persona("Iaio", 19)
var p3 = new Persona("JesuCristo nuestro señor", 2019)

p1.padre = p2

console.log(p1.padre.nombre)

p1.padre.padre = p3

p3.padre = new Persona("Diosito", "infinito")


//export default Persona