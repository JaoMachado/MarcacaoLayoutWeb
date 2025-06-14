/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 13/06/2025
*/
function inverterVetor(vetor){
    var vetorInvertido = [];

    vetorInvertido[0] = vetor[2];
    vetorInvertido[1] = vetor[1];
    vetorInvertido[2] = vetor[0];

    return vetorInvertido;
}

function ordenarDecrescente() {
    var vetor = [10, 20, 30];

    var vetorInvertido = inverterVetor(vetor);

    $('#resultado').text(`Vetor Invertido: [${vetorInvertido}]`);
}


