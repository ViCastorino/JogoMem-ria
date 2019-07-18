function mostrar(event){
    console.log('a')
}


  // CARO INTERPRETADOR RODA ESSE CÓDIGO PELOAMORDEDEUS

  let cardList = document.querySelectorAll('.caixa')
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

for(let quadrado of quadrados){
    quadrado.onclick = function(event){
        for(quadrado of quadrados){
            event.target.quadrado.src = aleatorio()
        }
    };
}

 //aleatorio();    
//      let imgs = ["homiranha.png","menina.png","porquinho.png","tiazinha.png","menino.png","vilao.png"];
//      function aleatorio(lista){
//      let valor;
//      let indice;   
//      let min = 0;
//      let  max = imgs.length -1;
//      for(let i = lista.length - 1){
//      indice = Math.floor(Math.random(min, max) * (max - min + 1) + min);
//      valor = lista[i]; 
//      lista[i] = lista[indice]; 
//      lista[indice] = valor;
//      }
//      return lista;
//   }











