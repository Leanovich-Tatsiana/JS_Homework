//Task 1
var str = 'name_surname-1234@gmail.com';

/^[a-z]{3,10}_[a-z]{3,10}(-[\d]{4})?@([a-z\d](-|\.)?){2,20}\.com$/i.test(str);

//Task 2
function stringTesting(str) {
  alert(
    /^(\+?375-?|8-?0)(25|29|33|44|17)-?(([1-9]\d{2})-?\d{2}-?\d{2})$/.test(str)
  );
}
stringTesting('+375-25-777-77-77');
//stringTesting('375299999999');
//stringTesting('8-044-444-44-44');
//stringTesting('8033-6666666');

//Task 3
//1
function searchVowels(str) {
  var matched = str.match(/[aeiouyаеёиоуыэюя]/gi);
  return matched ? matched.length : 0;
}
searchVowels('A person can fall in love quickly.');
//2
function searchVowels(str) {
  var matched = str.replace(/[^aeiouyаеёиоуыэюя]/gi, '');
  return matched ? matched.length : 0;
}
searchVowels('A person can fall in love quickly.');
