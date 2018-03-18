// which, given a number, 
// returns whether it is valid or not

var creditCard = 3379513561108795;

function check(num) {
    var arr1 = Array.from(num.toString()).map(Number);
    console.log(arr1);
    var arrWeight = [2,1];
    var multiArray = [];
    var index = 0;
    var multiplier = arrWeight[index];
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    arr1.forEach(function(number){
        var didMathOn = number*multiplier;
        var numToString = didMathOn.toString();
        if (numToString.length > 1){
            console.log("This is running");
            var digitsArray = Array.from(numToString.toString()).map(Number);
            didMathOn = digitsArray.reduce(reducer);
            multiArray.push(didMathOn);
            index++; 
        } else {
        multiArray.push(didMathOn);
        index++; 
        }
    });

    var finalSum = multiArray.reduce(reducer);
    console.log(finalSum);
  }
  
//   module.exports = check;

check(creditCard);