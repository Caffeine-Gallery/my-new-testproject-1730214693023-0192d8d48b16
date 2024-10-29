import { backend } from 'declarations/backend';

let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
const display = document.getElementById('display');
const loader = document.getElementById('loader');

window.appendToDisplay = (value) => {
    if (currentOperation === null) {
        firstNumber += value;
        display.value = firstNumber;
    } else {
        secondNumber += value;
        display.value = secondNumber;
    }
};

window.setOperation = (operation) => {
    if (firstNumber !== '') {
        currentOperation = operation;
        display.value = '';
    }
};

window.clearDisplay = () => {
    firstNumber = '';
    secondNumber = '';
    currentOperation = null;
    display.value = '';
};

window.calculate = async () => {
    if (firstNumber !== '' && secondNumber !== '' && currentOperation !== null) {
        loader.style.display = 'block';
        try {
            const result = await backend.calculate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperation);
            display.value = result.toString();
            firstNumber = result.toString();
            secondNumber = '';
            currentOperation = null;
        } catch (error) {
            display.value = 'Error';
        } finally {
            loader.style.display = 'none';
        }
    }
};
