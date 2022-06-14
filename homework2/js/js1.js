let veg = ["Капуста", "Репа", "Редиска", "Морковка"];
console.log(veg.join("|"));

let names = "Вася, Петя, Вова, Олег";
let arr = names.split(', ')
console.log(arr);

let name = "Василий";
function hello2(name) {
    if (!name) name = "гость";
    console.log("Привет, " + name + ".");
}
hello2(name);

const fruits = ["яблоко", "ананас", "груша"];
const fruitsupper = fruits.map(element => {
    return element.toUpperCase();
});
console.log(fruitsupper);

function plusNumber(array) {
    let plus = array.map(function (num) {
        return num + 1;
    });
    console.log(plus);
}

let num = [1, 2, 3, 4];
plusNumber(num);

function add() {
    let sum = 0;
    for (argument of arguments) {
      if (typeof argument == 'number') {
        sum += argument;
      }
    }
    return sum;
}
console.log(add(1, 2, 3, 4));

const onlynum = [1, "hello", 2, 3, 4, "5", "6", 7, null];
console.log(onlynum);
console.log((onlynum.filter(function (item)  {
    return  typeof item === "number"
  })));


function arrayTest(element) {
        return element === true;
        }
  let haveTrueValue = [0, 3, null, 1, true];
  let dontHaveTrueValue = [0, false, null, "str"];
  console.log(haveTrueValue.some(arrayTest));
