//Добавление пакетов - только в "npm"
//const shortid = require('shortid');
/* const { v4: uuidv4 } = require('uuid'); */

//Для браузера
//console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

//Для браузера
/* import shortid from 'shortid';
console.log(shortid.generate());
 */

//Пример работы обычной функции
/* 
function summ(a, b) {
  return a + b;
}

let result = summ(6, 8);
console.log(result);
 */

/* 

//Вывод айдишника
console.log(shortid.generate()); 
*/

//Реализация shortid в массиве
/* 
const arr = ['Alex', 'Tom', 'Ania'];

const arrObj = arr.map((name) => {
  return {
    id: shortid.generate(),
    name
  };
});

console.log(arrObj);
*/

//Ещё одна реализация shortid
/* const arr = ["Alex", "Tom", "Ania"];

const arrObj = arr.map((name) => ({ id: shortid.generate(), name }));

console.log(arrObj);  */

//Реализация uuid
/* const arr = ["Alex", "Tom", "Ania"];

const arrObj = arr.map((name) => ({ id: uuidv4(), name }));

console.log(arrObj); */

const a = 10;