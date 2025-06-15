/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

$(document).ready(function () {
    $('#btnVerificar').click(function () {
        // Obtendo os valor dos campos
        var campo1 = document.getElementById("campo1").value;
        var campo2 = document.getElementById("campo2").value;
        var resultado = document.getElementById("resultado");

        // Criando variaveis para controlar se está vazio ou não
        var vazio1 = true;
        var vazio2 = true;

        // Percorrendo o campo para verificar se está vazio
        for (var i = 0; i < campo1.length; i++) {
            if (campo1.charAt(i) !== ' ') {
                vazio1 = false;
                break;
            }
        }

        // Percorrendo o campo para verificar se está vazio
        for (var j = 0; j < campo2.length; j++) {
            if (campo2.charAt(j) !== ' ') {
                vazio2 = false;
                break;
            }
        }

        // Verificando se algum está vazio, se estiver já exibe o aviso e para a função
        if (campo1 === "" || campo2 === "" || vazio1 || vazio2) {
            resultado.innerHTML = "Nenhum dos campos pode ficar em branco.";
            resultado.className = "text-danger";
            return;
        }

        // Variavel para guardar se são iguais ou não
        var iguais = true;
        
        // Faz a verificação, se tiverem tamanhos diferentes, já não são iguais.
        if (campo1.length !== campo2.length) {
            iguais = false;
        } else {
            // Percorre o campo verificando se o outro tem o elemento igual no mesmo índice
            for (var k = 0; k < campo1.length; k++) {

                if (campo1.charAt(k) !== campo2.charAt(k)) {
                    iguais = false;
                    break;
                }
                
            }
        }
        
        // Verifica a igualdade e exibe a frase de acordo ao resultado
        if (iguais) {
            resultado.innerHTML = "Os textos são idênticos!";
            resultado.className = "text-success";
        } else {
            resultado.innerHTML = "Os textos NÃO são idênticos.";
            resultado.className = "text-danger";
        }
    });
});

