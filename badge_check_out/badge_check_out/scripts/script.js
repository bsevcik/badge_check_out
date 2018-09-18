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
//var time = new Date();
//var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
var name = document.getElementById("nameTyped").value;
var badge = document.getElementById("badgeTyped").value;
var badgeNum = document.getElementById("badgeNumTyped").value;
var returnButton = "</td><td><input type='button' class='return' value='Click to Return Badge'></td>";

var checkedInArray = [
    ['<strong>Name</strong>', '<strong>Badge Type</strong>', '<strong>Badge Number</strong>', '<strong>Time Checked Out</strong>', '<strong>Return</strong>']
//    ["Array 1-0", "1-1", "1-2", "1-3", "</td><td><input type='button' class='return' value='Click to Return Badge'></td>"]
];


function clearTable() {
    "use strict";
    for (var i = 0; i < document.getElementById("checkedIn").rows.length; i++) {
        document.getElementById("checkedIn").deleteRow(0);
    }
}


function displayArray() {
    "use strict";
    var i = 0
    for (clearTable(); i < checkedInArray.length; i++) {
        document.getElementById("checkedIn").innerHTML += "<tr><td>" + checkedInArray[i][0] + "</td> <td>" + checkedInArray[i][1] + "</td> <td>" + checkedInArray[i][2] + "</td><td>" + checkedInArray[i][3] + "</td><td>" + checkedInArray[i][4] + "</td></tr>";
    }
}


document.getElementById("checkIn").addEventListener("click",
    function () {
        "use strict";
        var time = new Date();
        var timeNow = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        if (document.getElementById("nameTyped").value === "" || document.getElementById("badgeTyped").value === "" || document.getElementById("badgeNumTyped").value === "") {
            window.alert("You need to fill out all three forms");
        } else {
            checkedInArray.push([document.getElementById("nameTyped").value, document.getElementById("badgeTyped").value, document.getElementById("badgeNumTyped").value, timeNow, "</td><td><input type='button' class='return' value='Click to Return Badge'></td>"]);
            clearTable();
            displayArray();
            
/*            document.getElementById("checkedIn").innerHTML += "<tr><td>" + name + "</td> <td>" + badge + "</td> <td>" + badgeNum + "</td><td>" + timeNow + '</td><td><input type="button" class="return" value="Click to Return Badge"></td>';
*/
            
            document.getElementById("nameTyped").value = "";
            document.getElementById("badgeTyped").value = "";
            document.getElementById("badgeNumTyped").value = "";
        }
        
    }
                                                   );



/*document.getElementsByClassName("return1").addEventListener("click",
    function () {
        "use strict";
        document.getElementsByClassName("return1").value = timeNow;
    }
                                                          
                                                          
                                                          );
*/