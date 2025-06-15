/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function juntarComPontoEVirgula(vetor) {
    // Variavel do resultado
    var resultado = "";

    // Fazendo a junção do valor do vetor com o ; na variavel resultado.
    for (var i = 0; i < vetor.length; i++) {
        resultado += vetor[i];

        // Não põe ; no final
        if (i < vetor.length - 1) {
            resultado += ";";
        }
    }

    return resultado;
}

function converterParaString() {
    var vetor = ["FAÇA", "DOS", "SEUS", "SONHOS", "UM", "OBJETIVO"];

    var resultado = juntarComPontoEVirgula(vetor);
    $('#resultado').text(resultado);
}