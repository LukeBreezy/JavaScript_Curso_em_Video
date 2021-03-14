var txtinicio = document.querySelector('input#inicio')
var txtfim = document.querySelector('input#fim')
var txtpasso = document.querySelector('input#passo')

var botao = document.querySelector('input#botao')
var res = document.querySelector('div#res')
var foto = document.querySelector('img#foto')

botao.addEventListener('click', conta)

function conta(){
    
    if(valida([txtinicio.value, txtfim.value, txtpasso.value])){

        inicio = Number(txtinicio.value)
        fim = Number(txtfim.value)
        passo = Math.abs(Number(txtpasso.value))


        if(passo === 0){
            txtpasso.value = 1
            passo = 1
            alert('Não é possível contar com passo 0! Considerando passo 1')
        }else if(passo > Math.abs(fim-inicio)){
            alert('O passo não pode ser maior que o intervalo entre inicio e fim.')
            .exit()
        }

        res.innerHTML = '<p>Contando:</p><p>'

        for(var i = inicio;
        fim > inicio ? i <= fim : i >= fim;
        fim > inicio ? i += passo : i -= passo){

            if(fim > inicio ?
                i + passo > fim :
                i - passo < fim){

                res.innerHTML += `${i} \u{1F3C1} `
            }else{
                res.innerHTML += `${i} \u{27A1} `
            }
        }
        res.innerHTML += '</p>'
    }
}

function valida(campos){
    
    for(var i = 0; i < campos.length; i++){
        if(campos[i].length == 0){
            alert('[ERRO] Preencha todos os campos para prosseguir')
            return false
        }
    }
    return true
}