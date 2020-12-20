var container = document.getElementById('container');

var firstPar = document.createElement('p'),
  secondPar = document.createElement('p');

firstPar.innerHTML =
  'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML =
  'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);
var elemButton = document.getElementsByTagName('button')[0];
var elemA = firstPar.children;
var elemB = secondPar.children;

elemButton.onclick = function () {
  for (var i of elemA) {
    i.classList.toggle('red')
  }
};

secondPar.addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.tagName == 'A'){
    var key = event.target.textContent;
    var value = event.target.getAttribute('href');
  
      if (event.target.getAttribute('href') !== '#') {
            localStorage.setItem(key, JSON.stringify({path: value}));
            event.target.setAttribute('href', '#');
            alert('Ссылка была сохранена');
        }else {
            for (var i = 0; i < localStorage.length; i++) {
                if (key === localStorage.key(i)) {
                  var  keyStorage = localStorage.key(i);
                  valueStorage = JSON.parse(localStorage.getItem(localStorage.key(i))).path;
                  alert(valueStorage);
                }
            }  
        }
  }
  
  
}, false);
window.localStorage.clear();

