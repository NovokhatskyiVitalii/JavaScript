//task1
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


let list = document.querySelector("ul");
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);


function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    setTimeout(() => li.style.opacity = 1);
    if (inputValue === "") {
        alert("Вы должны что-нибудь написать!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//task2
function recursionSum(num) {
    if (num > 0) {
        return num + recursionSum(num - 1);
    } else {
        return num;
    }
}
console.log(`Сумма натуральных чисел = ${recursionSum(5)}`);

function loopSum(numberSum) {
    let sum = 0;
    for (let i = 1; i <= numberSum; i++) {
        sum += i;
    }
    return sum;
}

console.log(`Сумма натуральных чисел = ${loopSum(5)}`);

//task3
function printNumbers(from, to) {
    let stream = from;

    let timerId = setInterval(function () {
        console.log(stream);
        if (stream == to) {
            clearInterval(timerId);
        }
        stream++;
    }, 1000);
}

printNumbers(0, 0);

function printNumbers(from, to) {
    let stream = from;

    setTimeout(function go() {
        console.log(stream);
        if (stream < to) {
            setTimeout(go, 1000);
        }
        stream++;
    }, 1000);
}

printNumbers(0, 0);

//task4
let seconds = 0;

function printTime() {
    seconds++;
    console.log("Прошло: " + seconds);

    if (seconds === 5) {
        console.log("Прошло 5 секунд!")
        clearInterval(interval);
    }

}

const interval = setInterval(printTime, 1000);
