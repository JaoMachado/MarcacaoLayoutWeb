/**
 * Author: João Pedro Machado Silva - BV3032477 
 * Data da Implementação: 08/05/2025
*/

console.log("Hello Console LOG!!");

function myFunction(){
    //document.write("Hello JavaScript!!");
    var mensagem = "Resultado";
    var separador = ": ";

    var x = 5;
    var y = 6;
    var z = x + y;

    var cars = ["Saab", "Volvo", "BMW"];

    window.alert(mensagem + separador + z + " -> " + cars[1]);
};

function multiplicar(valor1, valor2){
    return valor1 * valor2;
}

myFunction();

console.log("Multiplicação = ", multiplicar(6, 7) );