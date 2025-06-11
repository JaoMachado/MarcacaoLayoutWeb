/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function validarLogin() {
    const nomeCorreto = "João Pedro Machado Silva";
    const prontuarioCorreto = "BV3032477";

    const login = $('#login').val().trim();
    const senha = $('#senha').val().trim();
    const msg = $('#mensagem');

    if (login === '' || senha === '') {
        msg.text("Preencha todos os campos.").removeClass("text-success").addClass("text-danger");
        return;
    }

    if (login === nomeCorreto && senha.toUpperCase() === prontuarioCorreto) {
        msg.text("Login efetuado com sucesso!").removeClass("text-danger").addClass("text-success");
    } else {
        msg.text("Login ou senha inválidos.").removeClass("text-success").addClass("text-danger");
    }
}
