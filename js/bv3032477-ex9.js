/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

$(document).ready(function () {
    $('#btnVerificar').click(function () {
        const texto1 = $('#campo1').val().trim();
        const texto2 = $('#campo2').val().trim();
        const resultado = $('#resultado');

        if (texto1 === '' || texto2 === '') {
            resultado.text('Nenhum dos campos pode ficar em branco.').removeClass('text-success').addClass('text-danger');
            return;
        }

        if (texto1 === texto2) {
            resultado.text('Os textos são idênticos!').removeClass('text-danger').addClass('text-success');
        } else {
            resultado.text('Os textos NÃO são idênticos.').removeClass('text-success').addClass('text-danger');
        }
    });
});

