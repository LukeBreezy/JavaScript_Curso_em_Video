const numero = document.querySelector('input#numero')
const botao = document.querySelector('input#botao')
const tabuada = document.querySelector('select#tabuada')


botao.addEventListener('click', () => geraTabuada(Number(numero.value)))
/*
botao.addEventListener('click', function(){
    geraTabuada(Number(numero.value))
})
*/
function geraTabuada(num){

    if(!valida([numero.value])){
        numero.focus()
        return
    }else{

        tabuada.innerHTML = null
        for(let i = 1; i <= 10; i++){
            criaOptions(num, i)
        }
    }
}

function criaOptions(n1, n2){
    
    let opt = document.createElement('option')
    opt.innerHTML = `${n1} * ${n2} = ${n1*n2}`
    tabuada.appendChild(opt)

}

function valida(campos){
    
    for(let i = 0; i < campos.length; i++){
        if(campos[i].length == 0){
            alert('[ERRO] Preencha todos os campos para prosseguir')
            return false
        }
    }
    return true
}
