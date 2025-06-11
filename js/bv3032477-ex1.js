/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 04/06/2025
*/

function inverterString(str){
    var invertido = "";

    for (var i = str.length - 1; i >= 0; i--) {
        invertido += str[i];
    }
    return invertido;
}

$(document).ready(function () {
    $("h3").click(function () {
        var texto = $("#stringInverter").text();

        $(this).text(inverterString(texto));
    });
}); 