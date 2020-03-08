var apiUrl = 'https://jsonplaceholder.typicode.com/todos/';
var count =0;

function verificaOnline(){
    var xhttp = new XMLHttpRequest(); 
    xhttp.open("GET", apiUrl +count , true);
    xhttp.onreadystatechange = function() {
        console.log(this.responseText);
    };
    xhttp.send();
}

setInterval(function() { 
            console.log(apiUrl +count)
            count++;
            verificaOnline();
}, 1000);
