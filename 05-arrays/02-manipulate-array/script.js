/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    const target = document.getElementById("target");
    document.getElementById("run").addEventListener("click", function() {

    const removeFirst = fruits.shift();
    const addFirst = fruits.unshift('banana');
    const removeLast = fruits.pop();
    const addLast = fruits.push('kiwi');

    target.innerHTML = fruits;
    });

})();
