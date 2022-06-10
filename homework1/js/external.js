const name = "Andrew";
if (typeof name === "string") {
    console.log("Hello " + name)
} else {
    console.log('Ошибка, не тот тип данных')
}

console.log(typeof 75); //"number"
console.log(typeof 22321444n); //"bigint"
console.log(typeof 'String'); //"string"
console.log(typeof false); //"boolean"
console.log(typeof null); //"object"
console.log(typeof undefined); //"undefined"
console.log("symbol"); //"symbol"
