/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const url = "../../_shared/api.json";
    document.getElementById('run').addEventListener("click", ()=>{

        const nameHero = document.getElementById("hero-name").value;
        const alterEgo = document.getElementById("hero-alter-ego").value;
        const power = document.getElementById("hero-powers").value;

        async function getHeroes(){
            let response = await fetch(url)
            let data = await response.json();
            console.log(data.heroes); //check if all data comes through
            console.log(nameHero);
            console.log(alterEgo);
            console.log(power);

            //make the array longer for adding a hero
            let heroesLength = data.heroes.length +1;

            //specify the elements and const of elements by above to add them on the list
            let newHero = {id: heroesLength, nameHero: `${name}`, alterEgo: `${alterEgo}`, abilities: `${power}`};

            //pushing the new hero into the array
            data.heroes.push(newHero);
            console.log(data.heroes);
        }
        getHeroes();

    })
})();
