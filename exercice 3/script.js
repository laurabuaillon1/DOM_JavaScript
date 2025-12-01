const button = document.querySelector("#deleteBtn");
const articles = document.getElementById("#articles");

button.addEventListener("click", () => {
  const liste = document.getElementById("articles");
  const dernier = liste.lastElementChild;
 

  if (dernier){
    dernier.remove()
  }
});

