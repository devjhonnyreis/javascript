function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Ano de Nascimento Inválido')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'imagens/foto-bebem.png')
            } else if (idade < 12){
                img.setAttribute('src', 'imagens/foto-criançam.png')
            } else if (idade < 19){
                img.setAttribute('src', 'imagens/foto-adolescentem.png')
            } else if (idade < 30){
                img.setAttribute('src', 'imagens/foto-jovemm.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-adultom.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', 'imagens/foto-bebef.png')
            } else if (idade < 12){
                img.setAttribute('src', 'imagens/foto-criançaf.png')
            } else if (idade < 19){
                img.setAttribute('src', 'imagens/foto-adolescentef.png')
            } else if (idade < 30){
                img.setAttribute('src', 'imagens/foto-jovemf.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/foto-adultof.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idosa.png')
            }
        }

        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
    
    
}