const add = (a,b) => a +b

const subtract = (a,b) => a - b

const sum = (a) => a.reduce((total,item) => total + item, 0);

const multiply = (a) => a.reduce((total,item) => total * item);

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(a) {
  arr = []
  if (a === 0){
    return 1;
  }
  else{
    for(i=1;i<=a;i++){
      arr.push(i)
    }
    return factor = arr.reduce((total, item) => total * item)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
