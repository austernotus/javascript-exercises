const getTheTitles = function(obj) {
    listOfBooks = []

    for (book in obj){
        listOfBooks.push(obj[book].title)
    }
    return listOfBooks
};

// Do not edit below this line
module.exports = getTheTitles;
