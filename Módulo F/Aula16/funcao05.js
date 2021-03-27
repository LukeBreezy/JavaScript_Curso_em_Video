let soma = function(num){

    let res = num

    if(num > 0){
        return res + soma(num-1)
    }else{
        return 0
    }
    
}
// soma(3) = 3 + soma(2)
// soma(2) = 2 + soma(1)
// soma(1) = 1 + soma(0)
// soma(0) = 0

let soma2 = function(num){

    return (num ** 2 + num) / 2

}
// ceil - cima
// floor - baixo
// round - mais proximo

let soma3 = function(num){

    let aux = num
    do{
        aux--
        num += aux
    }while(aux > 0)

    return num

//    for(let i = num-1; i > 0; i--){
//        num += i
//    }
//    return num
}
let soma3 = function(num){

    for(let i = num-1; i > 0; i--){
        num += i
    }
    return num
}

console.log(soma(500))
console.log(soma2(500))
console.log(soma3(500))

//////////////////////
// 500 + 0 = 500    //
// 499 + 1 = 500    //
// 498 + 2 = 500    //
// 497 + 3 = 500    //
// 496 + 4 = 500    //
// ...              //
// 253 + 247 = 500  //
// 252 + 248 = 500  //
// 251 + 249 = 500  //
//    250           //
//////////////////////

//////////////////////
//                  //
// 499 + 0 = 499    //
// 498 + 1 = 499    //
// 497 + 2 = 499    //
// 496 + 3 = 499    //
// ...              //
// 253 + 246 = 499  //
// 252 + 247 = 499  //
// 251 + 248 = 499  //
//                  //
//////////////////////


