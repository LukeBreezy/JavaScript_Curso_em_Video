var teste = ''

for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        if(j == i || j == 0 || j == 9){
            teste += ' N '        
        }else{
            teste += '   '
        }
    }
    teste += '\n'
}

console.log(teste)

