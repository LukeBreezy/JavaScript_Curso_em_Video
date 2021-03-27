const num = document.querySelector('input#num')
const add = document.querySelector('input#add')
const fin = document.querySelector('input#finalizar')
const limpa = document.querySelector('input#limpar')
const numsel = document.querySelector('select#numsel')
const res = document.querySelector('div#res')
let nums = []

add.addEventListener('click', add_num)
num.addEventListener('keypress', function(e){e.which == 13 ? add_num() : null})
fin.addEventListener('click', finalizar)
limpa.addEventListener('click', limpar)


function add_num(){
    
    if(num.value.length === 0){
        num.focus()
        return alert('Dígite um número para prosseguir.')
    }
    const aux = Number(num.value)
    
    if(check_intervalo(aux)){
        num.value = ''
        num.focus()
        return alert(`Digite um número entre 1 e 100`)
    }

    if(check_duplicados(aux)){
        num.value = ''
        num.focus()
        return alert(`O número ${aux} já existe na lista.`)
    }

    nums.push(aux)
    add_opt(aux)
    num.value = null
    num.focus()
    res.innerHTML = ''

}


function check_intervalo(num){
    return !(num >= 1 && num <= 100)
}


function check_duplicados(num){
    return nums.indexOf(num) != -1
}


function add_opt(num){

    const opt = document.createElement('option')
    opt.setAttribute('id',  `opt${nums.length}`)
    opt.innerText = `Número ${num} adicionado.`

    numsel.appendChild(opt)

}


function finalizar(){

    if(nums.length == 0){
        return alert('Adicione números na lista para prosseguir')
    }

    let qtde = nums.length

    let maior = nums[0]
    let menor = nums[0]
    for(let i in nums){
        if(nums[i] > maior){
            maior = nums[i]
        }
        if(nums[i] < menor){
            menor = nums[i]
        }
    }

    let soma = 0
    for(let i in nums){
        soma += nums[i]
    }

    let media = soma / qtde

    res.innerHTML = `<ul type='square'>
                        <li>Ao todo temos ${qtde} números cadastrados
                        <li>O maior número informado foi ${maior}
                        <li>O menor número informado foi ${menor}
                        <li>Somando todos os valores, temos ${soma}
                        <li>A média dos valores digitados é ${(media.toFixed(2)).replace('.', ',')}
                    </ul>`
}


function limpar(){
    res.innerHTML = null
    numsel.innerHTML = null
    nums = []
    num.focus()
}
