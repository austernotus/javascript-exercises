const fibonacci = function(a) {
    const fib = [0,1]
    if(a <0){
        return "OOPS"
    }
    else if (typeof a === "string"){
        a = Number(a)
    }
     for (let i = 2; i <= a; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[a];

};

//if(a <0){
//    return "OOPS"
//}
//else if (typeof a === "string"){
//    a = Number(a)
//}
//for(i=2;i<30;i++){
//    fib.push(fib[i-2] + fib[i-1])
//}
//return fib[a]


// Do not edit below this line
module.exports = fibonacci;
