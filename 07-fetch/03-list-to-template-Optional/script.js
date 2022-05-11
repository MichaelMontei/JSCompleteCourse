/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        fetch("../../_shared/api.json")
            .then(res => res.json())
            .then(data => {

                const Element = document.getElementById("tpl-hero");

                data.heroes.forEach(hero => {

                    const CloneNode = Element.content.cloneNode(true);

                    const Name = CloneNode.querySelector(".name")
                    const AlterEgo = CloneNode.querySelector(".alter-ego");
                    const Powers = CloneNode.querySelector(".powers");

                    Name.innerText = hero.name;
                    AlterEgo.innerText = hero.alterEgo;
                    Powers.innerText = hero.abilities.join('. ') + '.';

                    document.getElementById("target").appendChild(CloneNode);

                })
            });
    });
})();
