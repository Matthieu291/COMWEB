function ajaxRequest(type, url, cb){
    let req = new XMLHttpRequest(); 
    req.open(type, url); 
    req.onload = () => {
        switch(req.status){
            case 200:
            case 201 :console.log().cb(req.responseText);
            break; 
            default:console.log('HTTP error:' + req.status);
        }
    }
    req.send(); 
}

ajaxRequest('GET', 'timestamp.php'); 
