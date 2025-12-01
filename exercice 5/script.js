// Déclare un tableau

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Parcours le tableau users avec une boucle for

for (let user of users){


    // créer un élément <li> affichant (Nom : [name], Âge : [age])
   const li = document.createElement("li")
   li.textContent = Nom : [name], Âge : [age];
 
   
    //ajouter li dans la ul
    const liste = document.getElementById ("#userList")
    liste.appendChild(li)




}

