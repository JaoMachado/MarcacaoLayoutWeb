/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function mostrarData() {
    // Criando a variavel de data e obtendo os valores de cada atributo(adia, mes e ano)
    var hoje = new Date();
    var dia = hoje.getDate();
    var mes = hoje.getMonth() + 1;
    var ano = hoje.getFullYear();

    // Adicionando 0 para dias menores que 2 digitos
    if (dia < 10) {
        dia = '0' + dia;
    }

    // Adicionando 0 para meses menores que 2 digitos
    if (mes < 10) {
        mes = '0' + mes;
    }

    // Exibindo a data no campo e no formato desejado
    $('#data').text(`${dia}/${mes}/${ano}`);
}