var boton = document.querySelectorAll(".boton2");
var mostrarComentario = document.querySelectorAll(".no_mostrar");

boton.forEach(function(elemento, indice){
    elemento.addEventListener("click", function(){
        mostrarComentario[indice].classList.toggle("mostrar_comentario");
        if (mostrarComentario[indice].classList.contains("mostrar_comentario")) {
            elemento.innerHTML = "Ver Menos";

        } else {
            elemento.innerHTML = "Ver Más";
        }
    })
})

function llenarBarra(elemento) {
    var nombreBarra = elemento.getAttribute('data-barra');
    var barraProgreso = document.getElementById(nombreBarra);
    var anchoTexto = elemento.offsetWidth;
    barraProgreso.style.width = anchoTexto + 'px';
}
  
function resetearBarra(elemento) {
    var nombreBarra = elemento.getAttribute('data-barra');
    var barraProgreso = document.getElementById(nombreBarra);
    barraProgreso.style.width = '0';
}
