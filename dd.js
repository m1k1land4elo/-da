let CheckNumber;
let wopo;
document.getElementById("button").addEventListener("click", examination);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomNumber = getRandom(0, 100);
function examination() {
    CheckNumber = parseInt(document.getElementById("numericInput").value);
    if (isNaN(CheckNumber)) {
        wopo = "Пожалуйста, введите числовое значение.";
    } else if (CheckNumber === randomNumber) {
        wopo = "Вы угадали!";
    } else if (CheckNumber < randomNumber) {
        wopo = "Число больше!";
    } else if (CheckNumber > randomNumber) {
        wopo = "Число меньше!";
    }
    document.getElementById("otvet").innerHTML = wopo;
}
