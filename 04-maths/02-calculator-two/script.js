/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let n1 = document.getElementById("op-one").value;
    let n2 = document.getElementById("op-two").value;

    let performOperation = function(operation) {
        // perform the operation
        let result = 0;

        switch (operation) {
            case 'addition' :
                result = n1 + n2 ;
                break;
            case 'substraction' :
                result = n1 - n2;
                break;
            case 'multiplication':
                result = n1 * n2;
                break;
            case 'division':
                result = n1 / n2;
                break;}

        window.alert(result);

    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
