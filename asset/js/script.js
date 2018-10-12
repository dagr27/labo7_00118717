var container = document.getElementById("c1");
container.innerText="Hola Mundo";
container.style.backgroundColor="#000000";
container.style.color="#1cb723";
container.style.width ="200px";
container.style.height ="200px";
container.innerHTML = "<input type='text' placeholder='Escriba el texto aqui'>";

var containers = document.getElementsByClassName("c2");

for(let x of containers){
    x.style.backgroundColor="#009999";
    x.innerHTML = "<input type='text' placeholder='Escriba el texto aqui'>";
}

var botn = document.getElementById("btn-click");
botn.onclick = function(evt) 
    { 
        alert("Hola mundo"); 
    }
var btnCopy  = document.getElementById("btnCopy");
btnCopy.onclick = function(evt) 
    { 
        let msj = document.getElementById('textMsj').value;
        document.getElementById('showMsj').innerText = msj;
    }