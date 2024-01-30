let lista = []
let res = document.getElementById('resultado')
let selec = document.getElementById('numSelect')
let num = document.getElementById('num')

function adicionar() {
    if (num.value.length == 0 || num.value < 1 || num.value > 100 || lista.indexOf(Number(num.value)) != -1) {
        alert('Valor invalido ou já encontrado na lista')
    } else {
        let item = document.createElement('option')
        
        lista.push(Number(num.value))
        item.text = `Valor ${num.value} adicionado`
        item.value = `item${lista.length}`
        selec.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizacao() {
    let tamanho = lista.length

    if (tamanho == 0) {
        alert('Adicione pelo menos um numero')
    }else {
        let maior = 0
        let menor = 0
        let soma = 0
        let media = 0

        for (let n in lista) {
            if (lista[n] > maior || n == 0) {
                maior = lista[n]
            }
            if (lista[n] < menor || n == 0) {
                menor = lista[n]
            }
            soma += lista[n]
        }

        media = soma / tamanho
        
        function adiciRes(n) {
            res.innerHTML += `<p>${n}</p>`
        }

        adiciRes(`Ao todo, temos ${tamanho} números cadastrados.`)
        adiciRes(`O maior valor informado foi de ${maior}`)
        adiciRes(`O menor valor informado foi ${menor}`)
        adiciRes(`Somando todos os valores, temos ${soma}`)
        adiciRes(`A média dos valores digitados é ${media}`)

    }
}
