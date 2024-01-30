function verificar() {
    var inicio = document.getElementById('n-inicial')
    var final = document.getElementById('n-final')
    var passo = document.getElementById('n-passo')
    var res = document.getElementById('res')
    
    
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            passo.value = 1
            p = 1
        }
        if (inicio.value > final.value) {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `FIM \u{1F3C1}`
    }
    
    // else if (inicio.value > final.value) {
    //         if (passo.value <= 0) {
    //         alert('Passo invalido! Considerando PASSO 1')
    //         passo.value = 1
    //     }
    //     res.innerHTML = 'Contando: </br>'
    //     for(var c = Number(inicio.value); c >= Number(final.value); c -= Number(passo.value)) {
    //         res.innerHTML += `${c} ->`
    //     }
    //     res.innerHTML += 'FIM'
    // } else {
    //     if (passo.value <= 0) {
    //         alert('Passo invalido! Considerando PASSO 1')
    //         passo.value = 1
    //     }
    //     res.innerHTML = 'Contando: </br>'
    //     for(var c = Number(inicio.value); c <= Number(final.value); c += Number(passo.value)) {
    //         res.innerHTML += `${c} -> `
    //     }
    //     res.innerHTML += 'FIM'
    // }
}