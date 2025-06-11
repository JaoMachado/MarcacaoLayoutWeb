/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function copiarSemVogais() {
    let original = $('#string').val();
    let copia = "";                            

    for (var i = 0; i < original.length; i++) {
        var letra = original[i];
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

    $('#resultado').text(copia);
}

