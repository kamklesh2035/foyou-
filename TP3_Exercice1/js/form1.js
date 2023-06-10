function validateForm(){
    var name = document.forms["Myform"]["name"].value;
    var sujet = document.forms["Myform"]["sujet"].value;
    var msg = document.forms["Myform"]["msg"].value;
    var email = document.forms["Myform"]["email"].value;
    console.log(name);
    if(name==""){
        alert("Veillez entrer un nom");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+ --/;

    if(!emailRegex.test(email)){
        alert("L'adresse Email n'est pas valide");
        return false;
    }
    if(sujet == ""){
        alert("Veillez entrer un nom");
        return false;
    }
    if(email == ""){
        alert("Veillez entrer un nom");
        return false;
    }
 }

 var seconds = 90; 
// Début du compte à rebours
var countdown = setInterval(function() {
  // Décrémentation du temps restant
  seconds--;


  var min = Math.floor(seconds / 60);
  var sec = seconds % 60;

  document.getElementById("countdown").innerHTML = min + ":" + (sec < 10 ? "0" : "") + sec;

  // Annulation du compte à rebours lorsque le temps est écoulé
  if (seconds < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = alert("Temps écoulé!");
    document.getElementById("countdown").innerHTML = "0:00";
    document.getElementById("Myform").reset();
    document.getElementById("submit").disabled= true;
  }
}, 1000);

 /* Mise à jour toutes les secondes
var form = document.getElementById("Myform");
form.addEventListener("button", function(event) {
  event.preventDefault();
  clearInterval(countdown); 
  alert("Formulaire soumis !");
  document.getElementById("Myform").reset();
});*/