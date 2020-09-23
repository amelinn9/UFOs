// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// create a function to build the table
function buildTable(data) {
    // clear existing data so users aren't getting pre-filtered data
    tbody.html("");

    // loop through each object in the data & append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");

        // loop through each field in the dataRow argument
        Object.values(dataRow).forEach((val) => {
            // append each value of the object to a cell in the table
            let cell = row.append("td");
            // add the values
            cell.text(val);
            }
        );
    });
}
