var inp1 = document.getElementById("fname");
var inp2 = document.getElementById("lname");
var inp3 = document.getElementById("contact");
var inp4 = document.getElementById("password");

function register() {
    console.log("NAME:" + inp1.value + " " + inp2.value)
    console.log("EMAIL OR PHONE: " + inp3.value)
    console.log("PASSWORD:" + inp4.value)
}