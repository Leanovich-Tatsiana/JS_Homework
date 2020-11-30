//Задание 1:
function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
  };
  
  Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
  };
  
  Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();
  
    if (amount < 50 || amount > 500) {
      return 'Недопустимое количество корма.';
    }
  
    this._foodAmount = amount;
  };
  
  Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
  };
  
  function Cat(name) {
     Animal.apply(this,arguments);
  
  }
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.constructor = Cat;
  
  Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this,arguments)
      console.log('Кот доволен ^_^');
      return this;
    };
  Cat.prototype.stroke = function () {
      console.log('Гладим кота.');
      return this;
    };
  
  var barsik = new Cat('Барсик');
  
  console.log(barsik.name);
  
  console.log(barsik.dailyNorm());
  console.log(barsik.feed());
  
  console.log(barsik.dailyNorm(600));
  console.log(barsik.feed());
  
  console.log(barsik.dailyNorm(250));
  console.log(barsik.feed());
  console.log(barsik.stroke());
  barsik.feed().stroke();
  
  barsik = null;

  //Задание 2:

  function copy(obj) {
    var result, value, key;
    result = Array.isArray(obj) ? [] : {};
    for (key in obj) {
        value = obj[key];
        result[key] = (typeof value === "object" && value!== null) ? copy(value) : value;
    }
    return result;
 }
 var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = copy(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

 //Задание 3: 
var a = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var b = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};


function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
 
    if (a == null && typeof(a) != "object" &&
        b == null && typeof(b) != "object") {
    
        return false;
    }
 
    var propertiesA = 0, propertiesB = 0;
    for (var property in a) {
        propertiesA += 1;
    }
    for (var property in b) {
        propertiesB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;        
        }
    }        
    return propertiesA == propertiesB;
}

a.object.object2.array2[1].name = 'Vasya';
a.array.push(2);


console.log(deepEqual(a, b));
console.log(a);
console.log(b);
