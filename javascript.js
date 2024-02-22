var altura = 0;
var largura = 0;

function AjustarTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

AjustarTamanho()
function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 900
    var posicaoY = Math.floor(Math.random() * altura) - 900

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    console.log(posicaoX, posicaoY)

    //Elemento HTML

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + '' + ladoAleatorio()
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}