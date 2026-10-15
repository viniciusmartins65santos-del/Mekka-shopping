const recuperar = document.getElementById("form-recuperar");

recuperar.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (!validarFormulario(recuperar, "retorno-recuperar")) {
        return;
    }
    recuperar.reset();
    mostrarMensagem("retorno-recuperar", "Solicitação simulada. Nenhum e-mail foi enviado. Para entrar na demonstração, use o e-mail cadastrado e qualquer senha fictícia com 6 ou mais caracteres.");
});
recuperar.querySelector('button[type="submit"]').disabled = false;
