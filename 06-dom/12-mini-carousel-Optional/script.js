/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    // index needs a number to start the carousel
    let index = 0;

    document.getElementById('next').addEventListener('click',function (){

        //this is a way to select an attribute without using id in case there is non.
        const image = document.querySelector('img[alt="Carousel"]');
        image.src = gallery[index];
        index++;
        if  (index === 5) {
            index = 0;
        }
    })


})();
