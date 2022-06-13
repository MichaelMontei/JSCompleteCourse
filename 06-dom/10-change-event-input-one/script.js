/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // set attribute maxlength
    document.getElementById("pass-one").maxLength = "10";

    const passInput = document.getElementById("pass-one");
    const counter = document.getElementById("counter");

    //event listener for keystroke
    passInput.addEventListener("keyup", updateCounter);

    // a function for starting a counter
    function updateCounter() {

        let passValue = passInput.value;
        let passLength = passValue.length;

        //putting counter in input box
        counter.textContent = `${passLength}/10`;
    }
})();
