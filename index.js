import Nodo from './Nodo.js'
import ArbolBinario from './ArbolBinario.js'


let arbol = new ArbolBinario()

console.log(arbol)

document.getElementById("formNodo").onsubmit = e => {
    e.preventDefault()

    let nodo = new Nodo(document.getElementById('valor').valueAsNumber)
    console.log(nodo)
    
    arbol.agregar(nodo)

    console.log(arbol)

    document.getElementById('valor').value = null
}

document.getElementById("formInOrder").onsubmit = e => {
    e.preventDefault() 

    document.getElementById("inOrder").innerHTML = arbol.inOrder(arbol.raiz)
}

document.getElementById("formPreOrder").onsubmit = e => {
    e.preventDefault()

    document.getElementById("preOrder").innerHTML = arbol.preOrder(arbol.raiz)
}

document.getElementById("formPostOrder").onsubmit = e => {
    e.preventDefault()

    document.getElementById("postOrder").innerHTML = arbol.postOrder(arbol.raiz)
}

document.getElementById("formBuscar").onsubmit = e => {
    e.preventDefault()

    let dato = document.getElementById("nodo").valueAsNumber

    let encontrado = arbol.buscar(dato, arbol.raiz)

    if(encontrado == true){
        document.getElementById("buscar").innerHTML = "Encontrado"
    }
    else{
        document.getElementById("buscar").innerHTML = "NO encontrado"
    }
}