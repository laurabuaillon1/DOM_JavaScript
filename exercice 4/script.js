// 1.Déclare un tableau vide elements = [] qui stockera les éléments ajoutés.
// 2. Ajoute un écouteur d'événement sur le bouton ayant l'ID addItemBtn.
// 3. Lorsqu'on clique sur le bouton :
// o Ajoute un élément au tableau avec le texte "Élément X" (où X est le numéro
// d'ordre dans le tableau).
// o Crée un nouvel élément <li> avec ce texte et ajoute-le dans la liste <ul>
// ayant l'ID liste.

// Déclarer un tableau vide

const elements = [];

//Selectionner le button

const button = document.getElementById("addItemBtn");

// Ajouter un écouteur d'évènement sur le bouton id="addItemBtn"

button.addEventListener("click", () => {
  // Ajoute un élément au tableau (texte "Élément X")
  const texte = "Elément X";

  //Créer une liste <li> avec le texte
  const li = document.createElement("li");
  li.textContent = "Element X";

  //  Ajouter <li> dans la <ul> ayant l'id "liste"
  const liste = document.getElementById("liste");
  liste.appendChild(li);
});
