  // CARO INTERPRETADOR RODA ESSE CÓDIGO PELOAMORDEDEUS

let cardList = document.querySelectorAll('.card')
let selecionados = [];
let i = 0


function saoIguais(vetor){
  console.log(vetor)
}

//RETIRAR O FILTRO QUE ESCURECE A IMG
function mostrarCard(ev) {
    ev.target.classList.toggle('showCard');
}

//ARMAZENAR OS DOIS ELEMENTOS CLICADOS E VERIFICA-LOS
function selecionarCard(ev){

  // while(typeof(selecionados[0]) != "string" && typeof(selecionados[1]) != "string"){
  // //   // SE OS DOIS PRIMEIROS ELEMENTOS DO VETORES NÃO FOREM DO TIPO STRING, SE NÃO
  // //   // TIVER O ENDEREÇO ARMAZENADO NELES, CONTINUAR ESPERANDO PARA Q ELES SEJAM PREENCHIDOS
  
  // // }

  selecionados[i] = ev.target.src
  i+=1;
  console.log(i , selecionados)
}

//EVENTOS DE CLIQUE PARA A CLASSE .CARD
for (let card of cardList) {
  card.onclick = function(){
  mostrarCard(event);
  selecionarCard(event);

  }
}

