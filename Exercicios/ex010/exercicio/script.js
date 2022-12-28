function carregar() {
    var txt = document.getElementById('hora')
    var foto = document.getElementById('foto')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 20

    if (hora >= 4 && hora < 12) {
        
        foto.style.backgroundImage = "url(imagens/foto-manha.png)"
    } else if (hora >= 12 && hora < 19) {
        document.body.style.background = '#be5f3c'
        foto.style.backgroundImage = "url(imagens/foto-tarde.png)"
    } else {
        foto.style.backgroundImage = "url(imagens/foto-noite.png)"
        document.body.style.background = 'black'
        document.querySelector('footer').color = 'white'
    }
}