/* 
    Author: João Pedro Machado Silva - BV3032477 
    Data da Implementação: 21/05/2025
*/

document.getElementById("teste").onclick = function(){
    minhaFuncao();
};

function mDown(objBotao){
    objBotao.style.background = "black";
    objBotao.style.color = "green";
    objBotao.value = "SOLTE";
};

function mUp(objBotao){
    objBotao.style.background = "lightgreen";
    objBotao.style.color = "white";
    objBotao.value = "lightgreen";
};

function minhaFuncao(){
    var botaoTeste = document.getElementById("teste").value;
    console.log("Conteúdo do Botão: " + botaoTeste);
};

function validateForm(){
    var nome = document.forms["contatosForm"]["usuario_nome"].value;
    var email = document.forms["contatosForm"]["usuario_email"].value;
    var dataNasc = document.forms["contatosForm"]["usuario_data"].value;
    var cel = document.forms["contatosForm"]["usuario_cel"].value;
    var msg = document.forms["contatosForm"]["usuario_msg"].value;

    if(nome == null || nome == ""){
        alert("ATENÇÃO!!! Nome é Obrigatório!");
        return false;
    }

    if(email == null || email == ""){
        alert("ATENÇÃO!!! Email é Obrigatório!");
        return false;
    }

    if(dataNasc == null || dataNasc == ""){
        alert("ATENÇÃO!!! Data de Nascimento é Obrigatório!");
        return false;
    }

    if(cel == null || cel == ""){
        alert("ATENÇÃO!!! Celular é Obrigatório!");
        return false;
    }

    if(msg == null || msg == ""){
        alert("ATENÇÃO!!! Mensagem é Obrigatório!");
        return false;
    }
};