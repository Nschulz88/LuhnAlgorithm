// which, given a number, 
// returns whether it is valid or not

var creditCard = 3379513561108795;

function check(num) {
if (num && num !== null && num > 0) {
    var arr1 = Array.from(num.toString()).map(Number);
    var arrWeight = [2,1];
    var multiArray = [];
    for (var i = 0; i < arr1.length; i++) {
        if (i % 2 === 0)  {
            multiArray.push(arr1[i] * arrWeight[0])
        } else {
            index = 1;
            multiArray.push(arr1[i] * arrWeight[1])
        }
    }
    multiArray.forEach(function(number) {
        if (number > 9) {
           var newNum = number.toString().split('').map(Number);
           var newestNum = newNum[0] + newNum[1];
           var indexToChange = multiArray.indexOf(number);
           multiArray[indexToChange] = newestNum;
        }
    })
    var sumOfMultiArr = multiArray.reduce(add, 0);
        function add(a, b) {
        return a + b;
        }
    if (sumOfMultiArr % 10 === 0) {
        return true; 
    } else {
        return false;
    }
} else {
    return false;
}
}
  
module.exports = check;