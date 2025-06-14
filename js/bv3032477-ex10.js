/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function validarLogin() {
    var nomeCorreto = "João Pedro Machado Silva";
    var prontuarioCorreto = "BV3032477";

    var loginDigitado = document.forms["formLogin"]["login"].value;
    var senhaDigitada = document.forms["formLogin"]["senha"].value;
    var msg = document.getElementById("mensagem");

    var vazioLogin = true;
    var vazioSenha = true;

    for (var i = 0; i < loginDigitado.length; i++) {
        if (loginDigitado.charAt(i) !== ' ') {
            vazioLogin = false;
            break;
        }
    }

    for (var j = 0; j < senhaDigitada.length; j++) {
        if (senhaDigitada.charAt(j) !== ' ') {
            vazioSenha = false;
            break;
        }
    }

    if (loginDigitado === '' || senhaDigitada === '' || vazioLogin || vazioSenha) {
        msg.textContent = "Preencha todos os campos.";
        msg.classList.remove("text-success");
        msg.classList.add("text-danger");
        return;
    }

    if (loginDigitado === nomeCorreto && senhaDigitada.toUpperCase() === prontuarioCorreto) {
        msg.textContent = "Login efetuado com sucesso!";
        msg.classList.remove("text-danger");
        msg.classList.add("text-success");
    } else {
        msg.textContent = "Login ou senha inválidos.";
        msg.classList.remove("text-success");
        msg.classList.add("text-danger");
    }
}
