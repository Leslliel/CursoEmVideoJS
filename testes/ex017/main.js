function verificar() {
    var numero = document.getElementById('numero')
    var tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        alert('[ERRO] Digite um numero')
    } else {
        tab.innerHTML = ''
        n = Number(numero.value)
        for (c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            // resultado.innerHTML += `<p>${n} x ${c} = ${n * c}</p>`
        }
    }
}

function limpar() {
    var tab = document.getElementById('seltab')
    
    tab.innerHTML = '<option>Digite um numero acima...</option>'
}