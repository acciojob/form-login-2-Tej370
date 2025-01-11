//your JS code here. If required.
function display() {
    let fName = document.getElementById("First Name").value;
    let lName = document.getElementById("Last Name").value;
    let number = document.getElementById("Phone Number").value;
    let email = document.getElementById("Email ID").value;
 
    let message = "First Name: " + fName + " " +
                  "Last Name: " + lName + " " +
                  "Phone Number: " + number + " " +
                  "Email ID: " + email;
 
    alert(message);
}