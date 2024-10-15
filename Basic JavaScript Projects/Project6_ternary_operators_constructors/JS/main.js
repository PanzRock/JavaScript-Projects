//A function with HTML and JS using a ternary operations with input from the browser
function Voter_Function() {
    var Age = document.getElementById("Age").value;
    var Can_vote = Age < 18 ? "You are below 18 years of age and not allowed " : "You are above 18 years of age and good ";
    document.getElementById("Voter").innerHTML = Can_vote + "to vote."; 
}

//A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Arlott = new Vehicle("Ferrari", "Leopard", 2030, "Red");
var Gatot = new Vehicle("Ford", "Mustang GT", 2031, "Aqua Blue");
var Chou = new Vehicle("Toyota", "Avanzer", 2090, "Pink");

//A function to display the results of the constructors in the HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Arlott drives a " + Arlott.Vehicle_Color + "-colored " + Arlott.Vehicle_Model + " manufactured in " + Arlott.Vehicle_Year;
}

//A nested function
function add_Strings() {
    var start_string = "Deal or";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("No Deal");
    document.getElementById("Nested_Function").innerHTML = start_string;
}