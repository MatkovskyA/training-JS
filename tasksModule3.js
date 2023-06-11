// ---------- CheckPoin 1 ---------------

// Задание 1
// console.log(multiple(2, 3));

// function multiple(a, b) {
// 	let c = a * b;
// 	return c;
//  }




// Задание 2
// buildDate(6, 7, 2023);

// function buildDate(day, month, year) {
// 		return `${day}/${month}/${year}`;
// 	}
	
// Задание 3. 
// isAdult(19)

// function isAdult(age) {
// 	if (age >= 18) {
// 	return true;
// 	}
// 	if (age < 18) {
// 	return false;
// 	}
// }
// console.log(isAdult(17));

// задание 4.

// getMonthByNumber(4);

// function getMonthByNumber(monthNumber) {
// 	switch (monthNumber) {
// 		case 1:
// 			return 'Январь';
// 			break;
// 		case 2:
// 			return 'Февраль';
// 			break;
// 		case 3:
// 			return 'Март';
// 			break;
// 		case 4:
// 			return 'Апрель';
// 			break;
// 		case 5:
// 			return 'Май';
// 			break;
// 		case 6:
// 			return 'Июнь';
// 			break;	
// 		case 7:
// 			return 'Июль';
// 			break;
// 		case 8:
// 			return 'Август';
// 			break;
// 		case 9:
// 			return 'Сентябрь';
// 			break;
// 		case 10:
// 			return 'Октябрь';
// 			break;
// 		case 11:
// 			return 'Ноябрь';
// 			break;
// 		case 12:
// 			return 'Декабрь';
// 			break;					
// 		default:
// 			return "Внесите данные";
// 			break;
// 	}
	
// }
// console.log(getMonthByNumber(4));

// Задание 5.
// let usdRate = 70;
// let eurRate = 80;
// let kztRate = 60;
// let aedRate = 50;
// let currency;

// function convertRub(valueRub, currency) {
// 	switch (currency) {
// 		case 'USD':
// 			return valueRub * usdRate;
// 			break;
// 		case 'EUR':
// 			return valueRub * eurRate;
// 			break;	
// 		case 'KZT':
// 			return valueRub * eurRate;
// 			break;
// 		case 'AED':
// 			return valueRub * eurRate;
// 			break;		
// 		default:
// 			return 'Неизвестная валюта';
// 			break;
// 	}
// }



// ------------CheckPoint 2 -------------------


// задание 1 -----------------

// let num = -10;

// printNumbers();

// function printNumbers() {
//     while (num <= 10) {
//     console.log(num);
//     num++;  
//     }  
// }


// задание 2 --------------------


// printNumbersByRange(-5, 4);

// function printNumbersByRange(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i);
//     }
// }


// Задание 3 --------------------

// const arrayNumbers = [1, 4, 5, 7];
// let sumNumber = 0;

// calculateNumbersSum();

// function calculateNumbersSum(numbers) {
//     for (let i = 0; i < arrayNumbers.length; i++) {
//         sumNumber += arrayNumbers[i];
//     }
//     return sumNumber;
// }
// console.log(sumNumber);


//  Задание 4 ------------------


// const number = 3;
// const numbers = [1, 3, 4];
// const resultNum = includes(numbers, number);

// function includes(numbers, number) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === number) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(resultNum);


// Задание 5 --------------------


function createPerson(name, surname, age) {
    
}








const person = {
    name: 'Anatoly',
    surname: 'Matkovsky',
    age: 31,
    createPerson: function() {
        return `${this.name} ${this.surname} ${this.age}`
    }
};

console.log(person.createPerson());