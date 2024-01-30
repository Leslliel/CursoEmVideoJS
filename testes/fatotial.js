function fator(n) {
    for(let cont = n-1; cont > 1; cont--) {
        n *= cont
    }
    return n
}

console.log(fator(4))