// // объявление функции/создание функции - это первый шаг.

// function testFunction() {
// 	const x = 5;
// 	const y = 10;
// 	console.log(x + y);
// }

// // объявление/определяем/создание функции - это первый шаг.

// function hello() {
//     testFunction();  // вызов функции в функции
// 	console.log('Hello'); 
// }

// function testFunction2() {
//     function test3() {
//         console.log('test3 function');
//     }
//     test3();
//     console.log('testFunction2');
// }
// // вызов/запуск функции - второй шаг

// hello();
// testFunction2();


// function unixTime() {
//     let time = Math.floor(new Date().getTime());
//     console.log(time);
// }

// unixTime();

// function randomIn() {
//     const minIn = 100;
//     const maxIn = 200;
//     let rand = Math.floor(minIn + Math.random() * (maxIn + 1 - minIn));
//     console.log(rand);
// }

// randomIn();
// randomIn();

// function randomIn() {
//     console.log('random in 555')
// }


// let minIn = 1000;
// let maxIn = 2000;

// function rand() {

//     let rand = Math.floor(minIn + Math.random() * (maxIn + 1 - minIn));
//     console.log(rand);
// }

// rand();

// function count() {
//     let c = 9;
//     c++;
//     console.log(c);
// }

// count();

// function getSum(a,b,c) {
//     console.log(a + b + c);
// }

// getSum(3, 7, 8);

// function showSum(elem, x, y) {
//     document.querySelector(elem).textContent = x + y;
// }

// function showSum(elem, x, y) {
//     elem.textContent = x + y;
// }

// showSum('.out-1' , 5, 6)
