const txtinicio = document.querySelector('input#inicio')
const txtfim = document.querySelector('input#fim')
const txtpasso = document.querySelector('input#passo')

const botao = document.querySelector('input#botao')
const res = document.querySelector('div#res')
const foto = document.querySelector('img#foto')

botao.addEventListener('click', conta)

function conta(){
    
    if(valida([txtinicio.value, txtfim.value, txtpasso.value])){

        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Math.abs(Number(txtpasso.value))

        if(passo === 0){
            txtpasso.value = 1
            passo = 1
            alert('Não é possível contar com passo 0! Considerando passo 1')
        }
        if(inicio == fim){
            txtinicio.value = ''
            txtfim.value = ''
            alert('[ERRO] O valor de início e fim não podem ser iguais.\nFaça as alterações necessárias e tente novamente.')
            return
        }
        if(passo > Math.abs(fim - inicio)){
            alert('[ERRO] O passo não pode ser maior que o intervalo entre início e fim.')
            return
        }

        res.innerHTML = '<p>Contando:</p>'
        
        for(let i = inicio;
        fim > inicio ? i <= fim : i >= fim;
        fim > inicio ? i += passo : i -= passo){
            
            if(fim > inicio ?
                i + passo > fim :
                i - passo < fim){

                res.innerHTML += `${i} \u{1F3C1}`
            }else{
                res.innerHTML += `${i} \u{27A1} `
            }
        }
    }
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

let teste = 10
teste = 2
console.log(teste)

