// ----------Объявление массива - ТОЛЬКО ЧЕРЕЗ КВАДРАТНЫЕ СКОБКИ
// Можно туда заносить переменные, строки, числа, булевые значения - myName, "Толя", 4, true/false;

// const names = ['Dima', 'Sergey', 'Anatoly'];

// const myNameIndex = getMyNameIndex(names);

// console.log(names[myNameIndex]);

// function getMyNameIndex(names) {
//     let myNameIndex = null;

//     names.forEach(function(name, index) {

//         if (name === 'Anatoly') {
//             myNameIndex = index;
//         }
//     });
//     return myNameIndex;
// }

//console.log(names.length); // Получаем длину массива(сколько элементов находится в этом массиве)

// ------------- Чтение данных из массиыва происходит через обращение к определенному элементу массива по нумерации(индекс элемента) - нумерация начинается с 0(нуля). То-есть 'Dima' - индекс 0.

// const names = ['Dima', 'Sergey', 'Anatoly'];
// console.log(names[0]); // 'Dima'


// ------------ Как пройти по элементам массива  
// Проходим по свойству длинны массива - lenght

// for (let index = 0; index < names.length; index++) { //index - сокращенно i
//     const name = names[index];
    
//     console.log(name);
// }

// const nums = [-10, -9, -8, -7, -6, ];

// showItems(items);

// function showItems(items) {
//     items.forEach(function(item) {
//         console.log(item);
//     });
// }

// let testMas = [1, 4, 3, 6, 5, 8];

// for (let i = 0; i < testMas.length; i++) {
    
//     console.log(testMas[i]);
// }