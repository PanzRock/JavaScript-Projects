//A function using a While Loop
function count_to_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//A function using a for loop
var Heroes = [
    "Wong Fei Hong",
    "Ip Man",
    "Buce Lee",
    "Chen Zhen",
    "Wong Ki Ying",
    "Hou Yuanjia",
];
var content = "";
var y;
function for_Loop() {
    for (y = 0; y < Heroes.length; y++) {
        content += Heroes[y] + "<br>";
    }
    document.getElementById("List_of_Heroes").innerHTML = content;
}

//A function with an array
function color_array() {
    var Colors = [];
    Colors[1] = "Blue";
    Colors[2] = "Green";
    Colors[3] = "Red";
    Colors[4] = "Yellow";
    Colors[5] = "Purple";
    Colors[6] = "Pink";
    document.getElementById("Array").innerHTML = "My favorite color is " + Colors[2] + ".";
}

//Creating an object with the let keyword
function weapon() {
    let weapon = {
        gun: "AK-47",
        sword:"Excalibur",
        dagger: "Carnwennan",
        spear: "Trident of Posiedon"
    };
    document.getElementById("weapon").innerHTML = "Your ultimate weapon will be the " + weapon.sword + ".";
}