const login = document.getElementById("form-login");

const perfil = lerSessao("mekkaCadastro");
if (perfil && typeof perfil.email === "string") {
    document.getElementById("email").value = perfil.email;
}
if (perfil && new URLSearchParams(window.location.search).get("cadastro") === "ok") {
    mostrarMensagem("retorno-login", "Cadastro demonstrativo criado! Entre com o e-mail preenchido e uma senha fictícia de pelo menos 6 caracteres.");
}
login.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (!validarFormulario(login, "retorno-login")) {
        return;
    }
    const email = document.getElementById("email").value.toLowerCase();
    if (!perfil || perfil.email !== email) {
        mostrarMensagem("retorno-login", "Este e-mail não foi cadastrado nesta aba. Crie uma conta de demonstração ou entre como visitante.", true);
        return;
    }
    if (!salvarSessao("mekkaUsuario", perfil)) {
        mostrarMensagem("retorno-login", "O navegador não permitiu iniciar a sessão de demonstração.", true);
        return;
    }
    login.reset();
    window.location.href = "../marketplace/market.html";
});
const visitante = document.getElementById("entrar-visitante");
visitante.addEventListener("click", function () {
    if (salvarSessao("mekkaUsuario", { nome: "Visitante", email: "" })) {
        window.location.href = "../marketplace/market.html";
    } else {
        mostrarMensagem("retorno-login", "O navegador não permitiu iniciar a sessão de demonstração.", true);
    }
});
visitante.disabled = false;
login.querySelector('button[type="submit"]').disabled = false;
