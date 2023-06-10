const nomInput = document.querySelector('#nom_ins');
const prenomInput = document.querySelector('#prenom_ins');
const ageInput = document.querySelector('#age_ins');

nomInput.addEventListener("input",function(event){
    const nom = nomInput.value;
    localStorage.setItem('nom_ins',nom);
    document.getElementById("nom_ins").value = localStorage.getItem(nom);
});
prenomInput.addEventListener("input",function(event){
    const prenom = prenomInput.value;
    localStorage.setItem('prenom_ins',prenom);
    document.getElementById("prenom_ins").value = localStorage.getItem(prenom);
});
ageInput.addEventListener("input",function(event){
    const age = ageInput.value;
    localStorage.setItem('age_ins',age);
    document.getElementById("age_ins").value = localStorage.getItem(age);
});