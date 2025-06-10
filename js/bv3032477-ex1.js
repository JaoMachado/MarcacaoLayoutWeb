/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 04/06/2025
*/
$(document).ready(function () {
    $("h3").click(function () {
        let texto = $("#stringInverter").text();
        let invertido = texto.split("").reverse().join("");
        $(this).text(invertido);
    });
}); 