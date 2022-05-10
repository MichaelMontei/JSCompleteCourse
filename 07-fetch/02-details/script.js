/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Loading.... looking for answers.... need to do an IF statement to compare variable hero = with the actual name of superhero in heroes.name array

function fetchData(){
    const hero = document.getElementById("hero-id").value;


    fetch ("http://localhost:63342/index.html/_shared/api.json")
        .then(response =>{
            if (!response.ok){
                throw Error("ERROR");
            }
            return response.json();
        })
        .then (data =>{
        console.log(data.heroes);
        const html = data.heroes.map(user =>{
            return `
                <div class="user"></div>
                        <p>Name: ${user.name}</p>
                        <p>AlterEgo: ${user.alterEgo}</p>
                        <p>abilities: ${user.abilities}</p>
                </div>`
        })
            .join(" ");
            console.log(html);

        document.querySelector('#target').innerHTML = html;

    })
        .catch (error => {
            console.log(error);
        });
}

fetchData();

