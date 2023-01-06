function cont(){
    var num = document.getElementById('istart')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipass')
    var res = document.getElementById('res')
    var um = num.value
    var dois = fim.value
    var tres = passo.value

    for ( var i = um; i <= dois; i + tres) {
        res.innerText = `${i}`
    }
}