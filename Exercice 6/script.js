// 1. Lorsque l'utilisateur saisit une tâche dans le champ input et clique sur le bouton
// "Ajouter" :
// o Récupère le texte saisi.
// o Crée un nouvel élément <li> avec ce texte.
// o Ajoute un bouton "Supprimer" à chaque <li>.
// 2. Ajoute un écouteur d'événement sur chaque bouton "Supprimer" pour :
// o Supprimer la tâche correspondante.

// Sélectionner l'élément input
let taskInput = document.getElementById("taskInput");

// Sélectionner le bouton
const btnAdd = document.getElementById("addTaskBtn");

// Sélectionner la liste
const tasklist = document.getElementById("taskList");

// Evènement
 
btnAdd.addEventListener("click", () => {

  const taskText = taskInput.value;

  //  Je veux ajouter mon texte S'il n'est pas vide
  if (!taskText) {
    alert("TEXTE");
    return;
  }

  // Créer un nouvel élément <li> avec ce texte
  
  let li = document.createElement("li");
  li.textContent = taskText;

  // Ajoute un bouton "supprimer" à chaque li
  
  let btnDelete = document.createElement("button");
  btnDelete.textContent = "Supprimer";

  btnDelete.addEventListener("click", () =>{
    li.remove()
  });

  li.appendChild(btnDelete)
  tasklist.appendChild(li)

  taskInput.value="";

});
