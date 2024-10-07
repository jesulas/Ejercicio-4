

console.log("Hello from main");

function sumar() {

    let numeroTurno = document.getElementById("numero");
    let numeroactual = parseInt(numeroTurno.textContent);
    numeroTurno.textContent = (numeroactual + 1).toString().padStart(2, '0');
  }
  
document.getElementById("boton").addEventListener("click", sumar);

function resetear(){
    let numeroTurno = document.getElementById("numero");
    numeroTurno.textContent = (0).toString().padStart(2, '0');
}
document.getElementById("botonreset").addEventListener("click", resetear);

function salto(){
    let numeroTurno = document.getElementById("numero");
    let numeroDeseado = parseInt(document.getElementById("input").value);
    numeroTurno.textContent = (numeroDeseado).toString().padStart(2, '0');
}
document.getElementById("botonsalto").addEventListener("click", salto);
