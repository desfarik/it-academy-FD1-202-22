function checkAge(age) {
    return age > 18;
}

function checkAccessByParent() {
    const hasAccess = confirm('А родители разрешили?')
    return hasAccess;
}

function checkPermission(age) {
    if (checkAge(age)) {
        return true;
    }
    if (checkAccessByParent()) {
        return true;
    }
    return false;
}

let age = prompt('Сколько вам лет?', 18);

if (checkPermission(age)) {
    alert('Доступ получен');
} else {
    alert('Доступ закрыт');
}
