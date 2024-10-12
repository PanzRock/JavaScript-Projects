function my_Dictionary() {
    var dinosaurs = {
        Name: "Tyrannosaurus Rex",
        Species: "Carnivore",
        Gender: "Male",
        Height: "Seven meters",
    };
    delete dinosaurs.Height;
    document.getElementById("Dictionary").innerHTML = dinosaurs.Height;
}