/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function ordenarDecrescente() {
    const entrada = $('#vetor').val();
    const vetor = entrada.split(',').map(Number);

    if (vetor.length !== 3 || vetor.some(isNaN)) {
        $('#resultado').text('Por favor, insira exatamente 3 números válidos separados por vírgula.');
        return;
    }

    const vetorOrdenado = [...vetor].sort((a, b) => b - a);
    $('#resultado').text(`Vetor ordenado: [${vetorOrdenado.join(', ')}]`);
}


