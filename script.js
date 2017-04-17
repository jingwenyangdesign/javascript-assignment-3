// Do your work in this file.

function addDivView() {
    var DivView = document.createElement("div");
    DivView.className = "view";
    document.body.appendChild(DivView);
}

function addDivGrass() {
    var DivGrass = document.createElement("div");
    DivGrass.className = "grass";
    document.body.getElementsByClassName("view")[0].appendChild(DivGrass);
}

function addDivSun() {
    var DivSun = document.createElement("div");
    DivSun.className = "sun";
    document.body.getElementsByClassName("view")[0].appendChild(DivSun);
}

addDivView();
addDivGrass();
addDivSun();

var t = 1;
while (t < 6) {
    var DivRay = document.createElement("div");
    DivRay.className = "ray-" + t;
    document.body.getElementsByClassName("sun")[0].appendChild(DivRay);
    t++;
}

function addDivMountain() {
    var DivMountain = document.createElement("div");
    DivMountain.className = "mountain";
    document.body.getElementsByClassName("view")[0].appendChild(DivMountain);
}

function addDivMountaintop() {
    var DivMountaintop = document.createElement("div");
    DivMountaintop.className = "mountain-top";
    document.body.getElementsByClassName("mountain")[0].appendChild(DivMountaintop);
}

addDivMountain();
addDivMountaintop();

var m = 1;
do {
    var DivMountaincap = document.createElement("div");
    DivMountaincap.className = "mountain-cap-" + m;
    document.body.getElementsByClassName("mountain-top")[0].appendChild(DivMountaincap);
    m++;
} while (m < 4);