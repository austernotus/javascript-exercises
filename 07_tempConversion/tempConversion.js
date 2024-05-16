const convertToCelsius = function(temp) {
  let convertedTemp = (temp-32) * 5/9

  if(convertedTemp % 1 === 0){
    return convertedTemp
  }
  else{
    return +convertedTemp.toFixed(1)
  }
  
  //or faster 
  //convertedTemp = Math.round(convertedTemp * 10) / 10 

};

const convertToFahrenheit = function(temp) {
  let convertedTemp = temp * 9/5 +32

  if(convertedTemp % 1 === 0){
    return convertedTemp
  }
  else{
    return +convertedTemp.toFixed(1)
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
