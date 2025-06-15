/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 13/06/2025
*/

function inverterVetor(vetor){
    // Criando o vetor invertido
    var vetorInvertido = [];

    // Invertendo as posições uma a uma e retornando
    vetorInvertido[0] = vetor[2];
    vetorInvertido[1] = vetor[1];
    vetorInvertido[2] = vetor[0];

    return vetorInvertido;
}

function ordenarDecrescente() {
    // Criando o vetor
    var vetor = [10, 20, 30];

    // Criando o vetor que receberá o retorno da função
    var vetorInvertido = inverterVetor(vetor);

    // Exibindo o resultado
    $('#resultado').text(`Vetor Invertido: [${vetorInvertido}]`);
}


