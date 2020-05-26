
let websocket = createWebSocket();

let login = prompt("Entrez votre login :"); 

function createWebSocket () {
  websocket1 = new WebSocket('ws://localhost:12345');
  let button = document.getElementById('envoyer'); 
  button.addEventListener('click', sendMessage); 
  return websocket1
}

function sendMessage (){
  let mssg = document.getElementById("phrase").value;
  document.getElementById("phrase").value="";
  websocket.send(login+" :"+mssg);  
}
  
websocket.onmessage = function(event) {
  let precmssg = document.getElementById("chat");
  precmssg.setAttribute("disabled", false); 
  precmssg.append(event.data+"\n"); 
  precmssg.setAttribute("disabled",true); 
}


