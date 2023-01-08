function gerar() {
    var num = document.getElementById('inum')

    if (num.value.length == 0) {
        window.alert('Número inválido!')
    } else {
        var n = Number(num.value)
        var tab = document.getElementById('itab')
        tab.innerHTML = ''

        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) 
        }
    }
}