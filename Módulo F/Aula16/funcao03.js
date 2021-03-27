let fatorial = function(num){
    let fat = 1
    for(let i = 1; i <= num; i++){
        console.log(fat*i)
        fat *= i
    }
    return fat
}

console.log(fatorial(0))