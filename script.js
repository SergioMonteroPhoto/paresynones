/*
// Entrada de datos

var jugador1;
var jugador2;

document.write('Vamos a jugar a Pares y Nones');



var jugador1 = prompt('jugador 1, introduce un número del 1 al 5');
var jugador2 = prompt('jugador 2, introduce un número del 1 al 5');
var jugador1 = Number(jugador1);
var jugador2 = Number(jugador2);

var suma = jugador1 + jugador2;
document.write(suma);

if(suma%2===0){
    document.write('Ha ganado el Jugador 1')
}else{
    document.write('Ha ganado el jugador 2')
}
*/

document.write('vamos a jugar a pares y nones. El jugador 1 siempre elige nones y el jugador 2 siempre elige pares <br>');
var tiradaJugador = prompt('Jugador 1 dinos un numero del 1 al 5');
document.write('El jugador 1 ha sacado = '+ tiradaJugador + '<br>');
var tiradaJugador2 = prompt('Jugador2 dinos un numero del 1 al 5');
document.write('El jugador 2 ha sacado = '+ tiradaJugador2 );
tiradaJugador = Number(tiradaJugador);
tiradaJugador2 = Number(tiradaJugador2);
var suma = tiradaJugador + tiradaJugador2;
document.write('La suma de jugadas es = ' + suma+ '<br>');
if(suma % 2 === 0){
   document.write('El jugador 2 ha ganado <br>');
}else{
  document.write('El jugador 1 ha ganado <br>'); 
}

