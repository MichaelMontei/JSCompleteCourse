/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {
        // your code here
        const number = document.getElementById("number").value;
        const target = document.getElementById("target");

        if (number < 0) {
            console.log('Error! Factorial for negative number does not exist.');
        }
        // if number is 0
        else if (number === 0) {
            console.log(`The factorial of ${number} is 1.`);
        }
        // if number is positive
        else {
            let factorial = 1;
            for (let i = 1; i <= number; i++) {
                factorial *= i;
            }
            target.innerHTML = (`The factorial of ${number} is ${factorial}.`);
        }
    });

})();
