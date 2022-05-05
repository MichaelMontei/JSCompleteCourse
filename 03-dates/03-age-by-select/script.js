/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let inputYear = document.getElementById("dob-year")

    const target = document.getElementById('target');
    const btnRun = document.getElementById('run');
    const date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    btnRun.addEventListener('click',calculate)

    function calculate(){
        let calculatedYears = year - inputYear.value;
        let message = "You are: " + calculatedYears + " years";
        target.innerHTML = message;
    }
})();
