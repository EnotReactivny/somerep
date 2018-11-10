//Задание 1

let table = document.createElement('table');
let row;
let cell;

let figure = {
    0: ['-263px -19px', '-484px -22px', '-372px -17px', '-40px -18px', '-150px -16px', '-372px -17px', '-484px -22px', '-263px -19px'],
    1: ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px'],
    6: ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px'],
    7: ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -115px', '-42px -116px', '-372px -116px', '-484px -116px', '-263px -116px'],
    9: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    10: ['1', '2', '3', '4', '5', '6', '7', '8', '']
};

//Можно, конечно, сделать массив из других элементов,
//но мне попался такой вариант. И я решил использовать его,
//дописав 9 и 10 свойства.

for (i = 0; i<9; i++) {

    row = document.createElement('tr');

    for (j = 0; j<9; j++) {

        cell = document.createElement('td');

        if (i%2 === j%2) {
            cell.className = 'white';
        } else {
            cell.className = 'black';
        }

        if (figure[i]!==undefined && figure[i][j]!==undefined){
            cell.style.backgroundImage = 'url(symb.png)';
            cell.style.backgroundPosition = figure[i][j];
            //cell.innerHTML = figure[i][j]; при использовании массива
            //с html кодами фигур.
        }

        if (j == 8) {
            cell.className = 'white';
            cell.innerHTML = figure[9][i];
        }

        if (i == 8) {
            cell.className = 'white';
            cell.innerHTML = figure[10][j];
        }

        row.appendChild(cell);
    }

    table.appendChild(row);
}

document.body.appendChild(table);

//второй вариант (без букв и цифр)

function makeChess() {
    let chessBlock = document.querySelector('.chessblock');
    let block;
    let flag = true;

    let figure = {
        0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-40px -18px', '-150px -16px','-372px -17px', '-484px -22px','-263px -19px'],
        1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
        6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
        7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -115px', '-42px -116px','-372px -116px', '-484px -116px','-263px -116px'],
        8 : ['1', '2', '3', '4', '5', '7', '8']
    };

    for (i = 0; i < 8; i++) {
        flag = !flag;
        for (j = 0; j < 8; j++) {
            block = document.createElement('div');

            if (flag) {
                block.className = 'black';
            } else {
                block.className = 'white';
            }

            if (figure[i]!==undefined && figure[i][j]!==undefined){
                block.style.backgroundImage = 'url(symb.png)';
                block.style.backgroundPosition = figure[i][j];
            }

            chessBlock.appendChild(block);

            flag = !flag;
        }
    }
}

makeChess();

//