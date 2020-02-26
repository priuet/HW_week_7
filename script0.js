// alert ("Я JavaScript!");
// let name = "John";
// let admin = "John";
// alert (admin);

// let ourPlanetName = "Earth";
// let currentUserName

// // 
// let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); 

// let counter = 10;
// let a = ++counter;
// alert (a);


// let number = 100;
// let b = --number;
// alert (b);

// let n = 10;

// n *= 3 + 5;

// alert( n ); 

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// alert (c);
// alert (d);

// alert( 2 > 1 );  // true (верно)
// alert( 2 == 1 ); // false (неверно)
// alert( 2 != 1 ); // true (верно)

// alert( 'А' > 'а' ); // true
// alert( 'Кот' > 'Код' ); // true
// alert( 'Сон' > 'Сонный' ); // true

// let name = prompt ("what is your name?", "");
// alert (name);

// let age = prompt('Сколько тебе лет?', 100);

// alert(`Тебе ${age} лет!`); // Тебе 100 лет!

// let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');

// if (year == 2015) {
//   alert( "Правильно!" );
//   alert( "Вы такой умный!" );
// }
// else {
// 	alert("you are wrong!");
// };

// let age = prompt('Сколько вам лет?', '');
// let accessAllowed = (age > 18) ? true : false;

// let name = prompt ("what is the official name of JavaScript language?");

// if (name == "ECMAScript") {
// 	alert ("right!");
// } else {
// 	alert ("not correct");
// }


// let number = prompt ("write the number", "");

// if (number > 0) {
// 	alert ("1");
// } else if (number = 0) {
// 	alert  ("0");
// } else {
// 	alert(-1);
// }

// let a = prompt ("text a");
// let b = prompt ("text b");
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// alert (result);
// // result = (a + b < 4) ? alert ("too small") : alert ("biig");
// // result = (a + b < 4) ? 'Мало' : 'Много';

// let hour = 12;
// let isWeekend = false;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'Офис закрыт.' ); // это выходной
// } else {
// 	alert("open office");
// }

// let age = prompt("input your age", "");

// if (age >= 14 && age <= 90) {
// 	alert ("norm");
// } else {
// 	alert ("malo");
// }

// let age = prompt("input your age", "");

// if (!(age >= 14 && age <= 90)) {
// 	alert ("norm");
// } else {
// 	alert("nea");
// }


// let login = prompt ("who is there?", "");

// if (login == "admin") {

// 	let password = prompt ("type the password", "");

// 	if (password == "Я главный") {
// 		alert ("Здравствуйте!");
// 	} else if (password == "" || password == null) {
// 		alert ("Отменено");
// 	} else {
// 		alert ("Неверный пароль");
// 	}
// } 
// else if (login == "" || login == null) {
// 	alert ("Отменено");
// } else {
// 	alert ("I don't know you");
// }

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

// let i = 0;
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // ...конец, потому что теперь i == 3

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// let i = 0;
// while (i++ < 5) alert( i );

// for (var i = 2; i <= 10; i++) {
// 	if (i % 2 == 0) {
// 		alert(i);
// 	}
// }

// let i = 0;
// while (i < 3) {
//   alert( `number ${i++}!` );
// }

// let browser = 'Edge';
// if (browser == 'Edge') {
//     alert( "You've got the Edge!" );
// } else if (browser == 'Chrome' 
// 	|| browser == 'Firefox'
// 	|| browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
// 	case 0:
// 		alert('Вы ввели число 0');
// 		break;
// 	case 1:
// 		alert('Вы ввели число 1');
// 		break;
// 	case 2: 
// 	case 3: 
// 		alert('Вы ввели число 2, а может и 3');
// 		break;
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
//   }

// let a = 2;
// let b = 5;

// function min (a,b) {
// 	if (a < b) {
// 		return a;	
// 	} else {
// 		return b;
// 	}
// }


// let sayHi = function() {
//   alert( "Привет" );
// };

// let func = sayHi;

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );


// let question = prompt ("Вы согласны?");
// let ask = (question) ?
// 	() => alert("Вы согласились."):
// 	() => alert("Вы отменили выполнение.");

// ask();

// let a = 2;
// let b = 3;

// function multiply(a, b){
//   a * b
//   return multiply;
// }

// let user = {
//   name: "John",
//   surname: "Smith",
// };
// delete user.name;
// alert(user.surname);

// let user = {};
// user.name = "John";
// user.surname = "Smith",
// user.name = "Pete";
// delete user.name;
// alert(user);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// for (let key in salaries) {
//   alert('зарплата' + key + 'равна' + salaries[key] + 'долларов');
// }

// let mudaki = {
//   '1': 'vasya',
//   '2': 'kolya',
//   '3': 'denis'
// }
// for (let key in mudaki) {
//   alert('Мудак номер ' + key + ' это ' + mudaki[key]);
// }

// let fruits = {
//   '1': 'mango',
//   '2': 'lemon',
//   '3': 'denis'
// }
// for (let key in fruits) {
//   alert('Фрукт номер ' + key + ' это ' + fruits[key]);
// }

// let calculator = {
// 	sum() {
// 		return this.a + this.b;
// 	},
// 	mul() {
// 		return this.a * this.b;
// 	},
// 	read() {
// 	this.a = prompt ("give me the number please", ""),
// 	this.b = prompt ("give me the number please", ""),
// 	},
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let num = 255;
// alert( num.toString(16) );  // ff
// alert( num.toString(8) );  // 377
// alert( num.toString(2) );   // 11111111

// let num = 12.34;
// alert( num.toFixed(5) );

// let numb = 12.34;
// alert( +numb.toFixed(5) );

// let sum = 0.1 + 0.2;
// alert( +sum.toFixed(2) );

// alert( isNaN(15) );
// alert( parseInt('12.3') ); // 12, вернётся только целая часть
// alert( parseFloat('12.38888hg7fjod43hk5') );

// let num = +prompt("Enter a number", '');

// // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// alert( isFinite(num) );

// alert( isFinite("15") ); // true
// alert( isFinite("str") ); // false, потому что специальное значение: NaN
// alert( isFinite(-Infinity) ); 

// let num1 = +prompt("Enter a number", '');
// let num2 = +prompt("Enter a number", '');

// alert(num1+num2);

// alert( 6.35.toFixed(1) );
// alert(Math.ceil(6.35));

// let num = prompt("Enter a number", '');

// if (isFinite(num)) {
// 	alert("Число:" + num);
// } else if (num = "") {
// 	alert("Число:" + null);
// }

// let kb1 = 8192;
// let kb15 = kb1 * 15;
// alert (kb15);

// let mile = prompt ("сколько миль ?", "");
// let km = mile *1.61;
// alert(mile + " миль " + " это " + km + " километров");

// let priuet = "priuet";
// alert (priuet.repeat(5));

// let str = '';

// for (let i = 1; i <= 120; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );
// alert( String.fromCodePoint(590) );
// alert( "Hello".includes("hell") );
// alert( "Widget".startsWith("Weed") ); 

// function even (num) {
// 	if (num%2 == 0) {
// 		return "even"
// 	} else {
// 		return "odd"
// 	}
// }

// let number = +prompt("enter number");

// let typeNumber = even(number);
// alert (typeNumber);


// function century (num) {
// 	return Math.ceil(number/100);
// }

// let number = +prompt("enter year");
// alert (century(number));


// let washNextItem = function (itemsLeft) {
// 	itemsLeft--;
// 	alert ('В раковине осталось ' + itemsLeft + ' предметов');

// 	if (itemsLeft > 0) {
// 		washNextItem(itemsLeft);
// 	};
// };
// washNextItem(5);

// let washNextItem = function (itemsLeft) {
// 	while (itemsLeft--) { //в скобках пишется код, который функция должна выполнить.
// 		alert ('В раковине осталось ' + itemsLeft + ' предметов');
// 	};
// };
// washNextItem(5);

// for (let char of "Hello world") {
//   alert(char);
// } //перебо всех символов строки

//замена маленькой буквы на большую
// let ucFirst = 'вася';
// ucFirst = 'В' + ucFirst[1];
// alert( ucFirst );

// alert( 'Interface'[4].toUpperCase() ); //R

// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

// alert( str.indexOf(" ") );

// let str = "stringify";
// alert( str.substr(-7, 3) );

// let str = "stringify";
// alert( str.substring(-2, -6) ); // "ring"

// function checkSpam(str) {
// 	let checkSpam = 'buy ViAgRA now';

// 	if checkSpam.indexOf("viagra")||checkSpam.indexOf("XXX") {
// 		alert(true); 
// 	} else {
// 		alert(false);
// 	}
// }

//let myWardrobe = ["blue jeans", "white shirt", "red jumper", "purple backpack", "grey shoes"];
// alert (myWardrobe[3]);
// myWardrobe[5] = "black hat";
// alert(myWardrobe[5]);
// alert(myWardrobe.pop());
// alert (myWardrobe.push("rtutyeliu"));
// alert (myWardrobe.length);
// myWardrobe.unshift('ninriverowpe');
// alert(myWardrobe);
// for (let i of myWardrobe) {
//   alert( i ); //перебор элементов
// }
//myWardrobe.forEach(alert);
// myWardrobe.forEach (){
// 	alert(`${item}  имеет позицию ${index} в ${array}`);
// };


// let styles = ["Джаз", "Блюз"];
// alert(styles);
// styles.push("Рок-н-ролл");
// alert(styles);
// styles.shift();
// styles.unshift ("Рэп", "Регги");
// alert(styles);

// let clothes = ["blue jeans", "white shirt", "red jumper", "purple backpack", "grey shoes"];
// clothes.sort();
// alert(clothes);
// alert(clothes.isArray); // почему ошибка если с пустыми квадратными скобками или undefined если без скобок? надо весь массив указывать чтоли?

// let clothes = [
//   {id: 1, name: "blue jeans"},
//   {id: 2, name: "white shirt"},
//   {id: 3, name: "red jumper"}
// ];

// let result = clothes.find(item => item.id == 1);
// let result = clothes.findIndex(item => item.name == "red jumper");
// alert(result);

// let a = prompt ("enter number"), b = prompt ("enter number"), c = prompt ('enter number'), d;
// d = a;
// a = b;
// b = c;
// c = d;

// alert(a + " " + b + "  " + c);

//найти и показать наибольшее число из трёх
//let a = prompt("enter 1 number"), b = prompt ("enter 2 number"), c = prompt ("enter 3 number");
// if (a > b && a > c) {
// 	alert (a);
// } else if (b > a && b > c) {
// 	alert(b);
// } else {
// 	alert(c);
// }

// if (a > b) {
// 	if (a > c) {
// 		alert (a);
// 	} else {
// 		alert (c);
// 	}
// } else {
// 	if (b > c) {
// 		alert (b);
// 	} else {
// 		alert (c);
// 	}
// }

// проверка делится ли число на 5
// let a = prompt ("enter number");
// if (a%5 == 0) {
// 	alert ("число делится на 5 ура");
// } else {
// 	alert ("не делится на 5");
// }

// проверка на массив или не массив
// let clothes = ["jeans", "skirt", "red jumper", "purple backpack", "grey shoes"];
// clothes.sort();
// alert(clothes);
// alert(Array.isArray(clothes));

// вывод только четных чисел на экран (переменная обьявляется в скобках Фор)
// for (let a = 1; a <= 16; a++) {
// 	if (a%2 == 0) {
// 		alert (a);
// 	}
// }
// сразу прибавляешь 2
// for (let a = 2; a <= 16; a += 2) {
// 	alert (a);
// }
// умножаешь на 2 и сразу получается только четные числа
// for (let a = 1; a <= 8; a++) {
// 	alert (a*2);
// }
// покажем числа от 1 до введенного пользователем числа
// let i = 0, a = prompt ("enter number");
// while (i < a) {
// 	i++; 
// 	alert (i);
// } 
// покажем числа от 1 до введенного пользователем числа
// let i = 1, a = prompt ("enter number");
// while (i <= a) {
// 	alert (i);//сначала покажем числа, потом прибавим 1, покажем получившееся число, снова прибавим 1 к получившимуся
// 	i++; 
// } 
// факториал 
// let a = prompt ("enter number"), result = 1;

// for (let i = 1; i <= a; i++) {
// 	result = result * i;
// 	alert(result);
// }

//Reversed Strings
// function solution(str){
//   let array = str.split (""); //строка дробится на символы и переводится в массив
//   let reversedArray = array.reverse(""); //элементы массива встают в обратном порядке
//   let result = reversedArray.join(""); // join переводит массив обратно в строчку
  
//   return result; // вернет результат
// }
//Remove First and Last Character
// function removeChar(str){
// 	return str.slice (1, -1);
// };

//генератор случайных чисел 0-99
// function randomNumber(min, max) {
//   return Math.trunc(Math.random (0, 99)*100);
// }
// alert(randomNumber(0,99));


// вывод чисел в обратном порядке через цикл for
// for (let i = 1; i >= -5; i--) {
// 	alert (i);
// }

// вывод чисел в обратном порядке через цикл while
// let i = 10, a = prompt ("enter number"); 
// while (i > a) {
// 	i--; 
// 	alert (i);
// }//если i = 1, то надо вводить отрицательное число, если вводить число больше 1 то цикл не начинает работать

//вывод только четных чисел на экран через while
// let i = 0;
// while (i <= 10) {
// 	i+= 2;
// 	alert (i);
// }

// проверка делится ли число на 5
//let a = prompt ("enter number");

// while (a%5 == 0) {
// 	alert ("число делится на 5 ура"); //цикл получается бесконечный
// }
// do {
// 	alert ("число делится на 5 ура");
// } while (a%5 == 0);
// break // если пишу break, то цикл не выполняется вообще


//////////////////ЗАДАЧИ ИЗ ЗАДАЧНИКА ПАСКАЛЬ
// Даны три действительных положительных числа. 
// Найти среднее арифметическое этих чисел.
// let number1 = 1; number2 = 2; number3 = 3;

// let result = (number1 + number2 + number3) / 3;
// alert (result);


//Найти среднее геометрическое
// let number1 = 10; number2 = 2; number3 = 3;

// let result = Math.sqrt(number1 * number2 * number3);
// alert (result);

//Даны катеты прямоугольного треугольника. Найти его гипотенузу и площадь.
// let a = 3, b = 5;

// let katet1 = Math.pow(a,2);
// let katet2 = Math.pow(b,2);

// let gipotenuza = Math.sqrt(katet1 + katet2);
// alert(gipotenuza);

//Найти площадь прямоугольного треугольника.
// let katet1 = 3, katet2 = 5;

// let square = (katet1 * katet2) /2;
// alert(square);


// Мальчик купил несколько тетрадей по сто рублей и несколько обложек по 50 рублей. 
// Составить программу, которая могла бы подсчитать стоимость всей покупки.
// let copybook = prompt("Введите количество тетрадей");
// let cover = prompt("Введите количество обложек");
// let summaPokupki = copybook*100 + cover*50;
// alert(summaPokupki);

//Даны три целых числа. Выбрать из них те, которые принадлежат интервалу [1,3]
// let num1 = prompt ("enter num1"), num2 = prompt ("enter num2"), num3 = prompt ("enter num3");
// if (num1 >= 1 && num1 <= 3) {
// 	alert ('Первое число принадлежит заданному интервалу');
// } else {
// 	alert ('Первое число НЕ принадлежит заданному интервалу');
// };
// if (num2 >= 1 && num2 <= 3) {
// 	alert ('Второе число принадлежит заданному интервалу');
// } else {
// 	alert ('Второе число HE принадлежит заданному интервалу');
// };
// if (num3 >= 1 && num3 <= 3) {
// 	alert ('Третье число принадлежит заданному интервалу');
// } else {
// 	alert ('Третье число HE принадлежит заданному интервалу');
// };

//Даны положительные целые числа A, B, C. 
//Выяснить существует ли треугольник с длинами сторон A, B, C. 
// let a = prompt("Введите число"), b = prompt("Введите число"), c = prompt("Введите число");

// if (a+b > c && a+c > b && b+c > a) {
// 	alert ('Треугольник построить можно');
// } else {
// 	alert ('Треугольник построить нельзя');
// }

//Заданы два числа X, Y. 
//Меньшее из двух значений заменить на 0. Если же они равны – заменить нулями оба.
// let x = prompt("Введите число"), y = prompt("Введите число");

// if (x<y) {
// 	x = 0;
// } else if (x>y) {
// 	y = 0;
// } else {
// 	x = 0;
// 	y = 0;
// }
// alert (x + "   " + y);

//Заданы три числа X, Y, Z. Найти min(XYZ, X+Y+Z).
// let x = prompt("Введите число"), y = prompt("Введите число"), z = prompt("Введите число");

// alert(x * y * z);
// alert(Number(x)+Number(y)+Number(z));

//Составить программу, которая по введенному значению выводит оценки по математике, физике, информатике.
// alert ("Данная программа выводит оценки по математике и химии");

// alert ("По какому предмету Вы хотите увидеть оценки?\nМ - математика\nХ - химия"); 
// let subject = prompt ("Введите номер пункта");
// if (subject == "M" || subject == "m") {
// 	alert ('5 5 4 4 5 5 3 5 5 ')
// } else if (subject == "X" || subject == "x") {
// 	alert ('4 3 5 3 4 4 4 5 ')
// } else {
// 	alert ("Введите номер пункта") //надо чтобы после этой фразы снова открывалось поле ввода, но как? Вайл засунуть внутрь Элс?
// }

// Составить программу, которая по введенному значению 1, 2, 3 вычисляет: 
// Периметр параллелограмма
// let side1 = prompt("Введите число"), side2 = prompt("Введите число");

// let perimetr = (Number(side1) + Number(side2)) * 2;
// alert (perimetr);
// Площадь параллелограмма
// let side1 = prompt("Введите сторону параллелограмма"), height = prompt("Введите высоту параллелограмма");
// let square = Number(side1) * Number(height);
// alert (square);

//день недели по его номеру
// let dayNumber = prompt ("Введите число от 1 до 7");
// if ( dayNumber == 1) {
// 	alert ("понедельник");
// } else if ( dayNumber == 2) {
// 	alert ("вторник");
// } else if ( dayNumber == 3) {
// 	alert ("среда");
// }  else if ( dayNumber == 4) {
// 	alert ("четверг");
// }  else if ( dayNumber == 5) {
// 	alert ("пятница");
// }  else if ( dayNumber == 6) {
// 	alert ("суббота");
// }  else if ( dayNumber == 7) {
// 	alert ("воскресенье");
// } 

// 13 февраля
// for (let i = 5; i >= 1; i--) {
//   alert (i);
// }

//Заданы три числа X, Y, Z. Найти min(XYZ, X+Y+Z).
// let x = prompt("Введите число"), y = prompt("Введите число"), z = prompt("Введите число");
// let multiply = x * y * z;
// let summa = Number(x)+Number(y)+Number(z);
// if (multiply > summa) {
// 	alert (multiply)
// } else {
// 	alert(summa)
// }; 
//возвращает = подставляет вместо себя
// вариант без переменных
// let x = prompt("Введите число"), y = prompt("Введите число"), z = prompt("Введите число");
// if (x * y * z > Number(x)+Number(y)+Number(z)) { //убрать 2 переменные, вместо них просто числовая операция. тратится меньше памяти но потратит больше оперативной на подсчеты
// 	alert (x * y * z)
// } else {
// 	alert(Number(x)+Number(y)+Number(z))
// }; 

// функция = подпрограмма, вместо себя подставляет значение, возвращает значение через return
// tckb tcnm crj,trb nj 'nj ltqcndbt'

// function discriminant (a, b, c) {
// 	return b**2 - 4 * a * c;
// }

// let a = prompt("Введите число"), b = prompt("Введите число"), c = prompt("Введите число"), d = discriminant (a, b, c);

// if (d > 0) {
// 	alert ((-b + Math.sqrt(d)) / (2 * a) + "  " + (-b - Math.sqrt(d)) / (2 * a));
// 	// alert ((-b - Math.sqrt(d)) / (2 * a));
// } else if (d == 0) {
// 	alert (-b / (2 * a));
// } else { // tckb ghjcnj else nj yt yflj d crj,rf[ eckjdbt ^ njkmrj gjckj if bkb else if gbitv eckjdbt d crj,rf[]]
// 	alert("net korney");
// }


// function factorial (a) {

// let result = 1;

// for (let i = 1; i <= a; i++) {
//   result = result * i;
// } 
// return result;
// }

// let a = prompt ("Введите число"), b = prompt ("Введите число"), c = prompt ("Введите число");
// alert (factorial(a) + "  " + factorial(b) + "  " + factorial(c));

// let a = prompt ("Введите число"), b = prompt ("Введите число"), c = prompt ("Введите число"), resultA = 1, resultB = 1, resultC = 1;
// for (let i = 1; i <= a; i++) {
// resultA = resultA * i;
// } 
// for (let i = 1; i <= b; i++) {
// resultB = resultB * i;
// } 
// for (let i = 1; i <= c; i++) {
// resultC = resultC * i;
// } 
// alert (resultA + " " + resultB + " " + resultC);

// задача на Сумма всех положительных чисел в массиве
// let numbers = [-1,2,3,4,-5];
// let summa = 0;

// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] > 0) {
// 		summa = summa + numbers[i];
// 	}
// }
// alert (summa);

//внутри функции могут быть функции или циклы или хоть что

// задача на Наибольший общий делитель двух целых чисел
// function mygcd(x,y){
// if ((typeof x !== 'number') || (typeof y !== 'number')) //typeof проверяет тип данных, если мы вводим НЕ число, то цикл прерывается
//     return false;
//   x = Math.abs(x); //Метод Math.abs() возвращает абсолютное значение числа. то есть, если мы вводим отрицательное число, то венрется то же самое число, только положительное
//   y = Math.abs(y);
//   while(y) {
//     var t = y; // var t нужна, чтобы .....
//     y = x % y;
//     x = t;
//   }
//   return x;
// }

// Remove duplicates from list
// function distinct(a) { //в аргумент передается массив
// return a.sort().filter(function(item, pos, ary) { // сначала сортируем массивб потом фильтруем в соответствии с условием 
//         return !pos || item != ary[pos - 1]; //убираем каждый элемент если он равен предыдущему
//     })
//   return a;
// }// не все тесты проходит


// const a = ['John', 'Paul', 'George', 'Ringo', 'John'];

// function distinct(a) {
//   let unique = {};
//   a.forEach(function(i) {
//     if(!unique[i]) {
//       unique[i] = true;
//     }
//   });
//   return Object.keys(unique);
// }

// alert (distinct(a));

// shortest word http://quabr.com/56815010/returning-the-length-of-the-shortest-word-in-a-string-in-javascript
// function findShort(s) {
//   const stringArray = s.trim().split(" ");
//   const orderedArray = stringArray.sort((a, b) => {
//     return a.length - b.length;
//   })
//   return orderedArray[0].length;
// }

// let word = "Buckethead";

// let wordArray = Array.from(word); //получила массив из строки, все буквы через запятую как отдельные элементы
// //let wordArray = word.split(); //почему метод не работает? возвращает то же самое слово без разбивки на символы
// //alert (wordArray); // выводится как массив
// alert (wordArray.reverse()); //сменили порядок на противоположный
// alert (wordArray.join("")); //обьеденить все элементы без пробелов в одно слово
// alert (wordArray.toString()); //превращаем массив обратно в строку

// //дальше надо сравнить что в заданнам слове все буквы одинаковые такие же как в исходном слове. то есть сравнить каджый индекс в обоих словах , равны они или нет. если равны, то выводим true
// if (wordArray == word) {
// 	alert (true); // должно возвращать тру но ничего не происходит
// }


// ДОМАШКА 15 ФЕВРАЛЯ
// генератор случайных чисел
// for (let i = 0; i <= 99) {
// return Math.trunc(Math.random (0, 99)*100);
//     alert (i); // выдает ошибку script.js:920 Uncaught SyntaxError: Unexpected token ')'
// }
// // второй вариант тоже не работает
// function randomNumber(min, max) {
//   while (randomNumber > 0 || randomNumber < 99) {
// return Math.trunc(Math.random (0, 99)*100);
// }
// alert(randomNumber(0,99));
// вообще не понимаю, как это сделать через цикл

//вывод чисел в обратном порядке через цикл for
// for (let i = 1; i >= -5; i--) {
//   alert (i);
// }

// проверка делится ли число на 5
// let a = prompt ("enter number");

// while (a%5 == 0) {
//   alert ("число делится на 5 ура"); //цикл получается бесконечный
// }
// do {
//   alert ("число делится на 5 ура");
// } while (a%5 == 0);
// break // если пишу break, то цикл не выполняется вообще

// Составить программу, которая по введенному значению выводит оценки по математике, физике, информатике.
// alert ("Данная программа выводит оценки по математике и химии");

// alert ("По какому предмету Вы хотите увидеть оценки?\nМ - математика\nХ - химия");

// let subject = prompt ("Введите номер пункта");
// if (subject == "M" || subject == "m") {
//   alert ('5 5 4 4 5 5 3 5 5 ')
// } else if (subject == "X" || subject == "x") {
//   alert ('4 3 5 3 4 4 4 5 ')
// } else {
//   alert ("Введите номер пункта") 
  //надо чтобы после этой фразы снова открывалось поле ввода, но как? 
  //Вайл засунуть внутрь Элс?
// }

//Найти произведение положительных, сумму и количество отрицательных  из 10 введенных целых значений.
// let i = prompt("Введите положительное или отрицательное число"), summa = , multiply = , ammount = ;

// for (i = 1; i >=10) {
// 	if (i>0) {
// 		multiply ()
// 	} else {
// 		summa ();
// 		ammount();
// 	}
// }
//как написать цикл, чтобы prompt выводился 10 раз?

// Из N целых чисел найти минимальное значение.
// let num1 = prompt('Введите первое значение'), num2 = prompt('Введите второе значение'), num3 = prompt('Введите третье значение'), num4 = prompt('Введите четвертое значение'), num5 = prompt('Введите пятое значение');
// alert (Math.min(num1, num2, num3, num4, num5));

// let arr = [1, -20, -54.6, 100, 200];

// for (num1 < 0) {

// var array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9];
// var min = getMinValue(array);

// function getMinValue(array){
//     var min = array[0];
//     for (var i = 0; i < array.length; i++) {
//         if (min > array[i]) min = array[i];
//     }
//     return min;
// }
// alert(min);

// alert ("Данная программа выводит оценки по математике и химии");

// alert ("По какому предмету Вы хотите увидеть оценки?\nМ - математика\nХ - химия");

// let subject = prompt ("Введите номер пункта");;
// while (!(subject == "M" || subject == "m" || subject == "X" || subject == "x")) {
// 	subject = prompt ("Введите корректный номер пункта");
// }
// if (subject == "M" || subject == "m") {
//   alert ('5 5 4 4 5 5 3 5 5 ')
// } else if (subject == "X" || subject == "x") {
//   alert ('4 3 5 3 4 4 4 5 ')
// } else {
//   alert ("Введите номер пункта") 
// }

// let N, max = 0, chislo;
// N = prompt("введите количество");
// for (let i = 1; i <= N; i++){ // i просто временная переменная, куда мы записываем промежуточный результат
//   chislo = prompt("Введите число под номером " + i);
//   if (Number(chislo) > max){
//      max = chislo;
//   }
// }
// alert(max);

//DreamTeam
// let myTeam = ["Коля", "Петя", "Вася", 111111, "Дима", false, "Вася", false];

// let filterTeam = myTeam.filter(function(item){
//   return typeof(item) == "string"; //оставляем только строки из всего массива
// });

// let DreamTeam = filterTeam.map (function(item){
// 	return item.charAt(0); //берем первые буквы каждого имени
// }).sort().join("");// все первые буквы сортировать по алфавиту и обьединить без пробелов
// alert(DreamTeam);

 










