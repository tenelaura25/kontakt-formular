

const form = document.querySelector('form');

    // Quand on submit
    form.addEventListener("submit", (event) => {
        // On empêche le comportement par défaut
        event.preventDefault();
        console.log("Il n’y a pas eu de rechargement de page");

         // On récupère les deux champs et on affiche leur valeur
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const film=document.getElementById("films").value;
    const baliseAccepter = document.getElementById("accepter").checked;
    
    let baliseCouleur = document.querySelectorAll('input[name="couleur"]')
    let couleur = ""
    for (let i = 0; i < baliseCouleur.length; i++) {
    if (baliseCouleur[i].checked) {
        couleur = baliseCouleur[i].value
        break
    }
   }
   //on fait la verification pour savoir si les champs sont vide ou pas
   if(nom === "")
   {
    console.log("le champ est vide")
   }
   else { console.log("le champ n'est pas vide")}

   //on peut l'ecrire aussi de cette facon pour verifier si les champs sont vides

  nom.addEventListener('change', (event) => {
    const valeurNom = event.target.value;
    if (valeurNom === "") {
        console.log('Le champ nom est vide');
    } else {
        console.log('Le champ nom est rempli');
    }
});

    console.log(couleur) // affiche la valeur du radio coché
    console.log(baliseAccepter); // affiche true ou false
    console.log(nom);
    console.log(email);
    console.log(film);
});

