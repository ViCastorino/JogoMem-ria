(function(){

  //esse laço de repetição é o que puxa as imagens da pasta pelo src
  //detalhe: tive que mudar o nome de cada imagem para um numero, para que pudesse
  //chamar uma de cada vez por aqui

  var imgs = [];
    for (var i=0;1<13;i++){
      var picture =  {src:"Imagens/" + i + ".png",id: i%6};
      imgs.push(picture);
    }console.log(imgs);   
  
    inicio();

  //criei essa função para distribuir as imagens na segunda div de cada classe, ou seja, na face da frente  
  function inicio(){
      var frontFaces = document.getElementsByClassName("front");
        for(var i = 0;i<13;i++){
        var card = document.querySelector("#card" + i);
        card.style.left = i%6 === 0 ? 5 + "px": i % 6 * 165 + 5 + "px";
        card.style.top = i<6 ? 5 + "px": 250 + "px";
        card.addEventListener("click",viraVira,false);
        frontFaces[i].style.background = "url('"+imgs[i].src+"')";
        frontFaces[i].setAttribute("id",imgs[i].id);
      }
  }

  //essa funcçao cria uma classe nova quando acontece um evento
  // serve para fazer a carta virar, mas eu configurei essa nova classe no css
  function viraVira(){
    var faces = this.getElementsByClassName("face");
     faces[0].classList.toggle("turned");
     faces[1].classList.toggle("turned");
  }


}());