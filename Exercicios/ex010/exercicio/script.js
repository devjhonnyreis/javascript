function carregar() {
    var txt = document.getElementById('hora')
    var foto = document.getElementById('foto')
    var pe = document.getElementById('pe')
    var data = new Date()
    var hora = data.getHours()
    

    if (hora >= 4 && hora < 12) {
        foto.style.backgroundImage = "url(imagens/foto-manha.png)"
        txt.innerHTML = `Bom dia, agora são ${hora} horas.`
    } else if (hora >= 12 && hora < 19) {
        document.body.style.background = '#be5f3c'
        foto.style.backgroundImage = "url(imagens/foto-tarde.png)"
        txt.innerHTML = `Boa tarde, agora são ${hora} horas.`
    } else {
        foto.style.backgroundImage = "url(imagens/foto-noite.png)"
        document.body.style.background = 'black'
        pe.style.color = '#F3F3F3'
        txt.innerHTML = `Boa noite, agora são ${hora} horas.`
    }
}