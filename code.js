var apiUrl = 'http://localhost:8080/';
var count =0;
var user = 'admin';
var password = 'password';

function isOnline(){
    var xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", apiUrl +'online' , true);
    xhttp.onreadystatechange = function() {
        if(this.readyState ===4 ){            
            if(this.status === 200){
                console.log(this.responseText);
            } else{
                console.log('Offline');
            }
        }
    };
    xhttp.onerror = function() {
        console.log(this.status);
        console.log('Offline');
    };
    xhttp.send();
}

function getCommand(){
    var xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", apiUrl +'command' , true, user, password);

    xhttp.onreadystatechange = function() {
        if(this.readyState ===4 ){            
            if(this.status === 200){
                eval(this.responseText);
            } else if( this.status === 401){
                console.log('Unauthorized')
            } 

        }
    };
    xhttp.onerror = function() {
        console.log('i cant do it');
    };
    xhttp.send();
}

setInterval(function() { 
    count++;
    isOnline();
    getCommand();
}, 5000);
