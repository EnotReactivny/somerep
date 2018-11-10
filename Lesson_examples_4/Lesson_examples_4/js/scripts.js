/**
 * Домашнее задание
 */

//Задание 1
let numStart = 1;   //Стартовое число
let numEnd = 100;   //Конечное число
let easyNumbers = "";   //Строка-накопитель

//function getEasyNumbers(numStart, numEnd)
while (numStart < numEnd) {
    let i = 2;
    while (i <= numStart) {
        if (numStart % i == 0) {
            if (numStart == i) {
                easyNumbers += " " + numStart;  //Добавил простое число в накопитель
            } 
            break;
        }
        i++;
    }
    numStart++;
}

//console.log(easyNumbers);

//Задание 4
function pyramidCreator(rows, symbol = "*") {
    let stars = symbol;
    for (let i = 1; i <= rows; i++) {
        console.log(stars);
        stars += symbol;
    }
}

//pyramidCreator(30);

/**
 * Объекты
 */

 let Factory0 = new Object();
 let Factory = {
    name:   "Наш завод",
    director:   "Иванов Иван Иванович",
    yearOfBuilding: 1970,
    workshops:   [
                    {
                        name:   "Цех плавильный",
                        numberOfWorkers:    32
                    },
                    {
                        name:   "Цех формовочный",
                        numberOfWorkers:    12
                    },
                ],
    workOrNot:  true,
    "factory location": "г. Нижневартовск"
 };    //Объект - завод

 //Обращение к свойствам объекта
 console.log(Factory.workshops);
 console.log("Количество сорудников в Плавильном цеху:", Factory.workshops[0].numberOfWorkers);

 console.log("Адрес:", Factory["factory location"]);

 //Переопределение свойств
 Factory.workOrNot = false;
 console.log(Factory.workOrNot);

 //Удаление свойства
 delete Factory.director;
 console.log(Factory.director);

 if (Factory.director === undefined) {
     console.log("Свойство отсутствует");
 } else {
    console.log("Свойство есть. Значение: ", Factory.director);
 }
 
 if ("director" in Factory) {
    console.log("Свойство отсутствует");
} else {
   console.log("Свойство есть. Значение: ", Factory.director);
}

//Хранение объектов
let FactoryFilial = Factory;    //Сделал копию
console.log(FactoryFilial);

FactoryFilial.name = "Филиал Фабрики";
console.log(Factory);

//Методы объекта
let newFactory = {
    name:   "Наш завод",
    director:   "Иванов Иван Иванович",
    yearOfBuilding: 1970,
    workshops:   [
                    {
                        name:   "Цех плавильный",
                        numberOfWorkers:    32
                    },
                    {
                        name:   "Цех формовочный",
                        numberOfWorkers:    12
                    },
                ],
    workOrNot:  true,
    power:  2000,   //Полная мощность завода
    nowPowerReserved:   300,    //На данный момент зарезервированная мощность
    "factory location": "г. Нижневартовск",
    powerReserve:   function(inputPower) {
        if (this.power >= (this.nowPowerReserved + inputPower)) {
            this.nowPowerReserved += inputPower;
            console.log("Мощность зарезервирована");
        } else {
            console.log("Можем выделить только: " + (this.power - this.nowPowerReserved));
        }
        
    },
    powerReserveCancel:   function(inputPower) {
        if ((this.nowPowerReserved - inputPower) <= 0) {
            console.log("Все мощности свободны!");
        } else {
            this.nowPowerReserved -= inputPower;
            console.log("Заказ отменили. Завод загружен на следующую мощность: " + this.nowPowerReserved);
        }        
    }
 };    //Объект - завод

newFactory.powerReserve(1000);  //1ый заказ
newFactory.powerReserve(1000);  //2ой заказ 
newFactory.powerReserveCancel(500);  //Отмена заказа

//Перебор значений объекта
console.log("***for...in***");
for (let svoystvoOfObject in newFactory) {
    if ((typeof newFactory[svoystvoOfObject] != "function") && (typeof newFactory[svoystvoOfObject] != "object")) {
        console.log(svoystvoOfObject + ": " + newFactory[svoystvoOfObject]);
    } else if (typeof newFactory[svoystvoOfObject] == "object") {
        console.log("Обрабатываем объект");
    }
}