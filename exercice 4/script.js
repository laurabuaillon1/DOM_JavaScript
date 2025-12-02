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
  const x = elements.length + 1 ;

  // Ajoute un élément au tableau (texte "Élément X")
  const texte = "Element " + x ;
  elements.push(texte);
  console.table(elements)

  //Créer une liste <li> avec le texte
  const li = document.createElement("li");
  li.textContent = texte;

  //  Ajouter <li> dans la <ul> ayant l'id "liste"
  const liste = document.getElementById("liste");
  liste.appendChild(li);
});

