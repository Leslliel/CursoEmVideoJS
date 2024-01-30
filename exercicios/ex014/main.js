function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png' //Bom dia
        document.body.style.backgroundColor = '#e2bb89'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png' //Boa tarde
        document.body.style.backgroundColor = '#873017'
    } else {
        img.src = 'noite.png' //Boa noite
        document.body.style.backgroundColor = '#302d36'
    }
}