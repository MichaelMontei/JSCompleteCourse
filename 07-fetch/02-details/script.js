/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    (() => {
            const url = "../../_shared/api.json";
            document.getElementById('run').addEventListener("click", ()=>{
            const heroId = document.getElementById("hero-id").value;

            if(heroId <= 5){
                console.log("Succes");
            }else{
                console.log("ERROR");
            }


        async function getHeroes(){
            let response = await fetch(url)
            let data = await response.json();
            console.log(data.heroes[heroId - 1]);
            let heroInfo = data.heroes[heroId - 1];
            getClone(heroInfo);
        }
        getHeroes();


            document.getElementById("details").innerHTML = heroId;


            let template = document.getElementById("tpl-hero")
            //let clone = template.content.cloneNode(true);
            //console.log(clone);
            //let nameHero = clone.querySelector(".name");
            //console.log(nameHero);

        function getClone(heroInfo){
                let clone = template.content.cloneNode(true);
                let nameHero = clone.querySelector(".name").textContent = heroInfo.name;
                let alterEgoHero = clone.querySelector(".alter-ego").textContent = heroInfo.alterEgo;
                let powersHero = clone.querySelector(".powers").textContent = heroInfo.abilities;

                document.getElementById("target").appendChild(clone);

            }
















        })


    })();

