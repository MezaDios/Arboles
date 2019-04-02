const factorial = x => {
    if (x > 1)
        return x * factorial(x - 1)
    else
        return 1
}

const fibonacci = n => {
    if (n == 1)
        return 0
    else if (n == 2)
        return 1
    else
        return fibonacci(n - 1) + fibonacci(n - 2)
}

const amigosMenores = limite => {
    var lista = []
    for (let a = 1; a < limite; a++) {
        for (let b = 1; b < limite; b++) {
            if (sonAmigos(a, b)) 
                lista.push([a,b])
        }
    }
    return lista
}

const sonAmigos = (a, b) => {
    if (
        a != b
        && sumaDivisores(a) === b
        && sumaDivisores(b) === a
    )
        return true
    else
        return false
}

const sumaDivisores = (n) => {
    var suma = 0
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0)
            suma += i
    }
    return suma
}

let amigos = amigosMenores(3000)
amigos.forEach(amigo => {
   console.log(amigo.join(' -> '))
})