var nome = window.document.getElementById('nome')

function validaNome() {
    let textoNome = document.querySelector("#textoNome");
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
    let textoEmail = document.querySelector("#textoEmail");
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

function validaAssunto() {
    let textoAssunto = document.querySelector("#textoAssunto");

    if (assunto.value.length >= 1000) {
        textoAssunto.innerHTML =
            "Texto é muito grande, digite no máximo 1000 caracteres";
        textoAssunto.style.color = "red";
        textoAssunto.style.display = "block";
        assuntoOk = false;
    } else {
        textoAssunto.style.display = "none";
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Preencha o formulário corretamente antes de enviar...");
    }
}

function mapaZoom() {
    mapa.style.width = "800px";
    mapa.style.height = "600px";
}

function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}