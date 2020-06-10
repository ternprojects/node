//Добавить пакет - только а "npm"
/* const shortid = require('shortid'); */

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

//Реализация в массиве
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

//Ещё одна реализация
const arr = ["Alex", "Tom", "Ania"];

const arrObj = arr.map((name) => ({ id: shortid.generate(), name }));

console.log(arrObj);