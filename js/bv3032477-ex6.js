/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function copiarSemVogais() {
    // Obtendo a string original e criando uma copia
    var original = document.getElementById("string").value;
    var copia = "";                            

    // percorrendo a string verificando se é nao é vogal para adicionar a copia
    for (var i = 0; i < original.length; i++) {
        var letra = original.charAt(i);
        if (
            letra !== 'a' && letra !== 'e' && letra !== 'i' && letra !== 'o' && letra !== 'u' &&
            letra !== 'A' && letra !== 'E' && letra !== 'I' && letra !== 'O' && letra !== 'U' &&
            letra !== 'á' && letra !== 'é' && letra !== 'í' && letra !== 'ó' && letra !== 'ú' &&
            letra !== 'Á' && letra !== 'É' && letra !== 'Í' && letra !== 'Ó' && letra !== 'Ú' &&
            letra !== 'ã' && letra !== 'õ' && letra !== 'â' && letra !== 'ê' && letra !== 'ô' &&
            letra !== 'Ã' && letra !== 'Õ' && letra !== 'Â' && letra !== 'Ê' && letra !== 'Ô'
        ) {
            copia += letra;
        }
    }

    // Exibindo no local correspondente
    $('#resultado').text(copia);
}

