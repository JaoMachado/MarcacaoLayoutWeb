/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function juntarStrings() {
    let array = $('#strings').val().split(',');
    $('#resultado').text(array.join(';'));
}