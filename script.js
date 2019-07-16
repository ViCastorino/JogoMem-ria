let quadrados = document.querySelectorAll(".caixa");
let imagens = [ 'homiranha','menino','vilao','tiazinha','menina','porquinho'];


function aleatorio(){
    let min = 0;
    let  max = imagens.length -1;
    let i = Math.floor(Math.random(min, max) * (max - min + 1) + min);
    return `Imagens/${imagens[i]}.PNG`;
 
 }


console.log(quadrados);

function mostrar(event){
    console.log('a')
}



function selectionarCarta(event){
    let selecionadas = Array.fill(null)
    selectionadas = event.target
}



for(let quadrado of quadrados){
    quadrado.onclick = function(event){
        for(quadrado of quadrados){
            event.target.quadrado.src = aleatorio()
        }
    };
}

aleatorio();