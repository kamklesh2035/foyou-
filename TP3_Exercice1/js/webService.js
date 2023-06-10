var myHeaders = new Headers();
myHeaders.append("Content-Type","application/json")

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=sold", requestOptions)
  .then(response => response.text())
  .then(result=>{
    document.getElementById("result").textContent = result;})
  .catch(error => console.log('error', error));