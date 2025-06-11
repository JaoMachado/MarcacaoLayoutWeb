/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function copiarSemVogais() {
    let original = $('#string').val();
    let copia = "";                            

    for (let i = 0; i < original.length; i++) {
        let caractere = original[i];
        if (!'aeiouAEIOU'.includes(caractere)) {
            copia += caractere;
        }
    }

    $('#resultado').text(copia);
}

