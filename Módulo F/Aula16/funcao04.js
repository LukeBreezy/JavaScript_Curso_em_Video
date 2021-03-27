let fatorial = function(num){
    
    let fat = num
    
    if(num > 1){
        return fat * fatorial(num-1)
    
    }else{
        return 2
    
    }

}

console.log(fatorial(1)) // 120


// !5 = 5 * 24 {!4 [120]}
// !4 = 4 * 6 {!3 [24]}
// !3 = 3 * 2 {!2 [6]}
// !2 = 2 * 1 {!1 [2]}
// !1 = 1 {[1]}





