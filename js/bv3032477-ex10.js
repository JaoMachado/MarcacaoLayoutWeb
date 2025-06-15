/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 10/06/2025
*/

function validarLogin() {
    // Cria o login correto que se espera
    var nomeCorreto = "João Pedro Machado Silva";
    var prontuarioCorreto = "BV3032477";

    // Obtem os valores dos campos
    var loginDigitado = document.forms["formLogin"]["login"].value;
    var senhaDigitada = document.forms["formLogin"]["senha"].value;
    var msg = document.getElementById("mensagem");

    // Variáveis para controlar se os campos são ou não vazios
    var vazioLogin = true;
    var vazioSenha = true;

    // Percorrendo o login para verificar se está vazio
    for (var i = 0; i < loginDigitado.length; i++) {
        if (loginDigitado.charAt(i) !== ' ') {
            vazioLogin = false;
            break;
        }
    }

    // Percorrendo a senha para verificar se está vazia
    for (var j = 0; j < senhaDigitada.length; j++) {
        if (senhaDigitada.charAt(j) !== ' ') {
            vazioSenha = false;
            break;
        }
    }

    // Se qualquer um dos dois estiver vazio, exibe a mensagem
    if (loginDigitado === '' || senhaDigitada === '' || vazioLogin || vazioSenha) {
        msg.textContent = "Preencha todos os campos.";
        msg.classList.remove("text-success");
        msg.classList.add("text-danger");
        return;
    }

    // Se bater o digitado com esperado, mensagem de sucesso
    if (loginDigitado === nomeCorreto && senhaDigitada.toUpperCase() === prontuarioCorreto) {
        msg.textContent = "Login efetuado com sucesso!";
        msg.classList.remove("text-danger");
        msg.classList.add("text-success");
    } else {
        // Se não, mensagem de um dos campos inválidos.
        msg.textContent = "Login ou senha inválidos.";
        msg.classList.remove("text-success");
        msg.classList.add("text-danger");
    }
}
