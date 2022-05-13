/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const url = "../../_shared/api.json";

        async function getHeroes(){
            let response = await fetch(url)
            let data = await response.json();
            let heroes = data.heroes
            console.log(heroes);
        }
        getHeroes();

        document.getElementById('run').addEventListener("click", ()=>{
            const nameHero = document.getElementById("hero-id").value;
            let found = heroes.find(hero => hero.id == nameHero );
            heroes.splice(heroes.indexOf(found) , 1);
            console.log(heroes);
    })
})();