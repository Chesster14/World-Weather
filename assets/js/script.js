var tableBody = document.getElementById("repo-table");
var fetchButton = document.getElementById("fetch-button");
var submitBtn = document.getElementById("searchBtn");
var searchCity = document.getElementById("searchCity");
var cityNameInput = document.getElementById("cityInput");
function getLatAndLon(){
console.log("click reg")
searchCity = cityNameInput.value;
console.log("you searched for" + searchCity)
getApi(searchCity)
}

function getApi() {
  var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
  fetch(requestUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {

      console.log("json response", data);
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement("tr");
        var tableData = document.createElement("td");
        var link = document.createElement("a");

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });

}

submitBtn.addEventListener("click", getLatAndLon);
// fetchButton.addEventListener("click", getApi);