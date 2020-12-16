var button = document.getElementById('button');
var inputX = document.getElementsByTagName('input')[0];
var inputY = document.getElementsByTagName('input')[1];
var textX = document.getElementsByTagName('input')[0].value;
var textY = document.getElementsByTagName('input')[1].value;
var flag = true;

inputX.addEventListener('keyup', function () {
  if (
    document.getElementsByTagName('input')[0].value != '' &&
    document.getElementsByTagName('input')[1].value != ''
  ) {
    document.getElementById('button').disabled = false;
  } else {
    document.getElementById('button').disabled = true;
  }
});
inputY.addEventListener('keyup', function () {
  if (
    document.getElementsByTagName('input')[0].value != '' &&
    document.getElementsByTagName('input')[1].value != ''
  ) {
    document.getElementById('button').disabled = false;
  } else {
    document.getElementById('button').disabled = true;
  }
});
button.addEventListener('click', function () {
  if (
    +inputX.value >= 1 &&
    +inputX.value <= 10 &&
    inputX.value != null &&
    (+inputX.value ^ 0) === +inputX.value
  ) {
    console.log('все ок');
    var X = +inputX.value;
  } else {
    alert('Введите корректное число в поле X от 1 до 10');
    document.getElementById('button').disabled = true;
    document.getElementsByTagName('input')[0].value = '';
  }
  if (
    +inputY.value >= 1 &&
    +inputY.value <= 10 &&
    inputY.value != null &&
    (+inputY.value ^ 0) === +inputY.value
  ) {
    console.log('все ок');
    var Y = +inputY.value;
  } else if (inputY.value == '') {
    document.getElementById('button').disabled = true;
  } else {
    alert('Введите корректное число в поле Y от 1 до 10');
    document.getElementById('button').disabled = true;
    document.getElementsByTagName('input')[1].value = '';
  }
});

button.addEventListener('click', function () {
  var table = document.createElement('table');
  document.body.append(table);

  for (var y = 0; y < document.getElementsByTagName('input')[1].value; y++) {
    var trNew = document.createElement('tr');

    table.append(trNew);
    for (var x = 0; x < document.getElementsByTagName('input')[0].value; x++) {
      if (x == 0 && document.getElementsByTagName('input')[0].value % 2 == 0) {
        flag = !flag;
      }
      var tdNew = document.createElement('td');
      if (flag) {
        tdNew.className = '';
      } else {
        tdNew.className = 'black';
      }
      trNew.append(tdNew);
      flag = !flag;
    }
  }
  document.getElementsByTagName('table')[0];
  tdNew2 = document.getElementsByTagName('td');

  table.style.cssText =
    'border-collapse: collapse;margin: 40px auto;border: 1px solid black;';

  table.addEventListener('click', function (event) {
    var target = event.target;
    for (var i = 0; i < tdNew2.length; i++) {
      tdNew2[i].classList.toggle('black');
    }
  });
  if ((newTable = document.getElementsByTagName('table')[1])) {
    document.getElementsByTagName('table')[0].remove();
    document.getElementById('button').disabled = true;
    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('input')[1].value = '';
  }
});
