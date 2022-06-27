var nome = window.document.getElementById('nome')

function validaNome() {
    let Mensagem = document.querySelector("textoNome");
    if (nome.value.length < 2) {
        textoNome.innerHTML = "Nome inválido";
        textoNome.style.color = "red";
        nomeOk = true;
    } else {
        textoNome.innerHTML = "Nome Válido";
        textoNome.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
    let textoEmail = document.querySelector("textoEmail");
    if (email.value.indexOf("@") > 0 && email.value.indexOf(".") > 0) {
        textoEmail.innerHTML = "E-mail válido";
        textoEmail.style.color = "green";
        emailOk = true;
    } else {
        textoEmail.innerHTML = "E-mail inválido";
        textoEmail.style.color = "red";
        emailOk = false;
    }
}

function validaMensagem() {
    let textoMensagem = document.querySelector("textoMensagem");

    if (assunto.value.length >= 1000) {
        textoMensagem.innerHTML =
            "Texto é muito grande, digite no máximo 1000 caracteres";
        textoMensagem.style.color = "red";
        textoMensagem.style.display = "block";
        mensagemOk = false;
    } else {
        textoMensagem.style.display = "none";
        mensagemOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Preencha o formulário corretamente antes de enviar...");
    }
}