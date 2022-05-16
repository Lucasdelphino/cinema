
var imagens = ["imag1/avatar.jpg", "imag1/doutor.jpeg", "imag1/maze.jpg", "imag1/pirata.jpg", "imag1/star.jpg", "imag1/juras.jpg"];
var imagematual = 0;

function trocaimagem() {
 imagematual = (imagematual + 1) % 6;
document.querySelector('.gif img'). src = imagens[imagematual];
}
setInterval(trocaimagem, 1500);