var elemButton = document.getElementsByTagName('button')[0];
var userTabs = document.getElementsByClassName('user-tabs')[0];
var infoBlocks = document.getElementsByClassName('info-blocks')[0];
var arr;

elemButton.onclick = function () {
  if (
    localStorage.getItem['user data'] == undefined &&
    localStorage.length === 0
  ) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.send();
    xhr.onload = function () {
      var statusType = +String(this.status)[0];

      if (statusType === 2) {
        try {
          var arr1 = JSON.parse(this.response).data;
          arr = arr1;
          //var arr = JSON.parse('Hello');
          //throw { name: 'Untypical error', message: 'Something went wrong ' };
          //throw new Error('Что-то пошло не так');
        } catch (error) {
          var newError = document.createElement('div');

          newError.classList.add('new-error');
          userTabs.appendChild(newError);
          newError.textContent = 'Что-то пошло не так ';
          elemButton.disabled = true;
        }

        console.log('After try/catch');
      }
      console.log(JSON.parse(this.response).data);
      document.getElementsByClassName('main-block')[0].hidden = false;
      localStorage.setItem('user data', JSON.stringify(arr1));
      writeUser(arr);
      console.log('я GET');
    };
  } else {
    var LS = localStorage.getItem('user data');
    var arr2 = JSON.parse(LS);

    arr = arr2;
    document.getElementsByClassName('main-block')[0].hidden = false;
    writeUser(arr);
    console.log('я localStorage');
  }
};
var userTabsN = document.querySelectorAll('user-tabs');

document
  .querySelector('.user-tabs')
  .addEventListener('click', function (event) {
    if (event.target.className === 'user-tab') {
      var dataTab = event.target.getAttribute('data-tab');
      var tab = document.querySelectorAll('.user-tab');
      for (var i = 0; i < tab.length; i++) {
        tab[i].classList.remove('user-tabA');
      }
      var infoBlocksN = document.getElementsByClassName('info-blocksA');

      for (var i = 0; i < infoBlocksN.length; i++) {
        if (dataTab == i) {
          infoBlocksN[i].hidden = false;
          tab[i].classList.add('user-tabA');
        } else {
          infoBlocksN[i].hidden = true;
        }
      }
    }
  });
function writeUser(arr) {
  if (
    userTabs.children.length == arr.length &&
    infoBlocks.children.length == arr.length
  ) {
    userTabs.children.remove;
    infoBlocks.children.remove;
  } else {
    arr.forEach(function (item, i) {
      var userTabsNew = document.createElement('div');
      var infoBlocksNew = document.createElement('div');
      userTabsNew.classList.add('user-tab');
      userTabsNew.setAttribute('data-tab', [i]);
      infoBlocksNew.classList.toggle('info-blocksA');
      userTabs.appendChild(userTabsNew);
      infoBlocks.appendChild(infoBlocksNew).hidden = true;
      if (i == 0) {
        var tabS = document.querySelectorAll('.user-tab')[0];
        infoBlocks.appendChild(infoBlocksNew).hidden = false;
        tabS.classList.toggle('user-tabA');
      }
      userTabsNew.textContent = 'User ' + [i + 1];
      infoBlocksNew.innerHTML =
        '<img src = "' +
        item.avatar +
        '">' +
        '<p>' +
        'First Name: ' +
        item.first_name +
        '<br>' +
        'Last Name: ' +
        item.last_name +
        '</p>';
    });
  }
}
