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

// create a function to handle what to do after an input is given
function handleClick() {
    // create variables to hold date data
    let date = d3.select("#datetime").property("value");
    // set a default filter = original table
    let filteredData = tableData;

    // check for a date, if it exists then use it to filter the data
    if (date) {
        // apply the filter and only keep the rows where the datetime matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // rebuild the table using the filtered data, if no date was entered, original data will show
    buildTable(filteredData);
}

// execute handleClick() when the filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);
