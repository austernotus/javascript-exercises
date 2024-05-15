const sumAll = function(a,b) {
    
    let finalResult = 0;

    if(a < 0 || b < 0 || typeof a != "number" || typeof b != "number"){
        return "ERROR";
    }

    else if (b > a){
        for(i = a; i <= b; i++){
            finalResult += i;
        }
        return finalResult;
    }
    else if( a > b ){
        for(i = a; i >= b; i--){
            finalResult += i;
        }
        return finalResult;
    }
    else{
        return "ERROR";
    }



};

// Do not edit below this line
module.exports = sumAll;
