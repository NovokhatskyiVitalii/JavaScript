//task1
const img = document.querySelector("#img-js");
const clickP = document.querySelector("#click-element");

function showImg() {
    img.classList.remove("hidden");
}

function hideImg() {
    img.classList.add("hidden");
}

function imgMakeBigger() {
    img.classList.add("bigger");
}

function imgMakeSmaller() {
    img.classList.remove("bigger");
}

clickP.addEventListener('click', () => {
    showImg();
})

img.addEventListener('click', () => {
    hideImg();
    imgMakeSmaller();
})

img.addEventListener('mouseover', () => {
    imgMakeBigger();
})

//task2
function getIndexOfNull(numbers) {
    for (const [i, num] of numbers.entries()) {
        if (num === 0) {
            return i;
        }
    }
    return 0;
}

function getSumAfterIndex(numbers, pos) {
    let sum = 0;
    for (let i = pos; i < numbers.length; i = i + 1) {
        sum = sum + numbers[i];
    }
    return sum;
}

function task2(numbers) {
    let pos = getIndexOfNull(numbers);
    let sum = getSumAfterIndex(numbers, pos);
    console.log(`Сумма чисел после нуля: ${sum}`);
}

task2([1, 2, 3, 0, 4, 5, 6]);

//task3
function task3(numbers) {
    let qty = 0;
    let sum = 0;

    for (num of numbers) {
        qty = qty + 1;
        sum = sum + num;
        if (sum > 10) {
            break;
        }
    }
    if (sum <= 10) {
        qty = 0;
    }
    console.log(`Количество чисел: ${qty}`);
}

task3([1, 2, 3, 2, 6, 3, 3]);

//task4
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log(input.value);
})

//task5
let allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
        if (!link.classList.contains("mark")) {
            link.innerHTML += `(${link.href})`;
            link.classList.add("mark");
        }
    })
})

//task6

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    btn2.style.display = "none";
})

//task7
let task7Input = document.querySelector("#task7-input");
let task7Button = document.querySelector("#task7-button");
let task7Circle = document.querySelector(".circle");

function moveCircle(number) {
    let currentLeft = Number.parseInt(task7Circle.style.left) || 0;
    let newLeft = currentLeft + Number.parseInt(number);
    if (newLeft > 600 || newLeft < 0) {
        task7Input.value = "Error";
    } else {
        task7Circle.style.left = `${newLeft}px`;
    }
}

task7Button.addEventListener("click", () => {
    if (isNaN(task7Input.value)) {
        task7Input.value = ""
        return;
    }

    moveCircle(task7Input.value);
})

//task8

function logDataAttr(event){
   let btn = event.currentTarget;
   let qty = Object.keys(btn.dataset).length;

   console.log(`У этого элемента ${qty} дата аттрибутов`);


   for (const [key, value] of Object.entries(btn.dataset)){
    console.log(`Аттрибут ${key} - ${value}`);
   }
}
