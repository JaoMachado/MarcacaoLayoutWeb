/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function mostrarData() {
    var hoje = new Date();
    var dia = hoje.getDate();
    var mes = hoje.getMonth() + 1;
    var ano = hoje.getFullYear();

    if (dia < 10) {
        dia = '0' + dia;
    }

    if (mes < 10) {
        mes = '0' + mes;
    }

    $('#data').text(`${dia}/${mes}/${ano}`);
}