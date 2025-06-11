/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function juntarComPontoEVirgula(vetor) {
    return vetor.map(e => e.trim()).join(';');
}

function converterParaString() {
    let entrada = $('#strings').val();
    let vetor = entrada.split(',');
    let resultado = juntarComPontoEVirgula(vetor);
    $('#resultado').text(resultado);
}
