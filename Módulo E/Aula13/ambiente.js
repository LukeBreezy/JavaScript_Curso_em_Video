/*console.log('Teste')
console.log('Teste')
console.log('Teste')
console.log('Teste')
console.log('Teste')
console.log('Teste')
console.log('Teste')*/

var cont = 0

while(cont < 10){
    console.log(`Teste ${cont}`)
    cont++
}

cont = 0

do{
    process.stdout.write(`Teste ${cont}`)
    console.log(`Teste ${cont}`)
    cont++
}while(cont < 10)