// Do your work in this file.


function addDivView() {
    var DivView = document.createElement("div");
    DivView.className = "view";
    document.body.appendChild(DivView);
}

function addDivGrass() {
    var DivGrass = document.createElement("div");
    DivGrass.className = "grass";
    document.body.appendChild(DivGrass);
    document.body.getElementsByClassName("view")[0].appendChild(DivGrass);
}

function addDivSun() {
    var DivSun = document.createElement("div");
    DivSun.className = "sun";
    document.body.appendChild(DivSun);
    document.body.getElementsByClassName("view")[0].appendChild(DivSun);
}

function addDivMountain() {
    var DivMountain = document.createElement("div");
    DivMountain.className = "mountain";
    document.body.appendChild(DivMountain);
    document.body.getElementsByClassName("view")[0].appendChild(DivMountain);
}

// for (var t = 0; t < 5; t++) {
//     addDivRay();
// }

addDivView()
addDivGrass()
addDivSun()
addDivMountain()