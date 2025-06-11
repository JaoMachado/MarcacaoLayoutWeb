/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function juntarComPontoEVirgula(vetor) {
    var resultado = "";

    for (var i = 0; i < vetor.length; i++) {
        resultado += vetor[i];
        if (i < vetor.length - 1) {
            resultado += ";";
        }
    }

    return resultado;
}

function converterParaString() {
    var vetor = ["FAÇA", "DOS", "SEUS", "SONHOS", "UM", "OBJETIVO"];

    let resultado = juntarComPontoEVirgula(vetor);
    $('#resultado').text(resultado);
}