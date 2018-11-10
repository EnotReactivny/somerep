/**
 * Операторы JS
 */
let x = 1;
x = -x; //Унарный минус
console.log(x);

x = x + 1;  //полная запись инкремента
console.log(x);
x++;
console.log(x);
++x;
console.log(x);
console.log(x++);

x++;
console.log(x);

let a = 1;
a = a * 5 + 6 / 1;
a = a * (5 + 6) / 1;
a = ++a * (5 + 6) / 2;

x = x - 1;  //полная запись декремента
x--;    //краткая запись
--x; 

/**
 * Операторы сравнения
 */
//== != === !==
console.log(1 == "1");
console.log(1 === "1");
console.log(1 == "1а");
console.log(1 != "1");
console.log(1 !== 2);

//Логическое И - && (Конъюнкция)
console.log((1 == 2) && (2 != 3));
//            false       true

//Логическое ИЛИ - || (Дизъюнкция)
console.log((1 == 2) || (2 != 3));

/**

    A   B   ||
    0   0   0
    1   0   1
    0   1   1
    1   1   1

 */
console.log("*** NULL и UNDEFINED");
console.log(null == undefined);
console.log(null == 0);
console.log(null === undefined);

/**
 * Конструкция if-else
 */
let speed = +prompt("Лимит скорости на данном участке 50. Ваша текущая скорость:", 100); 

//parseInt(speed);

if ((speed > 50) && (speed <= 70)) {
    console.log("Скорость в пределах допустимого");
} else if ((speed > 70) && (speed <= 90)) {
    console.log("Скорость превышена. Штраф 100 рублей");
} else if (speed > 90) {
    console.log("Скорость сильно превышена. Штраф 500");
} else {
    console.log("Нормальная скорость!");
}

//Оператор switch

let status = "в сети";
if (status == 'отсутствует') {
    console.log("Посетителя нет");
} else if (status == 'в сети') {
    console.log("Посетитель онлайн");
} else if (status == 'в коммандировке') {
    console.log("Посетитель уехал далеко");
} else if (status == 'в метро') {
    console.log("Посетитель едет под землей");
} else if (status == 'в море') {
    console.log("Посетитель едет по морю");
} else {
    console.log("Статус не известен");
}
//===
switch (status) {
    case "отсутствует":
        console.log("Посетителя нет");
        break;
    case "в сети":
        console.log("Посетитель онлайн");
        break;
    case "в коммандировке":
        console.log("Посетитель уехал далеко");
        break;
    case "в метро":
        console.log("Посетитель едет под землей");
        break;
    case "в море":
        console.log("Посетитель едет по морю");
        break;
    default:
        console.log("Статус не известен");
}

/**
 * Тернарный оператор
 */

 let nowSpeedCheck = (speed > 70) ? "Да, больше" : "Нет, не больше";
 console.log(nowSpeedCheck);

 let speed2 = 120;
 let speed3 = 150;

 /**
  * Функции
  */
function testSpeedCheck(snumber = 20) {
    if ((snumber > 50) && (snumber <= 70)) {
        console.log("Скорость " + snumber + " в пределах допустимого");
    } else if ((snumber > 70) && (snumber <= 90)) {
        console.log("Скорость " + snumber + " превышена. Штраф 100 рублей");
    } else if (snumber > 90) {
        console.log("Скорость " + snumber + " сильно превышена. Штраф 500");
    } else {
        console.log("Нормальная скорость " + snumber + " !");
    }
 }

 testSpeedCheck();
 testSpeedCheck(speed);
 testSpeedCheck(speed2);
 testSpeedCheck(speed3);


/*if ((speed > 50) && (speed <= 70)) {
    console.log("Скорость " + speed + " в пределах допустимого");
} else if ((speed > 70) && (speed <= 90)) {
    console.log("Скорость " + speed + " превышена. Штраф 100 рублей");
} else if (speed > 90) {
    console.log("Скорость " + speed + " сильно превышена. Штраф 500");
} else {
    console.log("Нормальная скорость " + speed + " !");
}

if ((speed2 > 50) && (speed2 <= 70)) {
    console.log("Скорость " + speed2 + " в пределах допустимого");
} else if ((speed2 > 70) && (speed2 <= 90)) {
    console.log("Скорость " + speed2 + " превышена. Штраф 100 рублей");
} else if (speed2 > 90) {
    console.log("Скорость " + speed2 + " сильно превышена. Штраф 500");
} else {
    console.log("Нормальная скорость " + speed2 + " !");
}

if ((speed3 > 50) && (speed3 <= 70)) {
    console.log("Скорость " + speed3 + " в пределах допустимого");
} else if ((speed3 > 70) && (speed3 <= 90)) {
    console.log("Скорость " + speed3 + " превышена. Штраф 100 рублей");
} else if (speed3 > 90) {
    console.log("Скорость " + speed3 + " сильно превышена. Штраф 500");
} else {
    console.log("Нормальная скорость " + speed3 + " !");
}*/

/**
 * Рекурсия
 */

 function askCamera(carsCounterNarushitel = 0) {
     let nowSpeed = +prompt("Лимит скорости на данном участке 50. Текущая скорость:", 50);
     if (nowSpeed > 50) {
        carsCounterNarushitel = askCamera(carsCounterNarushitel + 1);
     } 
     return carsCounterNarushitel;
 }

 alert("Количество нарушителей до появления не нарушителя: " + askCamera());

 /**
  * nowSpeed                60  70  40
  * carsCounterNarushitel   0   1   2
  */