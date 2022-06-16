function task1(number) {
  let currNum = 1;
  let sum = 0;
  while (currNum <= number) {
    sum += currNum ** 2;
    currNum += 1;
  }
  return sum;
}
console.log(task1(4));

let arr = [3, 5, 12, 9, 23, 93, 17];

function task2(arr) {
  let arrayNum = arr.filter(n => n > 2 && n < 20);
  console.log(arrayNum);
  let sum = arrayNum.reduce((result, num) => {
    return result + num;
  });
  return sum;
}
console.log(task2(arr));

function isEven(number) {
  return number % 2 == 0;
}

function calculateEven(numberArray) {
  return numberArray.filter(isEven).length;
}

function calculateEvenFromAllArrays(arrayOfArrays) {
  let = numberOfEven = 0;
  for (numberArray of arrayOfArrays) {
    numberOfEven += calculateEven(numberArray);
  }
  return numberOfEven;
}
let test = calculateEvenFromAllArrays([
  [1, 6, 3, '6'],
  [10, 15, 13, '10']
]);
console.log(test);

function task4(key, value, obj) {
  if (obj.hasOwnProperty(key)) {
    console.log("Ключ уже есть")
  } else {
    obj[key] = value;
  }
}
let person = {
  name: "Vitalii"
};
task4("age", 26, person);
task4("age", 32, person);

function task5() {
  let i = 1;
  while (i <= 10) {
    if (i % 3 == 0) {
      console.log("FizBuz");
    } else if (i % 2 == 0) {
      console.log("Fiz");
    } else {
      console.log("Buz")
    }
    i += 1;
  }
}
task5();

function task6(number) {
  if (number == 1 || number == 0) {
    return 1;
  }
  let sum = number;
  number -= 1;
  while (number > 0) {
    sum = sum * number;
    number -= 1;
  }
  return sum;
}
console.log(task6(7));

function task7(size, weekConsumption, weeks) {
  let totalConsumption = weekConsumption * weeks;
  let totalQuantity = totalConsumption / size;
  return Math.ceil(totalQuantity);
}
console.log(task7(500, 1200, 8));