/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    const passwInput = document.getElementById("pass-one");
    const validity = document.getElementById("validity");

    passwInput.addEventListener("keyup", validationPass);

    function validationPass() {
        let inputValue = passwInput.value;
        let passwFormat = /(?:.*\d){2}/; // passwordformat with minimum 2 numbers

        if (inputValue.length >= 8 && inputValue.match(passwFormat)) {
            validity.textContent = "ok";
        } else {
            validity.textContent = "not ok";
        }
    }
})();