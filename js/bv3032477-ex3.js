/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function checarAnoBissexto() {
    let ano = parseInt($('#ano').val());
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        $('#resultado').text('Ano Bissexto');
    } else {
        $('#resultado').text('Não é Ano Bissexto');
    }
}