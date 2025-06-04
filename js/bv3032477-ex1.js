
$(document).ready(function () {
    $("h3").click(function () {
        let texto = $("#stringInverter").text();
        let invertido = texto.split("").reverse().join("");
        $(this).text(invertido);
    });
}); 