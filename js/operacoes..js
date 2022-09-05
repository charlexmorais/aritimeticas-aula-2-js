const mensagemUsuario = "Quantos adesivos Márcia colou no álbum?";
let pacotes = 0;
let adesivos = 0;
let adesivosrepetidos = 0;
let resultado = 0;

pacotes = prompt("quantos pacotes marcia ganhou ?");
adesivos = prompt("quantos adesivos marcia ganhou ?");
adesivosrepetidos = prompt("quantos adesivos repetidos tinham?");

console.log(parseInt(pacotes * adesivos - adesivosrepetidos));
console.log(mensagemUsuario);
