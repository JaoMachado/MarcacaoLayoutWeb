/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

$(document).ready(function () {
    $('#btnVerificar').click(function () {
        var campo1 = document.getElementById("campo1").value;
        var campo2 = document.getElementById("campo2").value;
        var resultado = document.getElementById("resultado");

        var vazio1 = true;
        var vazio2 = true;

        for (var i = 0; i < campo1.length; i++) {
            if (campo1.charAt(i) !== ' ') {
                vazio1 = false;
                break;
            }
        }

        for (var j = 0; j < campo2.length; j++) {
            if (campo2.charAt(j) !== ' ') {
                vazio2 = false;
                break;
            }
        }

        if (campo1 === "" || campo2 === "" || vazio1 || vazio2) {
            resultado.innerHTML = "Nenhum dos campos pode ficar em branco.";
            resultado.className = "text-danger";
            return;
        }

        var iguais = true;
        
        if (campo1.length !== campo2.length) {
            iguais = false;
        } else {
            for (var k = 0; k < campo1.length; k++) {
                if (campo1.charAt(k) !== campo2.charAt(k)) {
                    iguais = false;
                    break;
                }
            }
        }

        if (iguais) {
            resultado.innerHTML = "Os textos são idênticos!";
            resultado.className = "text-success";
        } else {
            resultado.innerHTML = "Os textos NÃO são idênticos.";
            resultado.className = "text-danger";
        }
    });
});

