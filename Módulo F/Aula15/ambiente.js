let num = [5, 2, 9, 3]

console.log(`Os valores do vetor são ${num}.`)

console.log('O número 4 será adicionado no vetor.\n')
num.push(4)

console.log(`O vetor tem ${num.length} posições.\n`)

num.sort()
console.log(`Os valores do vetor ordenados do menor para o maior são ${num}.\n`)


let i = 0
do{
    console.log(`Posição: ${i} - Valor: ${num[i]}`)
    i++
}while(i < num.length)

console.log('\n')

for(let i in num){
    console.log(`Posição: ${i} - Valor: ${num[i]}`)
}

let indice = num.indexOf(5)

indice == -1 ? console.log('Índice não encontrado.') : console.log(`Índice ${indice}.`)
