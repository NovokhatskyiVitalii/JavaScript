//task1
const number = [1, 1, 2, 2, 3];
const getUnique = [...new Set(number)]
 
console.log(getUnique);

//task2
const myObj = {
    a: 1,
    b: 2,
    c: 3,
    d: false,
    e: 0
};

function getKeySum(obj) {
    return Object.keys(obj).reduce((getKeySum, key) => getKeySum + parseFloat(obj[key] || 0), 0);
}

console.log(getKeySum(myObj));

function reversKey(obj) {
    const res = {};
    Object.keys(obj).forEach(function (value) {
        var key = obj[value];
        res[key] = value;
    });
    return res;
};

console.log(reversKey(myObj));

//task3
let holder = document.querySelector('.holder')

for (let i = 1; i <= 5; i++) {
	let div = document.createElement('div');
    div.className = "item"
	div.innerHTML = i;
	holder.append(div);
}

let itemClasses = document.querySelectorAll('.item');

let item1 = itemClasses[0];
item1.style.background = 'crimson';
item1.style.width = '50%';
item1.style.order = '-2';

let item2 = itemClasses[1];
item2.style.background = 'slateblue';
item2.style.width = '33.3%';

let item3 = itemClasses[2];
item3.style.background = 'purple';
item3.style.width = '33.3%';
item3.style.order = '-1';

let item4 = itemClasses[3];
item4.style.background = 'green';
item4.style.width = '33.4%';

let item5 = itemClasses[4];
item5.style.background = 'orange';
item5.style.width = '50%';
item5.style.order = '-2';



