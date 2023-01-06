function cont(){
    var num = document.getElementById('istart')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipass')
    var res = document.getElementById('res')
    
    if (num.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Dados inválidos, preencha corretamente!')
        res.innerHTML = `Impossível contar!`
    } else {
        var um = Number(num.value)
        var dois = Number(fim.value)
        var tres = Number(passo.value)

        res.innerHTML = 'Contando...'

    if (tres <= 0) {
        tres = 1
        window.alert('Passo inválido, considerando passo 1')
    }

    if (um < dois){
        for (var c = um; c <= dois; c += tres) {
            res.innerHTML += `${c}, \u{1F449} `
        }    
    
    } else {
        for (var c = um; c >= dois; c -= tres) {
            res.innerHTML += `${c}, \u{1F449} `
        }
    }
    res.innerHTML += `Fim!`
    }
}