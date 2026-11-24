function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function mostrarMensagem(id, texto, erro = false) {
    const mensagem = document.getElementById(id);
    mensagem.textContent = texto;
    mensagem.hidden = false;
    mensagem.classList.toggle("erro", erro);
}

function validarFormulario(formulario, retorno) {
    const campos = formulario.querySelectorAll('input[type="text"], input[type="email"], textarea');
    campos.forEach(function (campo) {
        campo.value = campo.value.trim();
        campo.setCustomValidity("");
        if (campo.value && campo.minLength > 0 && campo.value.length < campo.minLength) {
            campo.setCustomValidity("Preencha pelo menos " + campo.minLength + " caracteres.");
        }
    });
    if (!formulario.checkValidity()) {
        mostrarMensagem(retorno, "Confira os campos destacados e preencha as informações solicitadas.", true);
        formulario.reportValidity();
        return false;
    }
    return true;
}

function lerSessao(chave) {
    try {
        return JSON.parse(sessionStorage.getItem(chave));
    } catch {
        return null;
    }
}

function salvarSessao(chave, valor) {
    try {
        sessionStorage.setItem(chave, JSON.stringify(valor));
        return true;
    } catch {
        return false;
    }
}

function atualizarCabecalho() {
    const usuario = lerSessao("mekkaUsuario");
    const link = document.getElementById("link-conta");
    const sair = document.getElementById("sair");
    if (usuario && typeof usuario.nome === "string") {
        link.textContent = "Olá, " + usuario.nome.split(" ")[0];
        sair.hidden = false;
    } else {
        link.textContent = "Entrar";
        sair.hidden = true;
    }
}

document.getElementById("sair").addEventListener("click", function () {
    if (salvarSessao("mekkaUsuario", null)) {
        window.location.href = "../login/login.html";
    } else {
        window.alert("Não foi possível encerrar a sessão. Confira as permissões de armazenamento do navegador.");
    }
});

document.querySelectorAll("input, textarea").forEach(function (campo) {
    campo.addEventListener("input", function () {
        campo.setCustomValidity("");
    });
});

atualizarCabecalho();

function carregarFoto(imagem, caminho) {
    const padrao = "../produtos/sem-imagem.svg";
    imagem.addEventListener("error", function () {
        if (imagem.getAttribute("src") !== padrao) imagem.src = padrao;
    }, { once: true });
    imagem.src = caminho || padrao;
}
