
do {
    var a = +prompt('Введите число__')
} while (isNaN(a) || a === 0);

var b = +prompt('Введите степень числа__');

if (isNaN(b) || b === 0) {
    b = 2
}

var c = 1

for (let i = 1; i <= b; i++) {
    c = c * a;
}
console.log(a + ' в степени ' + b + ' равно ' + c);