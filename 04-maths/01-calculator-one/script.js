/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    // What do we need
    const numberOne = document.getElementById('op-one');
    const numberTwo = document.getElementById('op-two');
    const target = document.getElementById('target');


(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        //We need to Parseint the numbers into values
        const numberOneValue = parseInt(numberOne.value);
        const numberTwoValue = parseInt(numberTwo.value);
        let sum = numberOneValue + numberTwoValue;
        target.innerHTML = "The sum of the number" + " = " + sum;
    });

    document.getElementById("substraction").addEventListener("click", function() {

        const numberOneValue = parseInt(numberOne.value);
        const numberTwoValue = parseInt(numberTwo.value);
        let sub = numberOneValue - numberTwoValue;
        target.innerHTML = "The subtraction of the numbers" + " = " + sub;
    });

    document.getElementById("multiplication").addEventListener("click", function() {

        const numberOneValue = parseInt(numberOne.value);
        const numberTwoValue = parseInt(numberTwo.value);
        let mul = numberOneValue * numberTwoValue;
        target.innerHTML = "The multiplication of the numbers" + " = " + mul;
    });

    document.getElementById("division").addEventListener("click", function() {

        const numberOneValue = parseInt(numberOne.value);
        const numberTwoValue = parseInt(numberTwo.value);
        let div = numberOneValue / numberTwoValue;
        target.innerHTML = "The dividing of the numbers" + " = " + div;
    });
})();
