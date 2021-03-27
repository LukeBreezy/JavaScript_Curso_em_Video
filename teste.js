let txt = 'PROGRAMAÇÃOÉFÁCIL'
let num = 100

let tam = txt.length
let esq = (num % (tam))-1
let dir = ((3 * (num - 1)) % tam)
let diag = num % tam

for(let i = 0; i < num; i++){
  for(let j = 0; j < num; j++){

    switch(j){

      case 0:
        process.stdout.write(txt[esq])
  
        if(esq - 1 < 0){
          esq = tam - 1
        }else{
          esq--
        }
        break

      case i:
        process.stdout.write(txt[diag])

        if(diag + 1 == tam){
          diag = 0
        }else{
          diag++
        }
        break

      case num - 1:
        process.stdout.write(txt[dir])

        if(dir - 1 < 0){
          dir = tam-1
        }else{
          dir--
        }
        break

      default:
        process.stdout.write(' ')
        break
    }
  }
  console.log()
}

console.log()

var mat = []
var num2 = 22 // Num tem que ser par

for (var i = 0; i < num2; i ++) {
  mat.push([])


  for (var j = 0; j < num2; j ++) {

    if (j == 0 || j == num2-1 || (i == j && i < num2/2) || (i+j == num2-1 && i < num2/2)) {

      mat[i].push('M')

    }else{
      mat[i].push(' ')
    }
  } 
}

for (i = 0; i < num2; i++) {

  for(j = 0; j < num2; j++) {

    process.stdout.write(mat[i][j])

  }
  console.log()
}

