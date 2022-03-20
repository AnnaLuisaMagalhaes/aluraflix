/*var listaFilmes = ["https://resizing.flixster.com/RhfgxABrRaQNDgrf-Py8aOxUEKs=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p4166_p_v8_ak.jpg", "https://resizing.flixster.com/VTyfZjKKcyCwvjprRI25sDx743g=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p6870_p_v8_aa.jpg", "https://resizing.flixster.com/j88wGyBiIDTdZe8fUAGnlkMW8R8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p5638_p_v8_aa.jpg"];

for (var i=0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">");
}*/

function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listaFilmesNaTela(filmeFavorito);

} else {
        console.error("Endereço de filme invalido.");

    }

    document.getElementById("filme").value = "";
} 

var i = 0;
var elementoArray = [];


function listaFilmesNaTela(filmeFavorito  ){
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementoRemover = "<button class= 'butaoDeletar' onClick='this.parentNode.parentNode.removeChild(parentNode);'>Remover</button>"
    var elementoListaFilmes = document.getElementById("listaFilmes");
     elementoListaFilmes.innerHTML = "<div id='" + i +"' class='filmesButao'>" + elementoListaFilmes.innerHTML + elementoFilmeFavorito + elementoRemover + "</div>";

     i++; 

     //elementoArray.push(elementoFilmeFavorito);
     console.log(elementoArray);
}

