/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function (){

   let button = document.getElementById('run');
   button.addEventListener ("click", () => {
       let randomColor = makeNewColor();

   document.body.style.backgroundColor = randomColor;
   });

function makeNewColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let BgColor = "rgb(" + r + "," + g + "," + b + ")";
    return BgColor;
}

})();

