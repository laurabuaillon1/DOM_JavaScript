// Selectionner le bouton
const button = document.querySelector("#deleteBtn");

// Selectionner la liste des articles
const articles = document.getElementById("#articles");

// Créer un écouteur d'évènement
button.addEventListener("click", () => {
  const liste = document.getElementById("articles");
  const dernier = liste.lastElementChild;
 

  if (dernier){
    dernier.remove()
  }
});



// Correction Nicolas
// btnDelete.addEventListener("click,() => {
// if()
// listeArticles.lastElementChilc.remove()
// })
