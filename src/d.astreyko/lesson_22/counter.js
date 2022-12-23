console.time('time')
getMessage(2323)
console.timeEnd('time')

function getMessage(age) {
    if (age < 3) {
        return 'Здравствуй, малыш!';
    }
    if (age < 18) {
        return 'Привет!';
    }
    if (age < 100) {
        return 'Здравствуйте!';
    }
    return 'Какой необычный возраст!';
}
