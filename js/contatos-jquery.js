/*
    João Pedro Machado Silva - BV3032477
    Data da Implementação: 28/05/2025
*/

// Sumir para aparecer os exemplos
$(document).ready(function(){
    var pExemplos = $("#saExemplos");
    pExemplos.on({
    click: function() {
        $("#exemplos").slideToggle();
    }
})});

// Acionando o alerta com o botão JQUERY manipulando o DOM e utilizando diversas modificações
$(document).ready(function(){
    var botaoJQ = $("#JQuery");
    botaoJQ.on({
    mouseenter: function () { 
        $(this).css("color", "yellow"); 
    },
    mouseleave: function () { 
        $(this).css("color", "red");
    },
    click: function() {
        alert("Você clicou no botão: " + $(this).text());
        $(this).css("background-color", "blue");
    }
})});

// Modificando os elementos de maneira convencional
    // Fazendo o paragrafo respectivo sumir
$(document).ready(function () {
    $("#someAparece").click(function () {
        $(this).hide();
    });
});

    // Fazendo o parágrafo reaparecer
$(document).ready(function () {
    $("h3").click(function () {
        $("#someAparece").show();
    });
});

    // Fazendo aparecer um alerta quando passar o mouse em cima
$(document).ready(function () {
    $("#alerta").mouseenter(function () {
        alert('Este é um parágrafo!');
    });
});

// Utilizando a maneira para fazer diversas tarefas para o mesmo elemento
    // Mudando a cor do paragrafo conforme o comportamento do mouse
$(document).ready(function () {
    $("#mudaCorSVar").on({
        mouseenter: function () { 
            $(this).css("color", "blue"); 
        }, 
        mouseleave: function () { 
            $(this).css("color", "red");
        },
        click: function () {
            $(this).css("color", "black"); 
        }
})});

// Utilizando a variável para facilitar 
    // Mudando a cor do paragrafo conforme o comportamento do mouse
$(document).ready(function () {
    var paragrafo = $("#mudaCorVar");
    paragrafo.on({
        mouseenter: function () { 
            $(this).css("color", "blue"); 
        }, 
        mouseleave: function () { 
            $(this).css("color", "red");
        },
        click: function () {
            $(this).css("color", "black"); 
        }
})});

// Manipulando usando a junção de ações
    // faz o formulário subir tampando o paragráfo e descer novamente. Muda a cor para azul
$(document).ready(function(){
    var paragrafo = $("#juncaoAcoes");
    paragrafo.slideUp(2000).slideDown(3000).css("color", "blue");
});

// Manipulando o DOM
$(document).ready(function(){
    var paragrafo = $("#dom");
    paragrafo.click(function(){
        alert($(this).text());
    })
});

// Colocando o cursor para piscar no input Nome
$(document).ready(function(){
    var inputName = $('input[name="usuario_nome"]');
    inputName.focus();
    inputName.on({
    change: function () { 
        $(this).css("color", "green"); 
    },
})});

// Confirmando o envio do formulário por alerta
$('form').submit(function(event) {
    event.preventDefault(); // Impede envio real
    alert('Formulário foi enviado!');
});