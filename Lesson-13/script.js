var tbody = document.getElementsByTagName('tbody')[0];
var elemB = document.getElementById('bolder');
var myElement = document.getElementsByTagName('tr')[0];
var tdElement = document.getElementsByTagName('td')[0];
var inputElement = document.getElementsByTagName('input')[0];

tbody.addEventListener('click', function (event) {
  if (event.target == elemB) {
    var myNewElement = document.createElement('tr');
    var myElement = document.getElementsByTagName('tr')[0];
    myNewElement.innerHTML = '<td></td><td></td><td></td>';
    tbody.insertBefore(myNewElement, myElement);
    console.log(myNewElement);
  } else {
    var tdElement = event.target;
    var text = tdElement.textContent;
    
    tdElement.innerHTML = '<input type="text" maxlength="15" value = ' + text + ' >';
    inputElement = document.getElementsByTagName('input')[0];
    inputElement.value += text;
    tdElement.firstElementChild.focus();
    
    inputElement.addEventListener("focusout", function() {
      tdElement.textContent = inputElement.value;
      inputElement.remove();
  });   
 };
  
});
