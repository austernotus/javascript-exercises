const repeatString = function(text, number) {

    if (number < 0){
        return "ERROR"
    }
    else {
        let finalString = ""

        for (let i = 0; i < number; i++){
            finalString = finalString.concat(text);
        }
    
        return finalString
    }


};


// Do not edit below this line
module.exports = repeatString;
