const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const resultBox = document.getElementById('result');

// Функции математических операций
function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return null; // деление на ноль
    }
    return a / b;
}

// Проверка: является ли введённое значение числом
function parseNumber(value) {
    if (value.trim() === '') return null;
    const num = Number(value);
    if (Number.isNaN(num)) return null;
    return num;
}

// Проверка обоих инпутов и вывод ошибки
function validateInputs() {
    const a = parseNumber(input1.value);
    const b = parseNumber(input2.value);

    if (a === null || b === null) {
        showError('Ошибка: введите числа');
        return null;
    }
    return { a, b };
}

// Показать результат
function showResult(value) {
    resultBox.classList.remove('error', 'success');
    resultBox.classList.add('success');
    resultBox.textContent = 'Результат: ' + value;
}

// Показать ошибку
function showError(message) {
    resultBox.classList.remove('success');
    resultBox.classList.add('error');
    resultBox.textContent = message;
}

// Универсальная функция для расчёта
function calculate(operation) {
    const values = validateInputs();
    if (!values) return;

    const result = operation(values.a, values.b);

    if (result === null) {
        showError('Ошибка: деление на ноль');
        return;
    }

    showResult(result);
}

// Обработчики событий на кнопках
document.getElementById('sum').addEventListener('click', () => calculate(sum));
document.getElementById('diff').addEventListener('click', () => calculate(diff));
document.getElementById('mult').addEventListener('click', () => calculate(mult));
document.getElementById('div').addEventListener('click', () => calculate(div));
