let a = 1;
while (a < 3) {
	console.log(a);
	a++;
};

let b = 2;
do {
    b++;
} while (b > 1);

// Задание 1 --------------------------
// const TYPE_OF_NUMBER = 'number';
// const NUMBER_VALUE_TEXT = 'Это число со значением';
// let a = 5;

// if (typeof a === TYPE_OF_NUMBER) {
//     alert(`${NUMBER_VALUE_TEXT} ${a}`);
// }

// Задание 2 ----------------------------
// const STRENGTH_REPS_COUNT_MAX = 5;
// const MASS_REPS_COUNT_MAX = 12;
// const STRENGTH_TEXT = 'Вы работаете на силу';
// const MASS_TEXT = 'Вы работает на массу';
// const RELIEF_TEXT = 'Вы работаете на рельеф';

// let repsCount = 14;

// if (repsCount <= STRENGTH_REPS_COUNT_MAX) {
//     console.log(STRENGTH_TEXT);
// } else if (repsCount <= MASS_REPS_COUNT_MAX) {
//     console.log(MASS_TEXT);
// } else {
//     console.log(RELIEF_TEXT);
// };

// Задание 3 --------------------------------
// const LOSE_WEIGHT_GOAL = 'Похудеть';
// const MUSCLE_MASS_GOAL = 'Мышечная масса';
// const FORCE_MASS_GOAL = 'Сила';
// const TONE_GOAL = 'Тонус';
// const RELIEF_GOAL = 'Рельеф';
// const LOSE_WEIGHT_CREATING_MESSAGE = 'Составляю программу тренировок для похудения';
// const MUSCLE_MASS_CREATING_MESSAGE = 'Составляю программу тренировок для набора мышечной массы';
// const FORCE_MASS_CREATING_MESSAGE = 'Составляю программу тренировок для развития силы';
// const TONE_GOAL_CREATING_MESSAGE = 'Составляю программу тренировок для поддержания тонуса';
// const RELIEF_GOAL_CREATING_MESSAGE = 'Составляю программу тренировок для рельефа';
// const MODAL_TEXT = 'Какая цель тренировок?';
// const MODAL_TEXT_ERROR = 'Ошибка ввода';

// let userGoal = prompt(MODAL_TEXT);

// switch (userGoal) {
//     case LOSE_WEIGHT_GOAL:
//         alert(LOSE_WEIGHT_CREATING_MESSAGE);
//         break;

//     case MUSCLE_MASS_GOAL:
//         alert(MUSCLE_MASS_CREATING_MESSAGE);
//         break;

//     case FORCE_MASS_GOAL:
//         alert(FORCE_MASS_CREATING_MESSAGE);
//         break;

//     case TONE_GOAL:
//         alert(TONE_GOAL_CREATING_MESSAGE);
//         break;

//     case RELIEF_GOAL:
//         alert(RELIEF_GOAL_CREATING_MESSAGE);
//         break;

//     default:
//         alert(MODAL_TEXT_ERROR);
//         break;
// }

// Задание 4 ----------------------------

// const aInput = prompt('Введите первое число');
// const bInput = prompt('Введите второе число');

// const a = Number(aInput);
// const b = Number(bInput);

// const sum = a + b;

// const sumInput = prompt('Результат сложения?');
// const sumFinal = Number(sumInput);

// if (sumFinal === sum) {
//     alert('Правильно');
// } else {
//     alert('Неправильно');
// }

// Задание 5 -----------------------------------
// const INPUT_NUMBER = 'Введите число';
// const EVEN_NUMBER = 'Число четное';
// const ODD_NUMBER = 'Число нечетное';


// let Input = prompt(INPUT_NUMBER);

// let numberInputProccessed = Number(Input);

// if (numberInputProccessed % 2 === 0) {
//     console.log(EVEN_NUMBER);
// } else {
//     console.log(ODD_NUMBER);
// };

// Задание 6 -------------------------------------

// const SUMMER_SEASON_TEXT = 'Лето';
// const AUTUMN_SEASON_TEXT = 'Осень';
// const WINTER_SEASON_TEXT = 'Зима';
// const SPRING_SEASON_TEXT = 'Весна';
// const ERROR_TEXT = 'Ошибка';

// const MONTH_TEXT = 'Введите порядковый номер месяца';

// let numberInput = prompt(MONTH_TEXT);

// const month = Number(numberInput);

// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log(WINTER_SEASON_TEXT);
//     break;

//     case 3:
//     case 4:
//     case 5:
//         console.log(SPRING_SEASON_TEXT);
//     break;

//     case 6:
//     case 7:
//     case 8:
//         console.log(SUMMER_SEASON_TEXT);
//     break;

//     case 9:
//     case 10:
//     case 11:
//         console.log(AUTUMN_SEASON_TEXT);
//     break;

//     default:
//         console.log(ERROR_TEXT);
//     break;
// }

// if (если) - ключевое слово ------------
// if (то что в круглых скобках - это условие и должно 
// именть булевое значение - true / false) {
//     console.log('выполняется код') - в фигурных скобках;
// };

// const myNameIs = 'Anatoly';

// if (myNameIs == 'Anatoly') {
//     console.log('Super');
// }

// if / else ------------------------------

// const myAge = 20;

// if (myAge >= 18) {
//     console.log('Я совершеннолетний');
// } else {
//     console.log('Я молодой');
// }

//else / if --- позволяет проверить еще одно значение, если первое не верно

// const myAge = 20;

// if (myAge >= 28) {
//     console.log('Все ок');
// } else if (myAge > 18) {
//     console.log('Я молодой');
// }

// if / esle if / else --- 

// const myAge = 20;

// if (myAge >= 28) {
//     console.log('Все ок');
// } else if (myAge > 22) {
//     console.log('Я молодой');
// } else {
//     console.log('Нужно подрасти')
// }

// switch --------------------------

// const a = 4;

// switch (a) {
//     case 1:
//         console.log('Переменная равна 1');
//         break;
//         case 2:
//             console.log('Переменная равна 2');
//         default:
//             console.log('Error')
//             break;
// }