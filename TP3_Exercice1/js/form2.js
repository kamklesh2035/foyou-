function validateInput(event){
    console.log(event);
    var value = event.target.value;
 
    if(value==""){
        alert("Validation du formulaire echouéé");
        event.preventDefault();
    }

 }

function validateInputEmail(event){
    var email = event.target.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+ --/;
    if(!emailRegex.test(email)){
        alert("L'adresse Email n'est pas valide");
        event.preventDefault();
    }
}