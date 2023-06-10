const elements = ["Chocolats", "Bananes", "Pastèque"];

// Récupération de l'élément HTML <ul> par son id
const maListe = document.getElementById("ma-liste");

// Parcours du tableau d'éléments pour créer les <li> correspondants
elements.forEach(element => {
 const li = document.createElement("li");
 li.textContent = element;
 maListe.appendChild(li);
 const br = document.createElement("br");
});

// Classe Animal.
class Animal {
    constructor(nom,age,espèce){
        this.nom = nom;
        this.age = age;
        this.espèce = espèce;
    }

    parler(){
        console.log("Je suis un animal");
    }
}

// Afficher les attributs dans la console du navigateur
const a1 = new Animal("Scooby",20,"Bool-Dog");
console.log(a1);
a1.parler();

//Afficher les attributs dans notre page html
const attributs = [a1.nom,a1.age,a1.espèce];
const p = document.getElementById("animal");
attributs.forEach(attr => {
    const li = document.createElement("li");
    li.textContent = attr;
    p.appendChild(li);
   });
