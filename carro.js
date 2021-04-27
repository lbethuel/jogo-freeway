//carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [4, 5, 3, 4, 6, 2]
let comprimentoCarros = 50;
let alturaCarros = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i += 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i += 1){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosiçãoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i += 1){
  if(passouPorTodaTela(xCarros[i])){
    xCarros[i] = 600
    }
  
  }
}
function passouPorTodaTela(xCarro){
 return xCarro < -50
  
}
