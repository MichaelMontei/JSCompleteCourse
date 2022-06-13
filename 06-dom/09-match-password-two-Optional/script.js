/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run');addEventListener('click', function (){

        const pass1 = document.getElementById('pass-one');
        const pass2 = document.getElementById('pass-two');

        if(pass1.value !== pass2.value ){
            target.innerHTML = 'Passwords are not the same';
            //how you can add a class with name error
            pass1.classList.add("error");
            pass2.classList.add("error");
        }else{
            target.innerHTML = 'Passwords are the same';

            //how you can add a class with name error
            pass1.classList.remove("error");
            pass2.classList.remove("error");
        }
    })

})();