const removeFromArray = function(array, toRemove, toRemove2, toRemove3) {

    finalArray = []

    const index = array.indexOf(toRemove)

    fin = array.splice(index, 1)
    return fin
};



// Do not edit below this line
module.exports = removeFromArray;
