/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Check DOM of Document to get the selector
    //console.dir(document.all);
    const source = document.getElementById("source").getAttribute("data-image");
    const target = document.getElementById("target");

    let newImage = document.createElement("img");
    newImage.src = source;

    target.appendChild(newImage);


})();
