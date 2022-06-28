// task1
function bindFunc(someFunc, ctx, ...args) {
    return function () {
        someFunc.apply(ctx, args);
    };
}

function helloWorld(a, b, c) {
    console.log(this.name);
    console.log(a, b, c);
}
const returnedFunction = bindFunc(helloWorld, {
    name: "Vitalii"
}, 1, 2, 3);
returnedFunction();

//task2
const func = function () {
    return Object.values(this).reduce((a, b) => a + b, 0);
}

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

func.call(obj);

//task3
function getNewArray() {
    const filteredValues = this.values.filter(function (number) {
        return number > 2 && number < 10 && typeof number == "number" ?
            true :
            false;
    });
    return filteredValues;
}
const valObject0 = {
    values: [1, "2", 4, "8", 3, 10, null, false],
};
const result = getNewArray.call(valObject0);
console.log(result);

//task4
const citiesAndCountries = {
    "Киев": "Украина",
    "Нью-Йорк": "США",
    "Амстердам": "Нидерланды",
    "Берлин": "Германия",
    "Париж": "Франция",
    "Лиссабон": "Португалия",
    "Вена": "Австрия",
};

function getCities() {
    let cities = Object.entries(this)
    let res = cities.map(([key, val] = entry) => {
        return `${key} -это ${val}`;
    });
    return res;
}

const funcRes = getCities.call(citiesAndCountries);
console.log(funcRes);


//task5
function getNameOfDay(lang, datNumber) {
    const namesOfDays = {
        ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    };

    const translatedWeekdays = namesOfDays[lang];
    const dayOfWeek = translatedWeekdays[datNumber - 1];

    return dayOfWeek;
}

let russianDay = getNameOfDay("ru", 1);
let englishDay = getNameOfDay("en", 7);

console.log(russianDay);
console.log(englishDay);

//task6
const personUser = {
    name: "Vitalii"
};
const personAge = {
    age: 1
};

function setProto(currentObj, protoObj) {
    Object.setPrototypeOf(personAge, protoObj)
}

console.log("before");
console.log(personAge);
console.log(Object.getPrototypeOf(personAge));
console.log(personAge.name);

setProto(personAge, personUser);

console.log("after");
console.log(personAge);
console.log(Object.getPrototypeOf(personAge));
console.log(personAge.name);

// task7
const person = {
    name: "",
    age: 0,

    setName: function (name) {
        this.name = name;
    },

    setAge: function (value) {
        const ageAfterValidation = this.ageValidation(value);
        this.age = ageAfterValidation;
    },

    getName: function () {
        return this.name;
    },

    getAge: function () {
        return this.age;
    },

    ageValidation: function (value) {
        if (parseInt(value) >= 18) {
            return value;
        } else {
            return "Validation Error"
        }
    },
};

const person1 = Object.create(person);

console.log(person1);
person1.setName("Vitalii");

console.log(person1);

person1.setAge(26);
console.log(person1);

console.log(person1.getName());
console.log(person1.getAge());

person1.setAge("sss");
console.log(person1.getAge());