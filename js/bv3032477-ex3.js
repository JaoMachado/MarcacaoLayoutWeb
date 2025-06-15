/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 09/06/2025
*/

function checarAnoBissexto(ano) {
    // Variaveis para transformar o ano que esta em texto para inteiro 
    var numero = 0;
    var valido = true;

    // Transformando o valor pra inteiro sem o parseInt()
    for (var i = 0; i < ano.length; i++) {
        var cod = ano.charCodeAt(i);

        if (cod >= 48 && cod <= 57) {
            numero = numero * 10 + (cod - 48);
        } else {
            valido = false;
            break;
        }
    }

    // Onde a função realmente faz a verificação e retorna o texto correspondente
    if (!valido || numero === 0) {
        return "Digite um ano válido.";
    } else {
        if ((numero % 4 === 0 && numero % 100 !== 0) || (numero % 400 === 0)) {
            return "Ano Bissexto";
        } else {
            return "Não é Ano Bissexto";
        }
    }
}

function mostrarResultado(){
    // Obtendo o ano em texto
    var ano = document.getElementById("ano").value;

    // Mostrando no resultado
    $('#resultado').text(checarAnoBissexto(ano));
}