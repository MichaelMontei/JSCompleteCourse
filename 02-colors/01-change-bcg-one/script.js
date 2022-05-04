/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // get the element
    const element = document.getElementById('red')
    // always checking if the element is clicked, if so, do alert('clicked')
    element.addEventListener("click", () => {
        document.body.style.backgroundColor = "red"
    });

    // get the element
    const element2 = document.getElementById('green')
    // always checking if the element is clicked, if so, do alert('clicked')
    element2.addEventListener("click", () => {
        document.body.style.backgroundColor = "green"
    });

    // get the element
    const element3 = document.getElementById('yellow')
    // always checking if the element is clicked, if so, do alert('clicked')
    element3.addEventListener("click", () => {
        document.body.style.backgroundColor = "yellow"
    });

    // get the element
    const element4 = document.getElementById('blue')
    // always checking if the element is clicked, if so, do alert('clicked')
    element4.addEventListener("click", () => {
        document.body.style.backgroundColor = "blue"
    });

})();

