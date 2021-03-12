var horario = document.querySelector('div#horario')
var saudacao = document.querySelector('div#saudacao')
var imagem = document.querySelector('img#imagem')

var date = new Date
var horas = date.getHours()
var minutos = date.getMinutes()
var segundos = date.getSeconds()

horario.innerText = `Agora são ${horas}:${minutos}:${segundos}`

if(0 <= horas && horas < 6){
    saudacao.innerText = 'Boa madrugada!'
    imagem.src = './imagens/madrugada.png'
    document.body.style.background = 'rgb(90, 90 ,90)'

}else if(6 <= horas && horas < 12){
    saudacao.innerText = 'Bom dia!'
    imagem.src = './imagens/manha.png'
    document.body.style.background = 'rgb(233, 190, 100)'

}else if(12 <= horas && horas < 18){
    saudacao.innerText = 'Boa tarde!'
    imagem.src = './imagens/tarde.png'
    document.body.style.background = 'rgb(222, 142, 85)'

}else if(18 <= horas && horas < 24){
    saudacao.innerText = 'Boa noite!'
    imagem.src = './imagens/noite.png'
    document.body.style.background = 'rgb(39, 31, 64)'

}else{
    saudacao.innerText = 'Horário inválido! Por favor recarregue a página.'
    imagem.src = null
    imagem.alt = ''
}
