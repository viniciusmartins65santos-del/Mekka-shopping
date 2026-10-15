const cadastro = document.getElementById("form-cadastro");

const nascimento = document.getElementById("nascimento");
const hoje = new Date();
nascimento.max = hoje.getFullYear() + "-" + String(hoje.getMonth() + 1).padStart(2, "0") + "-" + String(hoje.getDate()).padStart(2, "0");
cadastro.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const senha = document.getElementById("senha");
    const confirmar = document.getElementById("confirmarsenha");
    confirmar.setCustomValidity("");
    if (senha.value !== confirmar.value) {
        confirmar.setCustomValidity("As senhas precisam ser iguais.");
    }
    if (!validarFormulario(cadastro, "retorno-cadastro")) {
        return;
    }
    const perfil = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value.toLowerCase()
    };
    if (!salvarSessao("mekkaCadastro", perfil)) {
        mostrarMensagem("retorno-cadastro", "Não foi possível guardar a demonstração. Permita o armazenamento neste navegador e tente novamente.", true);
        return;
    }
    cadastro.reset();
    window.location.href = "../login/login.html?cadastro=ok";
});
cadastro.querySelector('button[type="submit"]').disabled = false;
