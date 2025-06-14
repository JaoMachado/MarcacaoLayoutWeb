/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 13/06/2025
*/

$(document).ready(function() {
    var vetorStrings = [
        "Zero", "Um", "Dois", "Três", "Quatro", 
        "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"
    ];

    $('#btnBuscar').click(function() {
        var valorDigitado = document.forms["formVetor"]["numero"].value;

        var numero = 0;
        var valido = true;

        if (valorDigitado === "") {
            valido = false;
        } else {
            for (var i = 0; i < valorDigitado.length; i++) {
                var cod = valorDigitado.charCodeAt(i);
                if (cod >= 48 && cod <= 57) {
                    numero = numero * 10 + (cod - 48);
                } else {
                    valido = false;
                    break;
                }
            }
        }

        var resultado = document.getElementById("resultado");

        if (!valido || numero < 0 || numero > 10) {
            resultado.innerHTML = "Por favor, digite um número válido entre 0 e 10.";
            resultado.className = "text-danger";
        } else {
            resultado.innerHTML = "Posição " + numero + ": " + vetorStrings[numero];
            resultado.className = "text-success";
        }
    });
});

