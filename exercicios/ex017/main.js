function verificar() {
    var numero = document.getElementById('numero')
    var resultado = document.getElementById('res')

    if (numero.value.length == 0) {
        alert('[ERRO] Digite um numero')
    } else {
        n = Number(numero.value)
        resultado.innerHTML = ''
        for (c = 0; c <= 10; c++) {
            resultado.innerHTML += `<p>${n} x ${c} = ${n * c}</p>`
        }
    }
}

function limpar() {
    var resultado = document.getElementById('res')

    resultado.innerHTML = '<p>Esperando numero...</p>'
}