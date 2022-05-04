/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function askingQuestions() {

    let age = prompt("What is your age?");
    let gender = prompt("What is you gender?");
    let city = prompt("What city do you live in?");
    let check = confirm("Hello, you are " + age + " years old. You are a " + gender + " and you live in " + city + "!");
    console.log(check);

    if (check === true) {

    } else {
        askingQuestions();
    }
}

askingQuestions();
