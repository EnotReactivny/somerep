/**
 * Функция как объект
 * call, apply, bind
 */

//call
function showCar() {
    /**
     * =
     * if else
     * 
     */
    alert(this.carName + " " + this.carModel);
} 

let car = {
    carName: "Ford",
    carModel: "Mustang"
}

//showCar.call(car);

function showFullCarInfo(carName, carModel) {
    alert(this[carName] + " " + this[carModel]);
}

//showFullCarInfo.call(car, 'carName', 'carModel');

//apply
//showFullCarInfo.apply(car, ["carName", "carModel"]);

console.log(Math.max(1, 5, 6, 0, 10));

let yearsOldArray = [55, 60, 70, 100, 101, 21, 34, 55, 80, 80, 81];
//Math.max(yearsOldArray[0], yearsOldArray[1], yearsOldArray[2], ........);
console.log("Max years:", Math.max.apply(null, yearsOldArray));

//bind()
let cars = {
    item: [
        {carName: "Ford"},
        {carName: "Mazda"},
        {carName: "Lada"}
    ],
    showRandomCar: function(event) {
        console.log(this.item[Math.floor(Math.random() * 3)].carName);
    }
}

cars.showRandomCar();

//Присвоить некой переменной функцию
let randCar = cars.showRandomCar;
//randCar();
let bindedRandCar = randCar.bind(cars);
bindedRandCar();

/**
 * Анонимные функции
 */
window.onload = function() {
    //init();
    //init2();
}

function ask(quest, yes, no) {
    if (confirm(quest)) {
        yes();
    } else {
        no();
    }
}

/*ask("Вы согласны на условия лицензионного соглашения?",
    function() {
        //действия
        //сохраняем в куки и в БД
        alert("Отлично, что вы согласились!");
    },
    function() {
        //действия
        //сохраняем в куки и в БД
        alert("Жаль, но вы не сможете пользоваться нашим сервисом!");
    });*/

    /*askBut.onclick = function() {
        //какие-то действия
    }*/

/**
 * Замыкания
 */

let name = "Петя";

function newName() {
    let name = "Незарегистрированный пользователь";
    let superProperty = "";

    function clear() {
        name = "Имя не задано";
    }

    if (confirm("Хотите ввести свое имя")) {
        name = prompt("Введите свое имя", "Олег");
    } else {
        clear();
    }    
    console.log(name);
    return name;
}

newName();
console.log(name);

//Счетчики

//Программист Петр завел счетчик 
/*let count = 5;

function changeCount() {
    count++;
}
changeCount();*/

//Программист Михаил тоже хочет использовать count

function someCounter() {
    let count = 0;
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}

let doCount = someCounter();
console.log("Счетчик Михаила:", doCount());
console.log("Счетчик Михаила:", doCount());
console.log("Счетчик Михаила:", doCount());
console.log("Счетчик Михаила:", doCount());

let count = someCounter();
console.log("Счетчик Петра:", count());
console.log("Счетчик Петра:", count());
console.log("Счетчик Михаила:", doCount());
console.log("Счетчик Петра:", count());
console.log("Счетчик Михаила:", doCount());

//Задание из собеседования
function makeAdder(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    }
}

let add5 = makeAdder(5);
console.log(add5);
let sum = add5(2);  //Результат 7
console.log(sum);

console.log(makeAdder(2)(22)(9));