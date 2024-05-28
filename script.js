
let kleineplant = document.querySelector("#plantje")

const plantbutton = document.getElementById('plantKnop');
const voedingbutton = document.getElementById('voedingKnop');
const waterGeluid = document.getElementById('waterSound'); /* stack overflow */

let plantStatus = 0;

const plantjeAfbeeldingen = [
    "images/plantjekiem.png",
    "images/plantjeklein.png",
    "images/plantjemiddel.png",
    "images/plantjegrootst.png",
];

const bloemetjeAfbeeldingen = [
    "images/bloemetjekiem1.png",
    "images/bloemetjekiem2.png",
    "images/bloemetjeklein.png",
    "images/bloemetjemiddel.png",
    "images/bloemetjegrootst.png"
];

function groeiPlant() {
    if (plantStatus < plantjeAfbeeldingen.length) {
        kleineplant.src = plantjeAfbeeldingen[plantStatus];
        plantStatus = plantStatus + 1;
        waterGeluid.play(); /* stack overflow */
    } else {
        kleineplant.src = "images/plantjegrootst.png";
    }
}


function bloeiPlant() {
    if (plantStatus < bloemetjeAfbeeldingen.length) {
        kleineplant.src = bloemetjeAfbeeldingen[plantStatus];
        plantStatus = plantStatus + 1;
    }
}

plantbutton.addEventListener('click', groeiPlant)
voedingbutton.addEventListener('click', bloeiPlant)