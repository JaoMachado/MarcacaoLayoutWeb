/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function checarAnoBissexto(ano) {
    var ano = parseInt($('#ano').val());

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return "Ano Bissexto";
    } else {
        return "Não é Ano Bissexto";
    }
}

function mostrarResultado(){
    var ano = parseInt($('#ano').val());

    $('#resultado').text(checarAnoBissexto(ano));
}