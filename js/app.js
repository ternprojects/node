//добавить пакет
const shortid = require('shortid');

/* 
function summ(a, b) {
  return a + b;
}

let result = summ(6, 8);
console.log(result);
 */

/* 
console.log(shortid.generate()); 
*/

//Реализация
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