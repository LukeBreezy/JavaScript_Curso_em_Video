function verif(){
    var date = new Date
    var ano = date.getFullYear()
    
    var ano_nasc = document.querySelector('input#txtano').value

    var res = document.querySelector('div#res')
    
    if(ano_nasc.length == 0 || Number(ano_nasc) > ano){
        alert('[ERRO] Valor inválido para Ano de Nascimento')

    }else{
        var idade = ano - ano_nasc
        var sexo = document.getElementsByName('radsex')
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            var genero = 'Homem'

            document.body.style.background = 'rgb(50, 50, 50)'

            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', './imagens/hbebe.png')

            }else if(idade <= 10){
                img.setAttribute('src', './imagnes/hcrianca.png')

            }else if(idade <= 20){
                img.setAttribute('src', './imagens/hjovem.png')

            }else if(idade <= 50 ){
                img.setAttribute('src', './imagens/hadulto.png')

            }else{
                img.setAttribute('src', './imagens/hidoso.png')

            }

        }else{
            var genero = 'Mulher'

            document.body.style.background = 'rgb(200, 200, 200)'

            if(idade >= 0 && idade <= 2){
                img.setAttribute('src', './imagens/mbebe.png')

            }else if(idade <= 10){
                img.setAttribute('src', './imagens/mcrianca.png')

            }else if(idade <= 20){
                img.setAttribute('src', './imagens/mjovem.png')

            }else if(idade <= 50 ){
                img.setAttribute('src', './imagens/madulto.png')

            }else{
                img.setAttribute('src', './imagens/midoso.png')

            }        
        }

        res.innerText = `${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}