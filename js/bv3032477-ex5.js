/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function encontrarIndice(vetor, valor) {
    // Variaveis para transformar o valor que esta em texto apra inteiro 
    var numero = 0;
    var valido = true;

    // Transformando o valor pra inteiro sem o parseInt()
    for (var i = 0; i < valor.length; i++) {
        var cod = valor.charCodeAt(i);

        if (cod >= 48 && cod <= 57) {
            numero = numero * 10 + (cod - 48);
        } else {
            valido = false;
            break;
        }
    }

    // Onde a função realmente faz a verificação e retorna indice ou -1 caso não encontre.
    for (var i = 0; i < vetor.length; i++) {

        if (vetor[i] === numero) {
            return i;
        }
        
    }

    return -1;
}

function acharValor() {
    // Obtendo os valores dos campos em textos
    var textoValor = document.getElementById("valor").value;
    var resultado = document.getElementById("resultado");

    // Criando o vetor e obtendo o índice através da função
    var vetor = [1, 5, 10, 17, 32, 40, 54, 70, 99];
    var indice = encontrarIndice(vetor, textoValor);

    // Verificando o índice e exibindo a mensagem correspondente
    if (indice !== -1) {
        resultado.textContent = `Valor encontrado na posição: ${indice}`;
        resultado.className = "text-success";
    } else {
        resultado.textContent = "Valor não encontrado no vetor.";
        resultado.className = "text-danger";
    }
}