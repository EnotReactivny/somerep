/**
 * Домашнее задание №4
 */

 //Задание 1

/*
let number = parseInt(prompt('Введите число от 0 до 999:', ''));

while (isNaN(number) || number < 0 || number > 999) {
    alert("Вы ввели некорректные данные. Нам нужно число от 0 до 999");
    number = parseInt(prompt('Введите число от 0 до 999:', ''));
}

function getObjectFromNumber(number) {
    let object = {};

    object["единицы"] = number % 10;
    object["десятки"] = Math.floor(number / 10) % 10;
    object["сотни"] = Math.floor(number / 100) % 10;

    return object;
}

console.log(getObjectFromNumber(number));
*/

//Задание 2
/*
let good = {
    id: 0,
    name:   "Name",
    img:    "url",
    description:    "Описание",
    price:  1999
}

let basket = {
    goods: [],
    addGood: function(good) {

    },
    countGood: function() {

    },
    outGoods: function() {

    }
}
*/

/**
 * DOM - модель
 */

console.log("***getElementById***");
let mainHead = document.getElementById("mainHead");
console.log(mainHead);
mainHead.innerHTML = "Сегодняшний урок #5";

let testNull = document.getElementById("testId");
console.log(testNull);

console.log("***getElementsByClassName***");
let paragraphs = document.getElementsByClassName("btext");
console.log(paragraphs);
console.log("Нулевой элемент с классом  btext", paragraphs[0]);

paragraphs[0].innerHTML = "Содержимое изменилось координально!";

console.log("***getElementsByTagName***");
let allLi = document.getElementsByTagName("li");
console.log(allLi);

let textParagraphs = document.getElementsByClassName("textParagraphs");
let inDivLi = textParagraphs[0].getElementsByTagName("li");
console.log(inDivLi);

for (let i = 0; i < inDivLi.length; i++) {
    let inp = inDivLi[i];
    console.log(i + ": " + inp.outerText);
}

console.log("***querySelectorAll***");

let firstLis = document.querySelectorAll("ul > li:first-child");
console.log(firstLis);

let firstDiv = document.querySelector("div");
console.log(firstDiv);

//Метод onload
function init() {
    let content = document.querySelector("#mainHead");
    content.innerHTML = "Еще более новая информация о уроке!";
}
window.onload = init;

//Создавать элемент на странице
let div = document.createElement("div");
div.innerHTML = "<h2>Подзаголовок 2</h2>";
div.className = "my_new_div";

let parentDesc = document.getElementsByClassName("desc")[0];
parentDesc.appendChild(div);

let newLi = document.createElement("li");
newLi.innerHTML = "Привет, мир!";
let lastUl = document.querySelectorAll("body ul:last-child")[0];
lastUl.insertBefore(newLi, lastUl.children[0]);

//Атрибуты
setTimeout(changeTitle, 1000);
function changeTitle() {
    mainHead.setAttribute("title", "Привет!");
    mainHead.style.color = "red";
    mainHead.style.borderLeft = "2px solid #CCC";
    mainHead.style.paddingLeft = "20px";
    mainHead.innerText = "Добавился тайтл!";
    console.log(mainHead.getAttribute("title"));
}