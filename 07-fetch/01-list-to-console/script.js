/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    document.getElementById('run').addEventListener("click", ()=>{
        fetch("http://localhost:63342/index.html/_shared/api.json")
            .then(response => response.json)
            .then (data => console.log(data));
    })
})();
