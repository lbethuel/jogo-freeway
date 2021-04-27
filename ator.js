//codigo do ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(LEFT_ARROW)){xAtor -= 3}
  if(keyIsDown(RIGHT_ARROW)){xAtor += 3}
  if(keyIsDown(UP_ARROW)){yAtor -= 3}
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover())
    yAtor += 3}
}

function verificaColisao (){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
      if(colisao){ 
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
        if (meusPontos > 0){meusPontos -= 1
      }
    }
        
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366
  
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255,255,0))
  text(meusPontos, width/5, 27)
  
}

function marcaPonto(){
  if(yAtor < 15){meusPontos += 1;
                 somDoPonto.play();
                 voltaAtorParaPosicaoInicial();
                }
  
}

function podeSeMover(){
  return yAtor < 366
}