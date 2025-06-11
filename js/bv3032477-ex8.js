/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

$(document).ready(function() {
    const vetorStrings = [
        "Zero", "Um", "Dois", "Três", "Quatro", 
        "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"
    ];

    $('#btnBuscar').click(function() {
        let pos = parseInt($('#numero').val());

        if (isNaN(pos) || pos < 0 || pos > 10) {
            $('#resultado').text('Por favor, digite um número válido entre 0 e 10').removeClass('text-success').addClass('text-danger');
            return;
        }

        let texto = vetorStrings[pos];
        $('#resultado').text(`Posição ${pos}: ${texto}`).removeClass('text-danger').addClass('text-success');
    });
});

