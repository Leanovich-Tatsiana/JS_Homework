//Задание 1:

var names = ['Vasya', 'Vitya', 'Tanya'];

var result = names.map(function (name) {
  return { name: name };
});

console.log(result);

//Задание 2:

var arr = ['00', '13', '24'];

var arr2 = arr.reduce(function (prev, item) {
  return prev + ' : ' + item;
}, 'Текущее время');
console.log(arr2);

//Задание 3:

function words(str) {
  var strArr = str.toLowerCase().split('');
  var strA = 'аеёиоуыэюя';
  var r = strArr.reduce(function (sum, val) {
    if (strA.indexOf(val) >= 0) {
      sum++;
    }
    return sum;
  }, 0);
  return r;
}

console.log(words('привет всем '));

//Задание 4:
function countSentencesLetters(text) {
  var textArr = text.split(/[!?.]/).filter(function (item) {
    return item.length > 0;
  });
  textArr.forEach(function (element, i) {
    var Letters = textArr[i]
      .trim()
      .replace(' ', '')
      .replace(' ', '')
      .split(',')
      .join('').length;
    console.log(textArr[i] + ':' + Letters);
  });
}
console.log(
  countSentencesLetters('Привет, студент! Студент... Как дела, студент?')
);
// Привет, студент: Letters quantity is: 13
// Студент: Letters quantity is: 7
// Как дела, студент: Letters quantity is: 14
