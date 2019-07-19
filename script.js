
let cardList = document.querySelectorAll('.carta');
  let selecionados = [];
  let i = 0;
  let lista = 0;
  let imgs = ["homiranha.png","menina.png","porquinho.png","tiazinha.png","menino.png","vilao.png"];
  
  // function inserir(){   
  // let min = 0;
  // let  max = 12;
  //   for(let j = 0; j <= max; j++){
  //     let indice = Math.floor(Math.random(min, max) * (max - min + 1) + min);
  //     cardList[j].style.backgroundImage = imgs[indice]; 
  //   }
  // }
  
function embaralhar( lista ){
  let valor;
  let indice;

    for (let v = lista.length -1;v!==0;v --){
      let indice = Math.floor(Math.random() * v);
      valor = lista[v];
      lista[v] = lista[indice];
      lista[indice] = valor;
    }
    return lista;
}

let imagens = imgs . concat (imgs);
imagens = embaralhar (imagens);


function abrir(carta){
  carta.backgroundImage = `url('Imagens/${imagens[Number(carta.id)]}')`;
  carta.onclick = null;
}

function  travarCliques () {
  for (let carta in cardList) {
      carta.onclick  =  null;
  }
}

function  destravarCliques () {
  for (let carta in cardList) {
      if ( ! cardList.classList.contains ( " correta " )) {
        return (carta);
      }
  }
}

function  travarCliques () {
  for (let carta in cardList) {
      carta.onclick  =  null;
  }
}
for (carta in cardList) {
  abrir(carta);
}