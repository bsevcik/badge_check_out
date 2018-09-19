/*eslint-env browser*/
//document.getElementById("checkIn").onclick = displayDate;


//This gets the full time. I'm trying to figure out how to get just the hour and minute in a variable
/*var time = new Date();

window.console.log(
    ("0" + time.getHours()).slice(-2)   + ":" + 
    ("0" + time.getMinutes()).slice(-2) + ":" + 
    ("0" + time.getSeconds()).slice(-2));
*/

//window.console.log(time);

//name is a placeholder value. It will be updated to pull from the text the user types in the name form
//var name = "Ben Sevcik";

//When the Check In button is clicked this will alert the user
//alert("Thank you "+ name + " for checking in at "+ time);


/*window.addEventListener('load',
    function() {
    alert('the dom is fully loaded')
}    
                       );
*/
/*             <table id="checkedIn" style="width:100%" border: 1>
              <tr>
                <th>Name</th>
                <th>Badge Type</th> 
                <th>Badge Number</th>
              </tr>
              <tr>
                <td>Jill Smith</td>
                <td>Temporary</td> 
                <td>50</td>
              </tr>
              <tr>
                <td>Tom Test</td>
                <td>Consultant</td> 
                <td>94</td>
              </tr>
            </table>
*/
/*var time = new Date();
var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
var name = document.getElementById("nameTyped").value;
var badge = document.getElementById("badgeTyped").value;
var badgeNum = document.getElementById("badgeNumTyped").value;
var returnButton = "</td><td><input type='button' class='return' value='Click to Return Badge'></td>";
*/

//This array is where all the data is stored. checkedInArray[0] contains the table heading row, though it is outputted as table rows
var checkedInArray = [
    ['<strong>Name</strong>', '<strong>Badge Type</strong>', '<strong>Badge Number</strong>', '<strong>Time Checked Out</strong>', '<strong>Return</strong>']
//    ["Array 1-0", "1-1", "1-2", "1-3", "</td><td><input type='button' class='return' value='Click to Return Badge'></td>"]
];

//This function is meant to clear the table after the form is submitted. It wasn't reliable when using the table row length, so I set it to delete as many items as are in the array. The form data is pushed to the array before clearTable() is run
function clearTable() {
    "use strict";
    for (var i = 0; i < checkedInArray.length; i++)
//    for (var i = 0; i < document.getElementById("checkedIn").rows.length + 50; i++) {
        document.getElementById("checkedIn").deleteRow(-1);
  }

//    document.getElementById("checkedIn") = "";
//}

//This function writes the entire array into an HTML table. It is reliable.
function displayArray() {
    "use strict";
    var i = 0
    for (clearTable(); i < checkedInArray.length; i++) {
        document.getElementById("checkedIn").innerHTML += "<tr onclick='deleteRow(this)'><td>" + checkedInArray[i][0] + "</td> <td>" + checkedInArray[i][1] + "</td> <td>" + checkedInArray[i][2] + "</td><td>" + checkedInArray[i][3] + "</td><td>" + checkedInArray[i][4] + "</td></tr>";
    }
}

//This function validates that something was typed into all three input boxes and writes all the data typed in by the user to checkedInArray
document.getElementById("checkIn").addEventListener("click",
    function () {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        if (document.getElementById("nameTyped").value === "" || document.getElementById("badgeTyped").value === "" || document.getElementById("badgeNumTyped").value === "") {
            window.alert("You need to fill out all three forms");
        } else {
            checkedInArray.push([document.getElementById("nameTyped").value, document.getElementById("badgeTyped").value, document.getElementById("badgeNumTyped").value, timeNow, "<input type='button' class='return' value='Click to Return Badge'>"]);
            clearTable();
            displayArray();

//This part of the code simply wrote the user typed data into a table, but did not write it to an array. It is now deprecated.
/*            document.getElementById("checkedIn").innerHTML += "<tr><td>" + name + "</td> <td>" + badge + "</td> <td>" + badgeNum + "</td><td>" + timeNow + '</td><td><input type="button" class="return" value="Click to Return Badge"></td>';
*/

//This clears the forms after the information is written to checkedInArray
            document.getElementById("nameTyped").value = "";
            document.getElementById("badgeTyped").value = "";
            document.getElementById("badgeNumTyped").value = "";
        }
        
    }
                                                   );


//This is meant to change the "click to return badge" button into a time that badge was returned. It doesn't work, and I think it's because the DOM element it refers to is not created until after the script loads.
/* document.getElementById("return1").addEventListener("click",
    function () {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        document.getElementById("return1").value = timeNow;
    }
                                                          
                                                          
                                                          );
*/

function deleteRow(r) {
    var i = r.rowIndex;
    var time = new Date();
    var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
//    alert("You picked row " + i)
//    document.getElementById("checkedIn").deleteRow(i);
    checkedInArray[i][4] = timeNow
    document.getElementById("checkedIn").rows[i].childNodes[6].innerHTML = timeNow;
    
    
}
/*
       function deleteRow() {
//            alert("in deleteRow");
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;
            for (var i = 0; i < rowCount; i++) {
//            alert(rowCount);
                var row = table.rows[i];
//            alert(document.getElementById("dataTable").rows[0].innerHTML);
                var chkbox = row.cells[1].childNodes[1];
                if (chkbox !== null && chkbox.checked === true) {
//            alert(chkbox);
                    if (rowCount <= 1) { // limit the user from removing all the fields
                        alert("Cannot Remove all the Passenger.");
                        break;
                    }
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }
            }
*/