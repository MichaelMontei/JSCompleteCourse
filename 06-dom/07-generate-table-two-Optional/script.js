/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const columns = 10;
    const rows = 10;

    const target = document.getElementById('target');

    // function how to make a table
    createTable(columns, rows);

    function createTable(columns,rows) {
        // you create a table and you push it to id target
        const table = document.createElement("table");
        target.appendChild(table);


        for (let i = 1; i <= rows; i++) {
            //This way you can make 10 rows
            let row = document.createElement("tr");

            for (let j = 1; j <= columns; j++) {
                //this way you can make 10 columns
                let data = document.createElement("td");
                // put data in the columns
                data.textContent = `${i}*${j} = ${i*j}`;
                //push table data to columns
                row.appendChild(data);
            }
            // push row to html
            table.appendChild(row);
        }
    }
})();
