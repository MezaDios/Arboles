import Nodo from './Nodo.js'
import ArbolBinario from './ArbolBinario.js'


let arbol = new ArbolBinario()

console.log(arbol)

document.getElementById("form1").onsubmit = e => {
    e.preventDefault()

    let nodo = new Nodo(document.getElementById('valor').valueAsNumber)
    console.log(nodo)
    
    arbol.agregar(nodo)

    console.log(arbol)

    document.getElementById('valor').value = null
}

document.getElementById("form2").onsubmit = e => {
    e.preventDefault() 

    document.getElementById("resultado").innerHTML = arbol.inOrder(arbol.raiz)
}