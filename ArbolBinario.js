class ArbolBinario {

    constructor (){
        this.raiz = null
    }

    agregar = nodo => {

        if(this.raiz == null)
            this.raiz = nodo
        else{
            this.agregate(nodo, this.raiz)
        }
    }
    
    agregate = (nodo, raiz) => {
        if(nodo.dato < raiz.dato)
        {
            if(raiz.hijoIzquierda == null)
                raiz.hijoIzquierda = nodo
            else
                this.agregate(nodo, raiz.hijoIzquierda)
        }
        else if(nodo.dato > raiz.dato)
        {
            if(raiz.hijoDerecha == null)
                raiz.hijoDerecha = nodo
            else
                this.agregate(nodo, raiz.hijoDerecha)
        }
    }

    inOrder = (raiz) => {
        let cadena = ""
        if(raiz.hijoIzquierda != null){
            cadena = this.inOrder(raiz.hijoIzquierda)
        }

        cadena += " " + raiz.dato + " " 

        if(raiz.hijoDerecha != null){
            cadena += this.inOrder(raiz.hijoDerecha)
        }

        return cadena;
    }

}

export default ArbolBinario