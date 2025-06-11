/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function encontrarIndice(vetor, valor) {
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] === valor) {
            return i;
        }
    }
    return -1;
}

function acharValor() {
    var valorInput = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");

    var vetor = [1, 5, 10, 17, 32, 40, 54, 70, 99];
    
    var indice = encontrarIndice(vetor, valorInput);

    if (indice !== -1) {
        resultado.textContent = `Valor encontrado na posição: ${indice}`;
        resultado.className = "text-success";
    } else {
        resultado.textContent = "Valor não encontrado no vetor.";
        resultado.className = "text-danger";
    }
}