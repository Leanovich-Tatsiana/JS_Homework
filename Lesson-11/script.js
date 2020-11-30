//Задание 1:

var arr = [-1, 0, 2, 34, -2];

var newArr =  arr.filter(function(namber) {
    return namber > 0;
});
alert( newArr );

//Задание 2:

var arr = [-1, 0, 2, 34, -2];

var firstConcurrence = arr.find(function(namber) {
    return namber > 0;
});
alert( firstConcurrence );

//Задание 3:

function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
};
console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));

//Задание 4:

function areAnagrams(str1, str2) {
    if (str1.length === str2.length) {
        return str1 === str2.toLowerCase().split('').sort().join('');
    
    };
    return false;
};
console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));

//Задание 5:
function divideArr(arr,size) {
    var result = [];
    for (var i = 0 ;i < arr.length; i+=size ) {
        result.push(arr.slice(i, i+size))
    }
    return result;
};

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
