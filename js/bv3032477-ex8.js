/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 13/06/2025
*/

$(document).ready(function() {
    // Criando o vetor
    var vetorStrings = [
        "Zero", "Um", "Dois", "Três", "Quatro", 
        "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"
    ];

    $('#btnBuscar').click(function() {
        // Obtendo o valor em texto
        var valorDigitado = document.forms["formVetor"]["numero"].value;
        var resultado = document.getElementById("resultado");

        // Variaveis para transformar o valor que esta em texto para inteiro 
        var numero = 0;
        var valido = true;

        // Transformando o valor pra inteiro sem o parseInt()
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

        // Verificando e exibindo o resultado/frase correspondente.
        if (!valido || numero < 0 || numero > 10) {
            resultado.innerHTML = "Por favor, digite um número válido entre 0 e 10.";
            resultado.className = "text-danger";
        } else {
            resultado.innerHTML = "Posição " + numero + ": " + vetorStrings[numero];
            resultado.className = "text-success";
        }
        
    });
});

