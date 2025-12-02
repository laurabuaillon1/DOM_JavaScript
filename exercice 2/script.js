// Instructions (fichier script.js) :
// 1. Crée un élément <ul> dans la page et ajoute-le dans la <div> ayant l'ID conteneur.
// 2. À l'intérieur de la Liste, ajoute trois éléments <li> avec les textes suivants :
// o "Apprendre JavaScript"
// o "Pratiquer la manipulation du DOM"
// o "Créer un projet".

// Création de la div
const div = document.getElementById("conteneur");

// creation de ul
const ul = document.createElement("ul");

// Mes trois éléments li
let li = document.createElement("li");
li.textContent = "Apprendre JavaScript";
ul.appendChild(li);

let liNumeroDeux = document.createElement("li");
liNumeroDeux.textContent = "Pratiquer la manipulation du DOM";
ul.appendChild(liNumeroDeux);

let liNumeroTrois = document.createElement("li");
liNumeroTrois.textContent = "Créer un projet";
ul.appendChild(liNumeroTrois);

// affichage final
div.appendChild(ul);
