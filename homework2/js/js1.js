let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let String = vegetables.toString();
console.log(String);

let names = 'Вася, Петя, Вова, Олег';
let arr = names.split(', ')
console.log(arr);

let name = "Василий";
function hello2(name) {
    if (name === undefined) name = "гость";
    console.log("Привет, " + name + ".");
}
hello2(name);

const fruits = ['яблоко', 'ананас', 'груша'];
const fruitsUpper = fruits.map(element => {
    return element.toUpperCase();
});
console.log(fruitsUpper);

let num = [1, 2, 3, 4];
plusNumber(num);
function plusNumber(array) {
    let plus = array.map(function (num) {
        return num + 1;
    });
    console.log(plus);
}

function add(x, y, z, w) {
    return x + y + z + w;
}
console.log(add(1, 2, 3, 4));

const onlyNum = [1, "hello", 2, 3, 4, "5", "6", 7, null];
console.log(onlyNum);
console.log((onlyNum.filter(item => typeof item === "number")));

let haveTrueValue = arrayTest([0, false, null, 1, true]);
function arrayTest(myArray){
    for(const element of myArray){
        if(element === true ){
            return "Нашли true значение";
        }
    }
    return "Ничего нет";
}
console.log(haveTrueValue);
