/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function encontrarIndice(vetor, valor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i].trim() === valor.trim()) {
            return i;
        }
    }
    return -1;
}

function acharValor() {
    const vetorInput = document.getElementById("vetor").value;
    const valorInput = document.getElementById("valor").value;

    const vetor = vetorInput.split(",");
    const indice = encontrarIndice(vetor, valorInput);

    const resultado = document.getElementById("resultado");
    if (indice !== -1) {
        resultado.textContent = `Valor encontrado na posição: ${indice}`;
        resultado.className = "text-success";
    } else {
        resultado.textContent = "Valor não encontrado no vetor.";
        resultado.className = "text-danger";
    }
}