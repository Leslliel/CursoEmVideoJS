function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano-nascimento')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', './imagens/crianca-homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/jovem-homem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso-homem.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', './imagens/crianca-mulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/jovem-mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/Adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)

    }


}