var date = new Date()

var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if(0 <= hora < 6){
    console.log('Boa madrugada!')

}else if(6 <= hora < 12){
    console.log('Bom dia!')

}else if(12 <= hora < 18){
    console.log('Boa tarde!')

}else if(18 <= hora < 24){
    console.log('Boa noite!')
}
