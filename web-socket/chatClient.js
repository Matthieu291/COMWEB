
let websocket;


let login = prompt("Entrez votre login :"); 

function createWebSocket () {
  websocket = new WebSocket('ws://localhost:12345');

  websocket.onopen = function(event) {
    let text = document.getElementById("phrase"); 
    console.log("Connexion établie");
    websocket.send('Hi server !'); 
  }

  websocket.onmessage = function(event) {
    console.log('Message reçu : ' + event.data);
  }

  websocket.onclose = function(event) {
    console.log('Communication terminée');
  }
  
  let button = document.getElementById('envoyer');
  button.addEventListener("cliked", sendMessage); 
}

function sendMessage (){
  console.log("Tu es arrivé a la fonction sendMessage"); 
}

createWebSocket(); 
