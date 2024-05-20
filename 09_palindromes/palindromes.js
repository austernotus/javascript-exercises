const palindromes = function (word = "A car, a man, a maraca.") {
    palindrome = ""
    word = word.replace(/[^\w\s\']|_/g, "")
        .replace(/\s+/g, "")
        .toLowerCase()
        .replace(" ");
    for (i = word.length;i>0;i--){
        palindrome = palindrome.concat(word[i-1])
    }
    console.log(word, " + ", palindrome)
    return (word === palindrome);

};


// Do not edit below this line
module.exports = palindromes;
