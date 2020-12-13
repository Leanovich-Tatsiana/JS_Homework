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
var elemBa = secondPar.children[0];
var elemBb = secondPar.children[1];
for (var i = 0; i < elemA.length; i++) {
  elemA[i].classList.add('classA');
}

elemButton.addEventListener('click', function colorElem() {
  for (var i of elemA) {
    i.style.cssText = 'color:red ; font-weight:bolder;';
  }
});
secondPar.onclick = function () {
  if (event.target == elemBa) {
    event.preventDefault();
    var hrefEvent = event.target.getAttribute('href');
    //alert(hrefEvent);

    if (localStorage["Link 3"]== undefined) {
      alert('Информации о ссылке сохранена');
      localStorage.setItem(
        'Link 3',
        JSON.stringify({ path: 'http://google.by' })
      );

      var hrefEvent2 = event.target.setAttribute('href', '#'); 
    } else {
      alert('http://google.by');
    };
  };
  if (event.target == elemBb){
    if(localStorage["Link 4"]== undefined) {
      alert('Информации о ссылке сохранена');
      localStorage.setItem(
        'Link 4',
        JSON.stringify({ path: 'https://vk.com'} )
      );
      var hrefEvent2 = event.target.setAttribute('href', '#');
    }else  {
      alert('https://vk.com');
    }

    
  }
};

window.localStorage.clear();

