/*let a = 3;
switch(a){
	case 1:
		console.log("1");
	case 2:
		console.log("2");
	case 3:
		console.log("3");
	case 4:
		console.log("4");
    case 5:
		console.log("5");
    case 6:
		console.log("6");
}*/

/*let val = 2,
    pow = 10;

function power(val, pow) {
    if (pow == 0) {
        return 1;
    }
    if (pow < 0) {
        return power(1 / val, -pow);
    }
    if (pow != 1) {
        return val *= power(val, --pow);
    } else {
        return val;
    }
}
*/

/**
 * val = 2; pow = 3;
 * 
 */

/**
 * Цикл while
 */
console.log("***Цикл while***");

let n = 5,
    i = 1;

while (i <= n) {
    console.log(i);
    i++;
}

/**
 * Цикл do..while
 */
console.log("***Цикл do..while***");

n = 5;
i = 1;

do {
    console.log(i++);
} while (i <= n);

/**
 * Цикл for
 */
console.log("***Цикл for***");

for (let count = 1; count <= 5; count++) {
    console.log(count);
}

/**
 * Цикл for/in
 */
console.log("***Цикл for/in***");

let obj = {
    car:    "Audi",
    maxspeed:   "300km/h"
}

for (let i in obj) {
    console.log(obj[i]);
}

/**
 * Бесконечный цикл и break
 */
console.log("***Бесконечный цикл и break***");

n = 5;
i = 1;

while (true) {
    console.log(i++);
    if (i > n) {
        break;
    }
}

/**
 * Бесконечный цикл и continue
 */
console.log("***Бесконечный цикл и continue***");

n = 5;
i = 1;

while (true) {
    if (i == 3) {
        i++;
        continue;
    }
    console.log(i++);
    if (i > n) {
        break;
    }
}

/**
 * Массивы
 */
console.log("***Массивы***");

let posts = [2, 3, 4, 5, 7, 9];
let cards = new Array(5, 10, 30, true, "text", new Array(1, 2, 6));

console.log(posts);
console.log(cards);

//Чтение элемента массива
console.log(cards[4]);
console.log("Длина массива:", cards.length);

//Добавление элемента массива
cards.push("one", 2);
console.log("Push:", cards);
cards.unshift("three", 4, 5);
console.log("Unshift:", cards);

//Переопределние/обновление элементов массива
cards[2] = "Changing";
console.log("Changing:", cards);

//Удаление элемента
cards.pop();
console.log("Pop:", cards);
cards.shift();
console.log("Shift:", cards);
delete cards[3];
console.log("Delete:", cards);

//Чтение элемента массива из подмассива
console.log(cards[7][1]);

//Циклы и массивы
for (let i = 0; i < cards.length; i++) {
    console.log("Index:", i, "Value:", cards[i]);
}

console.log("***forEach***");
cards.forEach(function(value, index, array) {
    console.log("Index:", index, "Item:", value);
});

/*for (.............) {
    //НИЧЕГО
}*/