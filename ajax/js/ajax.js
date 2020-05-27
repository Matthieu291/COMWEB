function ajaxRequest(type, url, cb){
    let req = new XMLHttpRequest(); 
    req.open(type, url); 
    req.onload = () => {
        switch(req.status){
            case 200:
            case 201 ://console.log().cb(req.responseText);
            cb(req.responseText);
            break; 
            default://console.log('HTTP error:' + req.status);
            cb(req.status); 
        }
    }
    req.send(); 
};

function print(date) {
    document.getElementById("timestamp").innerHTML = '<span class="material-icons">watch_later</span>' +date; 
    setTimeout(ajaxRequest('GET','php/timestamp.php',print),1000);
}

function print_error(error) {
    let message; 
    switch(error){
        case 400:
            message = 'Erreur 400 : Requête incorrecte';
            break; 
        case 401:
            message ='Erreur 401 : Erreur Authentification'; 
            break; 
        case 403:
            message ='Erreur 403 : Accès refusé';
            break; 
        case 404:
            message ='Erreur 404 : Page non trouvée';
            break; 
        case 500:
            message ='Erreur 500 : Erreur Serveur'; 
            break; 
        case 503:
            message ='Erreur 503 :Service indisponible'; 
            break;
    }
    let err = document.getElementById('errors'); 
    err.innerHTML='<span class = "material-icons></span>' +text;
    err.style.display =null;  
}

ajaxRequest('GET', 'php/timestamp.php',print);
 
let time = setInterval(timer,1000); 

function timer(){
    ajaxRequest('GET','php/timestamp.php',display);
}

function display (response){
    document.getElementById('timestamps').innerHTML = "<i class ='material-icons'>watch_later</i>"+"<strong>"+response+"</strong>"; 
}
