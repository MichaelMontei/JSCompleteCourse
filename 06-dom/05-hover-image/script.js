/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//not working, checked with other BEcoder, found a solution and studying what i missed.
(function() {

    // your code here
    const onHover = document.querySelector('img');
    const offHover = onHover.src;

    onHover.addEventListener("mouseover", () => {
        onHover.src = onHover.getAttribute('data-hover'); });

    onHover.addEventListener('mouseout', () =>
    {onHover.src = offHover;})

})();
