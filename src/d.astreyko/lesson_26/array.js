const array = [1, 2, 3]; //new Array(5)

// чтение
console.log(array[1]);
// запись
array[0] = 5;

console.log(array);

// добавление
array.push(7); // в конец
array.unshift(0); // в начало
console.log(array);

// Удаление
array.pop(); // c конца
array.shift(); // c начала
console.log(array);


let arr = [1, 3, 7, 2];
arr = [9, ...arr];
