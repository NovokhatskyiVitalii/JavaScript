// reusable functions
function getCookie(key) {
  const cookiesInArray = document.cookie.split("; ");
  let targetCookie = cookiesInArray.find((cookie) => {
    return cookie.startsWith(key);
  });

  if (targetCookie) {
    targetCookie = targetCookie.split("=")[1];
  }
  return targetCookie;
}

//task1
let nameElement = document.getElementById('name');
let ageElement = document.getElementById('age');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let name = nameElement.value;
  let age = ageElement.value;

  document.cookie = `name=${name}`;
  document.cookie = `age=${age}`;
})

let currentName = getCookie('name');
if (!currentName) {
  document.cookie = "name=Vitalii";
  nameElement.value = 'Vitalii';
} else {
  nameElement.value = currentName;
}

let currentAge = getCookie('age');
if (!currentAge) {
  document.cookie = "age=26";
  ageElement.value = '26';
} else {
  ageElement.value = currentAge;
}


//task2
const dateHandler = (e) => {
  document.cookie = `birthdayDate=${e.target.value}`;
  checkCookie();
};

const checkCookie = () => {
  const value = getCookie('birthdayDate');
  if (value) {
    result.style.display = "block";
    date.style.display = "none";
    date.removeEventListener("change", dateHandler);
    dateTimerStart();
  } else {
    date.style.display = "inline";
    date.addEventListener("change", dateHandler);
  }
};

checkCookie();

function dateTimerStart() {
  const cookie = getCookie('birthdayDate');
  const currentYear = new Date().getFullYear();
  const nowTime = Date.now();
  const nextBirthday = new Date(cookie);
  nextBirthday.setFullYear(currentYear);
  if (nowTime > nextBirthday.getTime()) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  setInterval(() => {
    const now = Date.now();
    const diff = Math.floor((nextBirthday.getTime() - now) / 1000);
    const days = Math.floor(diff / (60 * 60 * 24));
    const hours =
      Math.floor(diff / (60 * 60)) -
      days * 24 +
      new Date().getTimezoneOffset() / 60;

    const minutes =
      Math.floor(diff / 60) -
      days * 24 * 60 +
      new Date().getTimezoneOffset() -
      hours * 60;

    const seconds =
      diff -
      days * 24 * 60 * 60 +
      new Date().getTimezoneOffset() * 60 -
      (minutes + hours * 60) * 60;

    result.innerText = `Days to birthday: ${days}, Hours to birthday: ${hours}, Minutes: ${minutes}, seconds: ${seconds}`;
  }, 1000);
}

//task3

let textElement = document.getElementById('textarea');
let btnAreaElement = document.getElementById('btn-area');

btnAreaElement.addEventListener('click', () => {
  let text = textElement.value;
  localStorage.setItem('savetextarea', text);
})

let areaText = localStorage.getItem('savetextarea');
textElement.value = areaText;

//task4
let arr =  [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b',);
arr.splice(6, 0, 'c',);
arr.splice(8, 0, 'e')
console.log(arr);