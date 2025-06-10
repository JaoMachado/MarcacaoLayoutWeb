/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function mostrarData() {
    let d = new Date();
    let dia = String(d.getDate()).padStart(2, '0');
    let mes = String(d.getMonth() + 1).padStart(2, '0');
    let ano = d.getFullYear();
    $('#data').text(`${dia}/${mes}/${ano}`);
}