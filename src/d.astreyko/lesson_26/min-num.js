function getMin(array) {
    // return Math.min(...array) короче решение
    let min = array[0];
    for (const element of array) {
        if (min > element) {
            min = element;
        }
    }
    return min;
}

console.log(getMin([12, 3, 7, 3, 5, -9]));
