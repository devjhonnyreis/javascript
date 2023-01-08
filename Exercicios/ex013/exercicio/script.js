var num = document.getElementById('inum')
var tab = document.getElementById('isel')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

    

function add(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        tab.appendChild(item)
        item.text = `${num.value}`
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou numeor já adicionado na lista!')
    }

    num.value = ''
    num.focus()    
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione números antes de finalizar!')
    } else {
        var tot = valores.length
        valores.sort()
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for (var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }

        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos o total de ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O menor número adicionado é o ${menor}</p>`
        res.innerHTML += `<p> O maior número adicionado é o ${maior}</p>`
        res.innerHTML += `<p>A soma dos valores adicionados é de ${soma}</p>`
        res.innerHTML += `<p>A média dos valores adicionados é de ${media}</p>`
    }
}