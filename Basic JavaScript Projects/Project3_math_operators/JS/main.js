function addition() {
    var add = 4+3;
    document.getElementById("Add").innerHTML = "4 + 3 = " + add;
}

function subtraction() {
    var sub = 5-1;
    document.getElementById("Sub").innerHTML = "5 - 1 = " + sub;
}

function multiplication() {
    var mult = 25*100;
    document.getElementById("Mlt").innerHTML = "25 x 100 = " + mult;
}

function division() {
    var divide = 25/5;
    document.getElementById("Div").innerHTML = "25 / 5 = " + divide;
}

function random() {
    document.getElementById("Ran").innerHTML = Math.random()*15;
}

function modulus_operator() {
    var modulus = 24 % 5;
    document.getElementById("Mod").innerHTML = "When you divide 24 by 5 you have a remainder of: " + modulus;
}

function Increment() {
    var value = document.getElementById("IncrementText").innerHTML;
    value++;
    document.getElementById("IncrementText").innerHTML = value;
}

function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML;
    value--;
    document.getElementById("DecrementText").innerHTML = value;
}